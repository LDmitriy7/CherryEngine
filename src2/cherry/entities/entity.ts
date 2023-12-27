import { App } from "../apps/app"

export type EntityClass<T> = new (app: App) => T

export class Entity<T = any> {
  constructor(protected base: T, protected app: App) {}
}
