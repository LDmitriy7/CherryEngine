import { Position } from "./lib"

class _Input {
  private pressedKeys: Partial<Record<Key, boolean>> = {}

  constructor() {
    this.listenKey("left")
    this.listenKey("right")
  }

  private listenKey(key: Key) {
    onKeyDown(() => (this.pressedKeys[key] = true), key)
    onKeyUp(() => (this.pressedKeys[key] = false), key)
  }

  isPressed(key: Key): boolean {
    return this.pressedKeys[key] ?? false
  }
}

export class Input extends _Input {
  constructor(private canvas: HTMLCanvasElement) {
    super()
  }

  onMouseMove(handler: (pos: Position) => void) {
    onMouseMove((e) => {
      const pos = getMousePosition(e, this.canvas)
      handler(pos)
    })
  }
}

function isEventKeyRight(e: KeyboardEvent) {
  return e.key == "Right" || e.key == "ArrowRight"
}

function isEventKeyLeft(e: KeyboardEvent) {
  return e.key == "Left" || e.key == "ArrowLeft"
}

function isEventKey(e: KeyboardEvent, key?: Key) {
  if (!key) return true
  if (key == "left") return isEventKeyLeft(e)
  if (key == "right") return isEventKeyRight(e)
  return false
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

export function getMousePosition(
  e: MouseEvent,
  canvas: HTMLCanvasElement
): Position {
  return {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop,
  }
}
