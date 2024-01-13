import * as PIXI from "pixi.js"
import { Point } from "./lib"

export interface IRectTransformable {
  rectTransform: RectTransform
}

export class RectTransform {
  static instances: RectTransform[] = []

  // TODO: order?
  static update() {
    this.instances.forEach((i) => i.update())
  }

  private _anchorX = 0.5
  private _anchorY = 0.5

  constructor(private container: PIXI.Container) {
    RectTransform.instances.push(this)
  }

  get anchorX() {
    return this._anchorX
  }
  set anchorX(value) {
    this._anchorX = value
    this.update()
  }

  get anchorY() {
    return this._anchorY
  }
  set anchorY(value) {
    this._anchorY = value
    this.update()
  }

  update() {
    setRectTransform(this.container, this.anchorX, this.anchorY)
  }

  setPreset(preset: RectTransformPreset) {
    const anchor = getRectTransformAnchor(preset)
    this.anchorX = anchor.x
    this.anchorY = anchor.y
  }

  get preset(): undefined {
    return undefined
  }
  set preset(value: RectTransformPreset) {
    this.setPreset(value)
  }
}

function setRectTransform(
  container: PIXI.Container,
  anchorX = 0.5,
  anchorY = 0.5
) {
  const parent = container.parent
  container.x = parent.width * (anchorX - 0.5)
  container.y = parent.height * (anchorY - 0.5)
}

type RectTransformPreset =
  | "center"
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"

// TODO: pivot

const RECT_TRANSFORM_PRESET_ANCHOR: Record<RectTransformPreset, Point> = {
  center: { x: 0.5, y: 0.5 },
  left: { x: 0, y: 0.5 },
  right: { x: 1, y: 0.5 },
  top: { x: 0.5, y: 0 },
  bottom: { x: 0.5, y: 1 },
  "top-left": { x: 0, y: 0 },
  "top-right": { x: 1, y: 0 },
  "bottom-left": { x: 0, y: 1 },
  "bottom-right": { x: 1, y: 1 },
}

export function getRectTransformAnchor(preset: RectTransformPreset) {
  return RECT_TRANSFORM_PRESET_ANCHOR[preset]
}

export function setRectTransformPreset(
  container: PIXI.Container,
  preset: RectTransformPreset
) {
  const anchor = getRectTransformAnchor(preset)
  setRectTransform(container, anchor.x, anchor.y)
}
