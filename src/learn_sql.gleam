import gleam/option.{None, Some}
import gleam/result
import gleam/uri.{type Uri}
import lustre
import lustre/attribute
import lustre/effect.{type Effect}
import lustre/element.{type Element}
import lustre/element/html
import modem
import pages/homepage
import pages/lucys_vinyl_collection
import sql/sql

pub fn main() {
  let app = lustre.application(init, update, view)
  let db = sql.connect()
  let init_data = InitData(db:)
  let assert Ok(_) = lustre.start(app, "#app", init_data)
}

// --- MODEL -------------------------------------------------------------------

pub type Model {
  Model(db: sql.Database, page: Page)
}

pub type Page {
  HomePage(homepage.Model)
  LucysPage(lucys_vinyl_collection.Model)
  NotFoundPage
}

pub type InitData {
  InitData(db: sql.Database)
}

pub fn init(init_data: InitData) -> #(Model, Effect(Msg)) {
  let InitData(db:) = init_data
  let #(page, page_init_effect) = init_page(db)
  let model = Model(db:, page:)
  let effect =
    effect.batch([
      modem.init(fn(uri) { OnRouteChange(route(uri)) }),
      page_init_effect,
    ])

  #(model, effect)
}

fn init_page(db: sql.Database) -> #(Page, Effect(Msg)) {
  case modem.initial_uri() |> result.map(route) {
    Error(_) | Ok(HomeRoute) -> {
      let #(page, effect) = homepage.init(db)
      #(HomePage(page), effect.map(effect, HomeMsg))
    }
    Ok(LucysRoute) -> {
      let #(page, effect) =
        lucys_vinyl_collection.init(lucys_vinyl_collection.InitData(db:))
      #(LucysPage(page), effect.map(effect, LucysMsg))
    }
    Ok(NotFoundRoute) -> #(NotFoundPage, effect.none())
  }
}

fn route(uri: Uri) -> Route {
  let path = uri.path_segments(uri.path)
  case uri.host {
    Some("localhost") | Some("127.0.0.1") -> route_dev(path)
    None | Some(_) -> route_github_pages(path)
  }
}

fn route_dev(path: List(String)) {
  case path {
    ["index"] | ["home"] | ["learn_sql"] | [] -> HomeRoute
    ["lucys_vinyl_collection"] -> LucysRoute
    _ -> NotFoundRoute
  }
}

fn route_github_pages(path: List(String)) {
  case path {
    [] -> HomeRoute
    ["learn_sql", ..rest] -> route_dev(rest)
    [_, ..] -> NotFoundRoute
  }
}

// --- UPDATE ------------------------------------------------------------------

pub type Msg {
  OnRouteChange(Route)
  HomeMsg(homepage.Msg)
  LucysMsg(lucys_vinyl_collection.Msg)
}

pub type Route {
  HomeRoute
  LucysRoute
  NotFoundRoute
}

pub fn update(model: Model, msg: Msg) -> #(Model, Effect(Msg)) {
  case msg, model.page {
    HomeMsg(msg), HomePage(page) -> {
      let #(page, effect) = homepage.update(page, msg)
      let model = Model(..model, page: HomePage(page))
      let effect = effect.map(effect, HomeMsg)
      #(model, effect)
    }

    HomeMsg(_), _ -> #(model, effect.none())

    LucysMsg(msg), LucysPage(page) -> {
      let #(page, effect) = lucys_vinyl_collection.update(page, msg)
      let model = Model(..model, page: LucysPage(page))
      let effect = effect.map(effect, LucysMsg)
      #(model, effect)
    }

    LucysMsg(_), _ -> #(model, effect.none())

    OnRouteChange(HomeRoute), HomePage(_)
    | OnRouteChange(LucysRoute), LucysPage(_)
    -> #(model, effect.none())

    OnRouteChange(HomeRoute), _ -> {
      let #(page, effect) = homepage.init(model.db)
      let model = Model(..model, page: HomePage(page))
      let effect = effect.map(effect, HomeMsg)
      #(model, effect)
    }

    OnRouteChange(LucysRoute), _ -> {
      let #(page, effect) =
        lucys_vinyl_collection.init(lucys_vinyl_collection.InitData(
          db: model.db,
        ))
      let model = Model(..model, page: LucysPage(page))
      let effect = effect.map(effect, LucysMsg)
      #(model, effect)
    }

    OnRouteChange(NotFoundRoute), _ -> {
      let model = Model(..model, page: NotFoundPage)
      #(model, effect.none())
    }
  }
}

// --- VIEW --------------------------------------------------------------------

pub fn view(model: Model) -> Element(Msg) {
  case model.page {
    HomePage(page) -> homepage.view(page) |> element.map(HomeMsg)
    LucysPage(page) ->
      lucys_vinyl_collection.view(page) |> element.map(LucysMsg)
    NotFoundPage -> not_found_view()
  }
}

fn not_found_view() {
  html.div([attribute.class("limit-max-width-and-center")], [
    html.main([], [
      html.h1([], [html.text("Not found!")]),
      html.p([], [
        html.a([attribute.href("home")], [html.text("Go back to the home page")]),
      ]),
    ]),
  ])
}
