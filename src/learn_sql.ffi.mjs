import { PGlite } from "https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js";
import { toList, Ok, Error } from "./gleam.mjs";
import * as $sql from "./sql/sql.mjs";

export function connect() {
  return new PGlite("idb://my-pgdata");
}

export async function run(db, query, k) {
  try {
    let { rows, fields } = await db.query(query, [], { rowMode: "array" });
    let string_headers = toList(fields.map((field) => field.name));
    let string_rows = toList(
      rows.map((row) => toList(row.map((col) => col.toString()))),
    );
    k(new Ok(new $sql.Returned(string_headers, string_rows)));
  } catch (error) {
    k(new Error(error.toString()));
  }
  return undefined;
}

export async function exec(db, queries, k) {
  try {
    await db.exec(queries, { rowMode: "array" });
    k(new Ok(undefined));
  } catch (error) {
    k(new Error(undefined));
  }
  return undefined;
}

export function do_start_timer(milliseconds, k) {
  let timer = setTimeout(() => k(), milliseconds);
  return timer;
}

export function do_stop_timer(timer) {
  clearTimeout(timer);
  return undefined;
}

export function do_local_storage_set(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (exception) {}
  return undefined;
}

export function do_local_storage_get(key) {
  let item = localStorage.getItem(key);
  if (item === null) {
    return new Error(undefined);
  } else {
    return new Ok(item);
  }
}
