import { App } from "../apps/app"

export type EntityClass<T> = new (app: App) => T

export class Entity<Base = any> {
  constructor(protected base: Base, protected app: App) {}
}
