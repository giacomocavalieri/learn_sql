import gleam/list
import gleam/option.{type Option, None, Some}
import gleam/result
import lustre/attribute
import lustre/effect.{type Effect}
import lustre/element.{type Element}
import lustre/element/html
import sql/exercise.{type Exercise, Exercise}
import sql/sql
import sql/valid
import timer.{type Timer}

// --- ALL THE EXERCISES -------------------------------------------------------

const init_queries = "
drop table if exists track;
drop table if exists vinyl;
"
  <> create_vinyl_and_insert
  <> "\n\n"
  <> create_track_and_insert

const create_vinyl_and_insert = "create table vinyl(
    vinyl_id bigserial primary key,
    author text not null,
    title text not null,
    total_duration int not null
);

-- Just a part of the collection...
insert into vinyl(vinyl_id, author, title, total_duration) values
    (1, 'Sabrina Carpenter', 'Nonsense', 350),
    (2, 'Michael Bublé', 'Christmas', 3550),
    (3, 'Stephen Schwarz', 'Wicked', 3300),
    (4, 'Sabrina Carpenter', 'Short ''n Sweet', 2181);"

const create_track_and_insert = "create table track(
    vinyl_id bigserial not null references vinyl(vinyl_id),
    position int not null,
    side char(1) not null,
    title text not null,

    primary key (vinyl_id, position, side),
    constraint side_value check(side = 'A' or side = 'B')
)"

/// All the exercises for the "Lucy's vinyl collection" story.
///
pub type LucyExercise {
  ListVinylsAlphabetically
  ImproveDurationDisplay
  FindShortest30MinutesVinyl
}

fn kind_to_string(kind: LucyExercise) -> String {
  let suffix = case kind {
    ListVinylsAlphabetically -> "list-vinyls-alphabetically"
    ImproveDurationDisplay -> "improve-duration-display"
    FindShortest30MinutesVinyl -> "find-shortest-30-minutes-vinyl"
  }
  "lucy-vinyl-collection-" <> suffix
}

fn kind_to_builder(
  kind: LucyExercise,
) -> fn(Option(exercise.UserSolution)) -> Exercise(LucyExercise) {
  case kind {
    ListVinylsAlphabetically -> list_vinyls_alphabetically
    ImproveDurationDisplay -> improve_duration_display
    FindShortest30MinutesVinyl -> find_shortest_30_minutes_vinyl
  }
}

fn list_vinyls_alphabetically(
  user_solution: Option(exercise.UserSolution),
) -> Exercise(LucyExercise) {
  Exercise(
    kind: ListVinylsAlphabetically,
    user_solution:,
    validate: validate_list_vinyls_alphabetically,
  )
}

fn validate_list_vinyls_alphabetically(returned) {
  let sql.Returned(columns_names:, rows:) = returned
  let expected_columns = ["title", "total_duration"]
  let expected_rows = [
    ["Christmas", "3550"],
    ["Nonsense", "350"],
    ["Short 'n Sweet", "2181"],
    ["Wicked", "3300"],
  ]

  use <- valid.check_columns_quantity(expected_columns, columns_names)
  use <- valid.check_columns_names(expected_columns, columns_names)
  use <- valid.check_wrong_rows_order(expected_rows, rows)
  use <- valid.check_rows_equal(expected_rows, rows)
  valid.AllGood
}

fn improve_duration_display(
  user_solution: Option(exercise.UserSolution),
) -> Exercise(LucyExercise) {
  Exercise(
    kind: ImproveDurationDisplay,
    user_solution:,
    validate: validate_improve_duration_display,
  )
}

fn validate_improve_duration_display(returned: sql.Returned) -> valid.Validation {
  let sql.Returned(columns_names:, rows:) = returned
  let expected_columns = ["title", "minutes", "seconds"]
  let expected_rows = [
    ["Christmas", "59", "10"],
    ["Nonsense", "5", "50"],
    ["Short 'n Sweet", "36", "21"],
    ["Wicked", "55", "0"],
  ]

  use <- valid.check_columns_quantity(expected_columns, columns_names)
  use <- valid.check_columns_names(expected_columns, columns_names)
  use <- valid.check_wrong_rows_order(expected_rows, rows)
  use <- valid.check_rows_equal(expected_rows, rows)
  valid.AllGood
}

fn find_shortest_30_minutes_vinyl(
  user_solution: Option(exercise.UserSolution),
) -> Exercise(LucyExercise) {
  Exercise(
    kind: FindShortest30MinutesVinyl,
    user_solution:,
    validate: validate_find_shortest_30_minutes_vinyl,
  )
}

fn validate_find_shortest_30_minutes_vinyl(
  returned: sql.Returned,
) -> valid.Validation {
  let sql.Returned(columns_names:, rows:) = returned
  let expected_columns = ["title"]
  let expected_rows = [["Short 'n Sweet"]]

  use <- valid.check_columns_quantity(expected_columns, columns_names)
  use <- valid.check_columns_names(expected_columns, columns_names)
  use <- valid.check_wrong_rows_order(expected_rows, rows)

  case rows {
    [_, _, ..] -> valid.Wrong("This query should return just a single title!")
    _ -> valid.check_rows_equal(expected_rows, rows, fn() { valid.AllGood })
  }
}

// --- APP ENTRY POINT ---------------------------------------------------------

fn load_exercises() -> Effect(Msg) {
  use dispatch <- effect.from()
  let assert [
    list_vinyls_alphabetically,
    improve_duration_display,
    find_shortest_30_minutes_vinyl,
  ] =
    [
      ListVinylsAlphabetically,
      ImproveDurationDisplay,
      FindShortest30MinutesVinyl,
    ]
    |> list.map(fn(kind) {
      do_local_storage_get(kind_to_string(kind))
      |> result.then(exercise.deserialise_user_solution)
      |> option.from_result
      |> option.flatten
      |> kind_to_builder(kind)
    })

  Exercises(
    list_vinyls_alphabetically:,
    improve_duration_display:,
    find_shortest_30_minutes_vinyl:,
  )
  |> LoadedExercises
  |> dispatch
}

// --- MODEL -------------------------------------------------------------------

pub type Model {
  Model(
    db: sql.Database,
    status: DatabaseStatus,
    timer: Option(Timer),
    exercises: Option(Exercises),
  )
}

pub type Exercises {
  Exercises(
    list_vinyls_alphabetically: Exercise(LucyExercise),
    improve_duration_display: Exercise(LucyExercise),
    find_shortest_30_minutes_vinyl: Exercise(LucyExercise),
  )
}

pub type DatabaseStatus {
  DatabaseInitialising
  DatabaseReady
  DatabaseKo
}

pub type InitData {
  InitData(db: sql.Database)
}

pub fn init(init_data: InitData) -> #(Model, Effect(Msg)) {
  let InitData(db:) = init_data

  let model =
    Model(db:, timer: None, status: DatabaseInitialising, exercises: None)
  let effect =
    effect.batch([
      load_exercises(),
      exec_queries(db, init_queries, fn(result) {
        case result {
          Ok(_) -> DatabaseInitialised
          Error(_) -> DatabaseFailedToInitialise
        }
      }),
    ])

  #(model, effect)
}

// --- UPDATE ------------------------------------------------------------------

pub type Msg {
  DatabaseInitialised
  DatabaseFailedToInitialise
  UserTypedQuery(query: String, exercise: LucyExercise)
  InactivityTimerStarted(timer: Timer)
  InactivityTimerExpired(exercise: LucyExercise)
  DatabaseRanQuery(exercise: LucyExercise, result: Result(sql.Returned, String))
  LoadedExercises(exercises: Exercises)
}

pub fn update(model: Model, msg: Msg) -> #(Model, Effect(Msg)) {
  case msg {
    DatabaseInitialised -> {
      let model = Model(..model, status: DatabaseReady)
      #(model, effect.none())
    }

    LoadedExercises(exercises:) -> {
      let model = Model(..model, exercises: Some(exercises))
      #(model, effect.none())
    }

    DatabaseFailedToInitialise -> {
      let model = Model(..model, status: DatabaseKo)
      #(model, effect.none())
    }

    UserTypedQuery(exercise:, query:) -> {
      let model = model |> set_exercise_query(exercise, query)
      let effect = {
        use timer_msg <- effect.map(timer.start(ms: 500))
        case timer_msg {
          timer.TimerExpired -> InactivityTimerExpired(exercise)
          timer.TimerStarted(timer) -> InactivityTimerStarted(timer)
        }
      }

      #(model, effect)
    }

    InactivityTimerStarted(timer: new_timer) -> {
      let effect = case model.timer {
        Some(previous_timer) -> timer.stop(previous_timer)
        None -> effect.none()
      }
      #(Model(..model, timer: Some(new_timer)), effect)
    }

    InactivityTimerExpired(exercise) -> {
      let model = Model(..model, timer: None)
      let effect = case get_exercise_query(model, exercise) {
        Ok(query) -> run_query(model.db, query, DatabaseRanQuery(exercise, _))
        Error(_) -> effect.none()
      }

      #(model, effect)
    }

    DatabaseRanQuery(exercise:, result:) -> {
      case model.exercises {
        None -> #(model, effect.none())
        Some(exercises) -> {
          let exercise =
            get_exercise(exercises, exercise)
            |> exercise.set_result(result)
          let model = set_exercise(model, exercise)
          let effect =
            local_storage_set(
              key: kind_to_string(exercise.kind),
              value: exercise.serialise_user_solution(exercise.user_solution),
            )

          #(model, effect)
        }
      }
    }
  }
}

fn set_exercise_query(
  model: Model,
  exercise: LucyExercise,
  query: String,
) -> Model {
  case model.exercises {
    None -> model
    Some(exercises) -> {
      let exercise = get_exercise(exercises, exercise)
      let user_solution = case exercise.user_solution {
        Some(solution) -> Some(exercise.UserSolution(..solution, query:))
        None -> Some(exercise.UserSolution(query:, result: None))
      }
      set_exercise(model, Exercise(..exercise, user_solution:))
    }
  }
}

fn get_exercise(
  exercises: Exercises,
  exercise: LucyExercise,
) -> Exercise(LucyExercise) {
  case exercise {
    ListVinylsAlphabetically -> exercises.list_vinyls_alphabetically
    ImproveDurationDisplay -> exercises.improve_duration_display
    FindShortest30MinutesVinyl -> exercises.find_shortest_30_minutes_vinyl
  }
}

fn get_exercise_query(
  model: Model,
  exercise: LucyExercise,
) -> Result(String, Nil) {
  case model.exercises {
    None -> Error(Nil)
    Some(exercises) ->
      case get_exercise(exercises, exercise).user_solution {
        Some(solution) -> Ok(solution.query)
        None -> Error(Nil)
      }
  }
}

fn set_exercise(model: Model, exercise: Exercise(LucyExercise)) -> Model {
  case model.exercises {
    None -> model
    Some(exercises) -> {
      let exercises = case exercise.kind {
        ListVinylsAlphabetically ->
          Exercises(..exercises, list_vinyls_alphabetically: exercise)
        ImproveDurationDisplay ->
          Exercises(..exercises, improve_duration_display: exercise)
        FindShortest30MinutesVinyl ->
          Exercises(..exercises, find_shortest_30_minutes_vinyl: exercise)
      }

      Model(..model, exercises: Some(exercises))
    }
  }
}

// --- VIEW --------------------------------------------------------------------

pub fn view(model: Model) -> Element(Msg) {
  html.div([attribute.class("limit-max-width-and-center")], [
    html.a([attribute.href("home")], [html.text("← home")]),
    html.main(
      [],
      list.append(introduction(), case model.status, model.exercises {
        DatabaseKo, _ -> [failed_to_initialise_view()]
        DatabaseInitialising, _ | _, None -> [initialising_view()]
        DatabaseReady, Some(exercises) -> view_exercises(exercises)
      }),
    ),
    html.footer([], [html.text("This website is made with Gleam!")]),
  ])
}

fn initialising_view() {
  html.p([attribute.class("wait-to-advance")], [
    html.text("Lucy is setting up the database, just wait a second..."),
  ])
}

fn failed_to_initialise_view() {
  html.p([attribute.class("wait-to-advance")], [
    html.text(
      "Something went wrong initialising the database, try reloading the page!",
    ),
  ])
}

fn introduction() {
  [
    html.h1([], [html.text("✨ Lucy's vinyl collection")]),
    text_paragraph(
      "
Lucy loves collecting vinyls, be them dusty vintage pieces or shiny and new ones.
But, with a growing collection, it's becoming harder and harder to keep track of
all the vinyls she owns!
\"I must tidy up and organise my collection, it takes me too long to find
anything in this mess!\" she thinks to herself.
",
    ),
    text_paragraph(
      "
She remembers reading about databases and SQL at university, and she knows that
a small database and a couple of carefully crafted queries will make it a
breeze to find useful info from her collection instead of going through all the
vinyls each and every time.
\"For the time being, this will be more than enough for my collection\", she
thinks defining the following table:
",
    ),
    exercise.showcase_query(create_vinyl_and_insert),
  ]
}

fn view_exercises(exercises: Exercises) -> List(Element(Msg)) {
  let Exercises(
    list_vinyls_alphabetically:,
    improve_duration_display:,
    find_shortest_30_minutes_vinyl:,
  ) = exercises

  [
    list_vinyls_alphabetically,
    improve_duration_display,
    find_shortest_30_minutes_vinyl,
  ]
  |> view_exercises_loop([])
}

fn view_exercises_loop(
  exercises: List(Exercise(LucyExercise)),
  acc: List(List(Element(Msg))),
) -> List(Element(Msg)) {
  case exercises {
    [] -> [[completed_view()], ..acc] |> list.reverse |> list.flatten
    [exercise, ..rest] ->
      case exercise.is_solved(exercise) {
        True -> view_exercises_loop(rest, [view_exercise(exercise), ..acc])
        False ->
          [[wait_before_advancing_view()], view_exercise(exercise), ..acc]
          |> list.reverse
          |> list.flatten
      }
  }
}

fn wait_before_advancing_view() -> Element(msg) {
  html.p([], [html.text("Help Lucy with this query before advancing...")])
}

fn completed_view() -> Element(msg) {
  html.p([], [html.text("🎉 Well done!")])
}

fn view_exercise(exercise: Exercise(LucyExercise)) -> List(Element(Msg)) {
  case exercise.kind {
    ListVinylsAlphabetically -> view_list_vinyls_alphabetically(exercise)
    ImproveDurationDisplay -> view_improve_duration_display(exercise)
    FindShortest30MinutesVinyl -> view_find_shortest_30_minutes_vinyl(exercise)
  }
}

fn view_list_vinyls_alphabetically(
  exercise: Exercise(LucyExercise),
) -> List(Element(Msg)) {
  [
    html.h2([], [html.text("Getting started")]),
    text_paragraph(
      "
For starters Lucy will need a list of all her vinyls, she just cares about the
title and duration of each one.
To make it easier to skim through the list, make sure to list the vinyls in
alphabetical order!
",
    ),
    exercise.editor_with_result(exercise, on_input: UserTypedQuery),
  ]
}

fn view_improve_duration_display(
  exercise: Exercise(LucyExercise),
) -> List(Element(Msg)) {
  [
    text_paragraph(
      "
\"Mmh it's quite hard making sense of this duration...\", while storing the
total runtime of a vinyl in seconds can be handy, a result meant to be read by
humans should show the total duration split in minutes and seconds! For example
\"Short 'n Sweet\" lasts for 2181 seconds, that is 36 minutes and 21 seconds,
the output Lucy is going for would look like this:
",
    ),
    exercise.showcase_result(["title", "minutes", "seconds"], [
      ["Short 'n Sweet", "36", "21"],
    ]),
    text_paragraph(
      "
Rewrite your previous query replacing the total `duration_column` with two
columns: `minutes` and `seconds`. Keep the resulting rows sorted in alphabetical
order!
",
    ),
    exercise.editor_with_result(exercise, on_input: UserTypedQuery),
  ]
}

fn view_find_shortest_30_minutes_vinyl(exercise: Exercise(LucyExercise)) {
  [
    text_paragraph(
      "
After adding all the vinyls to the database, Lucy wants to take a well-deserved
rest. What better way to do that than listen to some music?
\"I have a good half hour before I need to head out to Sarah's dinner party...
let me find something that's not too long.\"",
    ),
    text_paragraph(
      "
Help Lucy find the title of the shortest vinyl that lasts 30 minutes or more.",
    ),
    exercise.editor_with_result(exercise, on_input: UserTypedQuery),
  ]
}

// --- HTML UTILS --------------------------------------------------------------

fn text_paragraph(string: String) -> Element(b) {
  html.p([], [html.text(string)])
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

fn exec_queries(
  db: sql.Database,
  queries: String,
  then to_msg: fn(Result(Nil, Nil)) -> msg,
) -> Effect(msg) {
  use dispatch <- effect.from
  use result <- sql.exec(db, queries)
  dispatch(to_msg(result))
}

// --- LOCALSTORE EFFECTS ------------------------------------------------------

fn local_storage_set(key key: String, value value: String) -> Effect(msg) {
  use _dispatch <- effect.from
  do_local_storage_set(key, value)
}

@external(javascript, "../learn_sql.ffi.mjs", "do_local_storage_set")
fn do_local_storage_set(key: String, value: String) -> Nil

@external(javascript, "../learn_sql.ffi.mjs", "do_local_storage_get")
fn do_local_storage_get(key: String) -> Result(String, Nil)
