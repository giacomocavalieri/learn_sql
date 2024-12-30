import lustre/attribute
import lustre/element.{type Element}
import lustre/event

pub type Msg {
  TypedCode(code: String)
}

pub fn read_only(code: String) -> Element(msg) {
  element.element(
    "code-mirror",
    [
      attribute.attribute("editable", "false"),
      attribute.value(code),
      attribute.class("query-editor"),
    ],
    [],
  )
}

pub fn view(code: String) -> Element(Msg) {
  element.element(
    "code-mirror",
    [
      event.on_input(TypedCode),
      attribute.attribute("editable", "true"),
      attribute.value(code),
      attribute.autofocus(True),
      attribute.class("query-editor"),
    ],
    [],
  )
}
