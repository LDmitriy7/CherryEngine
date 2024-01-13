import { createApp } from "../pixi-tools"
import * as PIXI from "pixi.js"

const app = createApp()

const graphics = new PIXI.Graphics()
setFigure(graphics, drawRoundedRect)
app.stage.addChild(graphics)

function drawRoundedRect(
  graphics: PIXI.Graphics,
  width = 100,
  height = 100,
  radius = 10
) {
  graphics.drawRoundedRect(-width / 2, -height / 2, width, height, radius)
}

function setFigure(
  graphics: PIXI.Graphics,
  draw: (graphics: PIXI.Graphics) => void,
  color = "white"
) {
  graphics.clear()
  graphics.beginFill(color)
  draw(graphics)
  graphics.endFill()
}
