import { App } from "./apps/app"
import { Entity, EntityClass } from "./entities/entity"

export class Game {
  constructor(private app: App) {}
  addAsset(id: string, src: string) {
    this.app.addAsset(id, src)
  }
  add<T extends Entity>(entityType: EntityClass<T>) {
    return new entityType(this.app)
  }
  play(init: () => void) {
    this.app.start(init)
  }
}
