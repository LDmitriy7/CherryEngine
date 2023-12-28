import { App } from "../apps/app"

export type EntityClass<T> = new (app: App) => T

export class Entity<Base = any> {
  constructor(protected base: Base, protected app: App) {}

  set x(value: number) {
    this.app.setX(this.base, value)
  }

  set y(value: number) {
    this.app.setY(this.base, value)
  }
}
