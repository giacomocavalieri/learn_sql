import gleam/list
import tobble
import tobble/table_render_opts

pub type Returned {
  Returned(columns_names: List(String), rows: List(List(String)))
}

pub fn returned_to_table(returned: Returned) -> String {
  let Returned(columns_names:, rows:) = returned

  let assert Ok(table) =
    tobble.builder()
    |> tobble.add_row(columns_names)
    |> list.fold(over: rows, with: tobble.add_row)
    |> tobble.build

  table
  |> tobble.render_with_options([
    table_render_opts.horizontal_rules_only_after_header(),
    table_render_opts.line_type_box_drawing_characters(),
  ])
}

// --- DATABASE FFI ------------------------------------------------------------

pub type Database

@external(javascript, "../learn_sql.ffi.mjs", "connect")
pub fn connect() -> Database

@external(javascript, "../learn_sql.ffi.mjs", "run")
pub fn run(
  database: Database,
  query: String,
  on_result: fn(Result(Returned, String)) -> Nil,
) -> Nil

@external(javascript, "../learn_sql.ffi.mjs", "exec")
pub fn exec(
  database: Database,
  queries: String,
  on_result: fn(Result(Nil, Nil)) -> Nil,
) -> Nil
