import { createApp } from "./renderer"
import { CanvasContext } from "./renderer/canvasContext"

export const brickRowCount = 5
export const brickColumnCount = 3
export const brickPadding = 10
export const brickOffsetTop = 30
export const brickOffsetLeft = 30

export const stats = {
  score: 0,
  lives: 3,
}

const { canvas, ctx } = createApp()
export const CTX = new CanvasContext(ctx)
canvas.height = 320
canvas.width = 480

export { canvas, ctx }
