import { attr } from "./attr"
import * as PIXI from "pixi.js"
import { uid } from "./lib"

export class Entity<T extends PIXI.DisplayObject = PIXI.DisplayObject> {
  id: string
  type = "entity"
  name?: string

  constructor(public base: T) {
    this.id = uid()
  }

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
