import gleam/dynamic/decode.{type Decoder}
import gleam/io
import gleam/json.{type Json}
import gleam/list
import gleam/option.{type Option, None, Some}
import gleam/result
import lustre/attribute
import lustre/element.{type Element}
import lustre/element/html
import sql/editor
import sql/sql
import sql/valid.{AllGood, Wrong}

/// An exercise defines which kind it is and a way to tell if a result is the
/// expected one or not.
///
pub type Exercise(kind) {
  Exercise(
    kind: kind,
    validate: fn(sql.Returned) -> valid.Validation,
    user_solution: Option(UserSolution),
  )
}

pub type UserSolution {
  UserSolution(query: String, result: Option(ExerciseResult))
}

pub type ExerciseResult {
  Errored(reasong: String)
  Validated(returned: sql.Returned, validation: valid.Validation)
}

pub fn user_query(exercise: Exercise(kind)) -> String {
  case exercise.user_solution {
    None -> "-- type your query here..."
    Some(solution) -> solution.query
  }
}

pub fn set_query(exercise: Exercise(kind), query: String) -> Exercise(kind) {
  let user_solution = case exercise.user_solution {
    None -> Some(UserSolution(query:, result: None))
    Some(user_solution) -> Some(UserSolution(..user_solution, query:))
  }
  Exercise(..exercise, user_solution:)
}

pub fn set_result(
  exercise: Exercise(kind),
  returned: Result(sql.Returned, String),
) -> Exercise(kind) {
  let result = case returned {
    Error(reason) -> Some(Errored(reason))
    Ok(returned) ->
      Some(Validated(returned:, validation: exercise.validate(returned)))
  }

  let user_solution = case exercise.user_solution {
    Some(solution) -> Some(UserSolution(..solution, result:))
    None -> Some(UserSolution(query: "", result:))
  }
  Exercise(..exercise, user_solution:)
}

pub fn is_solved(exercise: Exercise(kind)) -> Bool {
  case exercise.user_solution {
    Some(UserSolution(
      result: Some(Validated(validation: valid.AllGood, ..)),
      ..,
    )) -> True
    Some(_) | None -> False
  }
}

pub fn errored(exercise: Exercise(kind)) -> Bool {
  case exercise.user_solution {
    Some(UserSolution(result: Some(Errored(_)), ..)) -> True
    Some(_) | None -> False
  }
}

// --- EDITOR ------------------------------------------------------------------

/// Shows an editor for an exercise with its result below it.
///
pub fn editor_with_result(
  exercise: Exercise(kind),
  on_input on_input: fn(String, kind) -> msg,
) -> Element(msg) {
  let class = case errored(exercise), is_solved(exercise) {
    True, _ -> attribute.class("failure")
    _, True -> attribute.class("success")
    _, _ -> attribute.none()
  }

  let editor = {
    let editor = editor.view(user_query(exercise))
    use editor_msg <- element.map(editor)
    let editor.TypedCode(code) = editor_msg
    on_input(code, exercise.kind)
  }

  html.div([attribute.class("query"), class], [
    editor,
    case exercise.user_solution {
      Some(UserSolution(result: Some(result), ..)) -> result_view(result)
      Some(_) | None -> element.none()
    },
  ])
}

pub fn showcase_query(query: String) -> Element(msg) {
  html.div([attribute.class("query")], [editor.read_only(query)])
}

pub fn showcase_result(
  columns_names: List(String),
  rows: List(List(String)),
) -> Element(msg) {
  let result = Validated(sql.Returned(columns_names:, rows:), valid.AllGood)
  html.div([attribute.class("query")], [result_view(result)])
}

fn result_view(result: ExerciseResult) -> Element(msg) {
  let returned_text = case result {
    Errored(reason) -> reason
    Validated(returned:, validation: _) -> sql.returned_to_table(returned)
  }

  let hint = case result {
    Validated(returned: _, validation: valid.AllGood) | Errored(_) ->
      element.none()
    Validated(returned: _, validation: valid.Wrong(reason)) ->
      html.p([attribute.class("query-hint")], [html.text(reason)])
  }

  html.div([attribute.class("query-result")], [
    html.pre([], [html.code([], [html.text(returned_text)])]),
    hint,
  ])
}

// --- (DE)SERIALISATION -------------------------------------------------------

pub fn serialise_user_solution(user_solution: Option(UserSolution)) -> String {
  json.to_string({
    use UserSolution(query:, result:) <- serialise_optional(user_solution)
    json.object([
      #("query", json.string(query)),
      #("result", serialise_optional(result, serialise_result)),
    ])
  })
}

pub fn deserialise_user_solution(
  raw: String,
) -> Result(Option(UserSolution), Nil) {
  let decoder =
    option_decoder({
      use query <- decode.field("query", decode.string)
      use result <- decode.field("result", option_decoder(result_decoder()))
      decode.success(UserSolution(query:, result:))
    })

  json.parse(raw, decoder)
  |> io.debug
  |> result.replace_error(Nil)
}

fn serialise_result(result: ExerciseResult) -> Json {
  case result {
    Errored(reason) -> serialise_tagged("errored", json.string(reason))
    Validated(returned:, validation:) ->
      serialise_tagged(
        "validation",
        json.object([
          #("returned", serialise_returned(returned)),
          #("validation", serialise_validation(validation)),
        ]),
      )
  }
}

fn result_decoder() -> Decoder(ExerciseResult) {
  tagged_decoder(#("errored", decode.map(decode.string, Errored)), [
    #("validation", {
      use returned <- decode.field("returned", returned_decoder())
      use validation <- decode.field("validation", validation_decoder())
      decode.success(Validated(returned:, validation:))
    }),
  ])
}

fn serialise_returned(returned: sql.Returned) -> Json {
  let sql.Returned(columns_names:, rows:) = returned
  json.object([
    #("columns_names", json.array(columns_names, json.string)),
    #("rows", json.array(rows, json.array(_, json.string))),
  ])
}

fn returned_decoder() -> Decoder(sql.Returned) {
  use columns_names <- decode.field("columns_names", decode.list(decode.string))
  use rows <- decode.field("rows", decode.list(decode.list(decode.string)))
  decode.success(sql.Returned(columns_names:, rows:))
}

fn serialise_validation(validation: valid.Validation) -> Json {
  case validation {
    AllGood -> serialise_tagged("all_good", json.null())
    Wrong(reason) -> serialise_tagged("wrong", json.string(reason))
  }
}

fn validation_decoder() -> Decoder(valid.Validation) {
  tagged_decoder(#("all_good", decode.success(AllGood)), [
    #("wrong", decode.map(decode.string, Wrong)),
  ])
}

// --- (DE)SERIALISATION UTILS -------------------------------------------------

fn serialise_optional(optional: Option(a), serialise: fn(a) -> Json) -> Json {
  case optional {
    Some(value) -> serialise_tagged("some", serialise(value))
    None -> serialise_tagged("none", json.null())
  }
}

fn serialise_tagged(tag: String, value: Json) -> Json {
  json.object([#("kind", json.string(tag)), #("value", value)])
}

fn option_decoder(decoder: Decoder(a)) -> Decoder(Option(a)) {
  tagged_decoder(#("some", decode.map(decoder, Some)), [
    #("none", decode.success(None)),
  ])
}

fn tagged_decoder(
  decoder: #(String, Decoder(a)),
  decoders: List(#(String, Decoder(a))),
) -> Decoder(a) {
  let kind_decoder = {
    use kind <- decode.then(decode.string)
    case list.key_find([decoder, ..decoders], kind) {
      Ok(decoder) -> decode.success(decoder)
      Error(_) -> decode.failure(decoder.1, "a valid tag")
    }
  }

  use decoder <- decode.field("kind", kind_decoder)
  decode.at(["value"], decoder)
}
