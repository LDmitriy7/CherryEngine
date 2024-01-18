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

function isEventKeyRight(e: KeyboardEvent) {
  return e.key == "Right" || e.key == "ArrowRight"
}

function isEventKeyLeft(e: KeyboardEvent) {
  return e.key == "Left" || e.key == "ArrowLeft"
}

function isEventKey(e: KeyboardEvent, key?: "left" | "right") {
  if (key == "left") return isEventKeyLeft(e)
  if (key == "right") return isEventKeyRight(e)
  return true
}

type KeyCallback = (e: KeyboardEvent) => void
type Key = "left" | "right"

function createKeyCallback(handler: KeyCallback, key?: Key) {
  return (e: KeyboardEvent) => {
    if (isEventKey(e, key)) handler(e)
  }
}

export function onKeyDown(handler: KeyCallback, key?: Key) {
  _onKeyDown(createKeyCallback(handler, key))
}

export function onKeyUp(handler: KeyCallback, key?: Key) {
  _onKeyUp(createKeyCallback(handler, key))
}

function _onKeyDown(handler: (e: KeyboardEvent) => void) {
  document.addEventListener("keydown", handler, false)
}

function _onKeyUp(handler: (e: KeyboardEvent) => void) {
  document.addEventListener("keyup", handler, false)
}

export function onMouseMove(handler: (e: MouseEvent) => void) {
  document.addEventListener("mousemove", handler, false)
}

export function getMousePosition(e: MouseEvent, canvas: HTMLCanvasElement) {
  return {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop,
  }
}

export function run(update: () => void) {
  requestAnimationFrame(() => run(update))
  update()
}
