import * as PIXI from "pixi.js"
import { Entity } from "../../entities"

export class PixiEntity<Base extends PIXI.Container = PIXI.Container>
  implements Entity
{
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

  set x(value: number) {
    this.base.x = value
  }

  set y(value: number) {
    this.base.y = -value
  }
}
