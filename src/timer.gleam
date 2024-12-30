import lustre/effect.{type Effect}

pub type Timer

pub type Msg {
  TimerStarted(timer: Timer)
  TimerExpired
}

pub fn stop(timer: Timer) -> Effect(msg) {
  use _ <- effect.from
  do_stop_timer(timer)
}

pub fn start(ms timeout: Int) -> Effect(Msg) {
  use dispatch <- effect.from
  let timer =
    do_start_timer(after: timeout, do: fn() { dispatch(TimerExpired) })
  dispatch(TimerStarted(timer))
}

@external(javascript, "./learn_sql.ffi.mjs", "do_start_timer")
fn do_start_timer(after milliseconds: Int, do fun: fn() -> a) -> Timer

@external(javascript, "./learn_sql.ffi.mjs", "do_stop_timer")
fn do_stop_timer(timer: Timer) -> Nil
