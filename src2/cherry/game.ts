import { App } from "./apps/app"
import { Entity, EntityClass } from "./entity"

export class Game {
  constructor(private app: App) {}
  addAsset(id: string, src: string) {
    this.app.addAsset(id, src)
  }
  add<T extends Entity>(entityType: EntityClass<T>) {
    return new entityType(this.app)
  }
  start(load: () => void) {
    this.app.start(load)
  }
}
