import { Context } from "./lib"

export type { Context }

export function createApp() {
  const canvas = createCanvas()
  const ctx = getCanvasContext(canvas)
  return { canvas, ctx }
}

export function createCanvas() {
  const canvas = document.createElement("canvas")
  document.body.appendChild(canvas)
  return canvas
}

export function getCanvasContext(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Canvas context not available")
  return ctx
}

export function run(update: () => void) {
  requestAnimationFrame(() => run(update))
  update()
}
