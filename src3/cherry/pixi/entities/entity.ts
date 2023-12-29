import * as PIXI from "pixi.js"
import { Entity } from "../../entities"

export class PixiEntity<Base extends PIXI.Container = PIXI.Container>
  implements Entity
{
  private _scale = 1

  constructor(public base: Base) {}

  get name() {
    return this.base.name
  }

  set name(value: string | null) {
    this.base.name = value
  }

  set parent(value: PixiEntity) {
    value.base.addChild(this.base)
  }

  // TODO: off
  doScaleOnPointerEnter(multiplier = 1.05) {
    this.onPointerEnter(() => (this.scale *= multiplier))
    this.onPointerLeave(() => (this.scale /= multiplier))
  }

  set scale(value: number) {
    this._scale = value
    this.base.scale.set(value)
  }

  get scale() {
    return this._scale
  }

  set x(value: number) {
    this.base.x = value
  }

  set y(value: number) {
    this.base.y = -value
  }

  onPointerEnter(callback: () => any) {
    this.on("pointerenter", callback)
  }

  onPointerLeave(callback: () => any) {
    this.on("pointerleave", callback)
  }

  private on(event: "pointerenter" | "pointerleave", callback: () => any) {
    const { base } = this
    base.eventMode = "static"
    base.cursor = "pointer"
    base.on(event, callback)
  }
}
