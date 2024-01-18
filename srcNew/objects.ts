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
  // const bg = new BackgroundSprite("bg.jpg", 2500, 1677)
  // const bg = new BackgroundSprite("bg.png", 768, 512)
  const bg = new BackgroundSprite("bg2.png", 1260, 844)
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
