import { BackgroundSprite, RoundedRect } from "../pixi-tools"

export function createPhone() {
  const phone = new RoundedRect()
  phone.color = "black"
  phone.radius = 30
  phone.width = 400
  phone.height = 700
  return phone
}

export function createBg() {
  const bg = new BackgroundSprite("bg.jpg", 2500, 1677)
  return bg
}
