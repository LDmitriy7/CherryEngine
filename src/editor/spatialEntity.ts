import { attr } from "./attr"
import { Entity } from "./entity"
import * as PIXI from "pixi.js"

export class SpatialEntity<
  T extends PIXI.DisplayObject = PIXI.DisplayObject
> extends Entity<T> {
  @attr
  get x() {
    return this.base.x
  }
  set x(value) {
    this.base.x = value
  }

  @attr
  get y() {
    return this.base.y
  }
  set y(value) {
    this.base.y = value
  }

  @attr
  get scale() {
    return this.base.scale.x
  }
  set scale(value: number) {
    this.base.scale.set(value)
  }
}
