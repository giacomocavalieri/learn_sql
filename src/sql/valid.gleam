import gleam/int
import gleam/list
import gleam/order.{Eq, Gt, Lt}
import gleam/set
import rank

// --- VALIDATION --------------------------------------------------------------
// Validation can be carried out by hand but this module also has some functions
// to cover some basic validation needs (like checking the columns' names and
// the order of the rows).

pub type Validation {
  Wrong(suggestion: String)
  AllGood
}

pub fn check_columns_quantity(
  expected: List(String),
  got: List(String),
  or_else: fn() -> Validation,
) -> Validation {
  let expected_size = list.length(expected)
  let got_size = list.length(got)
  case int.compare(expected_size, got_size) {
    Eq -> or_else()
    Lt | Gt -> {
      let expected_size_string = int.to_string(expected_size)
      let columns_list =
        list.map(expected, fn(c) { "`" <> c <> "`" })
        |> join_and(", ", " and ")

      Wrong(
        { "This query should return " <> expected_size_string <> " " }
        <> pluralise(expected_size, "column", "columns")
        <> { " named " <> columns_list <> "." },
      )
    }
  }
}

fn pluralise(quantity: Int, singular: String, plural: String) -> String {
  case quantity {
    1 -> singular
    _ -> plural
  }
}

fn join_and(items: List(String), sep: String, final_sep: String) -> String {
  case items {
    [] -> ""
    [item] -> item
    [first, ..rest] -> join_and_loop(rest, sep, final_sep, first)
  }
}

fn join_and_loop(
  items: List(String),
  sep: String,
  final_sep: String,
  acc: String,
) -> String {
  case items {
    [] -> acc
    [item] -> acc <> final_sep <> item
    [first, ..rest] -> join_and_loop(rest, sep, final_sep, acc <> sep <> first)
  }
}

pub fn check_columns_names(
  expected: List(String),
  got: List(String),
  or_else: fn() -> Validation,
) -> Validation {
  check_columns_names_loop(expected, got, 1, or_else)
}

fn check_columns_names_loop(
  expected: List(String),
  got: List(String),
  index: Int,
  or_else: fn() -> Validation,
) -> Validation {
  case expected, got {
    [_, ..], [] | [], [_, ..] | [], [] -> or_else()
    [expected_first, ..expected], [got_first, ..got] ->
      case expected_first == got_first {
        True -> check_columns_names_loop(expected, got, index + 1, or_else)
        False ->
          Wrong(
            { "I was expecting the " <> rank.ordinalise(index) <> " column" }
            <> { " to be named `" <> expected_first <> "`, but it's called" }
            <> { " `" <> got_first <> "` instead." },
          )
      }
  }
}

pub fn check_wrong_rows_order(
  expected: List(List(String)),
  got: List(List(String)),
  or_else: fn() -> Validation,
) -> Validation {
  case expected != got && set.from_list(expected) == set.from_list(got) {
    False -> or_else()
    True ->
      Wrong(
        "You're almost there! The rows are correct but it looks like they're in
the wrong order, remember to add the correct `order by` clause.",
      )
  }
}

pub fn check_rows_equal(
  expected: List(List(String)),
  got: List(List(String)),
  or_else: fn() -> Validation,
) -> Validation {
  case expected == got {
    False -> Wrong("This doesn't look like the correct result...")
    True -> or_else()
  }
}
