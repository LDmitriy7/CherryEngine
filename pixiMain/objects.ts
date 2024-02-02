import { BackgroundSprite, Label, RoundedRect } from "../pixi-tools"

export function createPhone() {
  const phone = new RoundedRect()
  phone.color = "black"
  phone.radius = 30
  phone.width = 400
  phone.height = 700
  return phone
}

export function createBg() {
  // const bg = new BackgroundSprite("bg.jpg", 1250, 834)
  const bg = new BackgroundSprite("bg-test.jpg", 1250, 834)
  return bg
}

export function createLabel() {
  const label = new Label("МОИ КОНТАКТЫ")
  label.style.fill = "white"
  label.style.fontWeight = "bolder"
  label.rectTransform.preset = "top"
  label.rectTransform.y = 25
  return label
}
