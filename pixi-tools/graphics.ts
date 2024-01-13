import * as PIXI from "pixi.js"
import { IRectTransformable, RectTransform } from "./rectTransform"

export function drawRoundedRect(
  graphics: PIXI.Graphics,
  width = 100,
  height = 100,
  radius = 10
) {
  graphics.drawRoundedRect(-width / 2, -height / 2, width, height, radius)
}

export function setFigure(
  graphics: PIXI.Graphics,
  draw: (graphics: PIXI.Graphics) => void,
  color = "white"
) {
  graphics.clear()
  graphics.beginFill(color)
  draw(graphics)
  graphics.endFill()
}

export class Graphics extends PIXI.Graphics implements IRectTransformable {
  rectTransform: RectTransform

  constructor() {
    super()
    this.rectTransform = new RectTransform(this)
  }
}
