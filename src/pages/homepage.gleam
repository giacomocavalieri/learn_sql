import gleam/option.{type Option, None, Some}
import lustre
import lustre/attribute
import lustre/effect.{type Effect}
import lustre/element.{type Element}
import lustre/element/html
import sql/exercise.{type Exercise}
import sql/sql
import sql/valid
import timer.{type Timer}

pub fn main() {
  let db = sql.connect()
  let app = lustre.application(init, update, view)
  let assert Ok(_) = lustre.start(app, "#app", db)
  Nil
}

pub type Model {
  Model(db: sql.Database, exercise: Exercise(Nil), timer: Option(Timer))
}

pub fn init(db: sql.Database) -> #(Model, Effect(Msg)) {
  let column = "greeting"
  let message = "hello, SQL!"
  let query = "select '" <> message <> "' as " <> column
  let exercise =
    exercise.Exercise(
      kind: Nil,
      validate: fn(_) { valid.AllGood },
      user_solution: Some(exercise.UserSolution(
        query:,
        result: Some(exercise.Validated(
          returned: sql.Returned([column], [[message]]),
          validation: valid.AllGood,
        )),
      )),
    )

  #(Model(db:, exercise:, timer: None), effect.none())
}

pub type Msg {
  UserTypedQuery(query: String)
  InactivityTimerStarted(timer: Timer)
  InactivityTimerExpired
  DatabaseRanQuery(result: Result(sql.Returned, String))
}

pub fn update(model: Model, msg: Msg) -> #(Model, Effect(Msg)) {
  case msg {
    DatabaseRanQuery(result:) -> {
      let exercise = exercise.set_result(model.exercise, result)
      let model = Model(..model, exercise:)
      #(model, effect.none())
    }

    InactivityTimerStarted(timer: new_timer) -> {
      let effect = case model.timer {
        Some(previous_timer) -> timer.stop(previous_timer)
        None -> effect.none()
      }
      #(Model(..model, timer: Some(new_timer)), effect)
    }

    InactivityTimerExpired -> {
      let model = Model(..model, timer: None)
      let query = exercise.user_query(model.exercise)
      let effect = run_query(model.db, query, DatabaseRanQuery)
      #(model, effect)
    }

    UserTypedQuery(query:) -> {
      let exercise = exercise.set_query(model.exercise, query)
      let model = Model(..model, exercise:)
      let effect = {
        use timer_msg <- effect.map(timer.start(ms: 500))
        case timer_msg {
          timer.TimerExpired -> InactivityTimerExpired
          timer.TimerStarted(timer:) -> InactivityTimerStarted(timer:)
        }
      }

      #(model, effect)
    }
  }
}

pub fn view(model: Model) -> Element(Msg) {
  html.div([attribute.class("limit-max-width-and-center")], [
    html.main([], [
      html.h1([], [html.text("TBD: A nice title")]),
      exercise.editor_with_result(model.exercise, fn(query, _) {
        UserTypedQuery(query)
      }),
      html.p([], [
        html.text("Test your SQL skills by trying one of these tracks:"),
      ]),
      html.ul([attribute.class("exercises-list")], [
        html.li([], [
          html.a([attribute.href("lucys_vinyl_collection")], [
            html.text("Lucy's Vinyl Collection"),
          ]),
          html.p([], [
            html.text(
              "Test your SQL skills by helping Lucy organise her vinyl collection!",
            ),
          ]),
        ]),
      ]),
    ]),
    html.footer([], [html.text("This website is made with Gleam!")]),
  ])
}

// --- DATABASE EFFECTS --------------------------------------------------------

fn run_query(
  db: sql.Database,
  query: String,
  then to_msg: fn(Result(sql.Returned, String)) -> msg,
) -> Effect(msg) {
  use dispatch <- effect.from
  use result <- sql.run(db, query)
  dispatch(to_msg(result))
}
