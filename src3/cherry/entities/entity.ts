import * as PIXI from "pixi.js"

export interface Entity {
  set x(value: number)
  set y(value: number)
  set parent(value: Entity)
}

export class PixiEntity<Base extends PIXI.Container = PIXI.Container>
  implements Entity
{
  constructor(public base: Base) {}

  set name(value: string) {
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
