import { App } from "../apps/app"
import * as PIXI from "pixi.js"

export type EntityClass<T> = new (app: App) => T

export class Entity {
  constructor(protected base: EntityBase, protected app: App) {}

  set x(value: number) {
    this.app.setX(this.base, value)
  }

  set y(value: number) {
    this.app.setY(this.base, value)
  }
}

abstract class EntityBase<Base = unknown> {
  constructor(protected base: Base) {}

  abstract set x(value: number)
  abstract set y(value: number)
}

class PixiEntityBase extends EntityBase<PIXI.Container> {
  set x(value: number) {
    this.base.x = value
  }

  set y(value: number) {
    this.base.x = value
  }
}
