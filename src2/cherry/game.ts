import { App } from "./apps/app"
import { Entity, EntityClass } from "./entities/entity"

class Assets<AssetId extends string> {
  constructor(private app: App) {}

  add(id: AssetId, src: string) {
    this.app.addAsset(id, src)
  }
}

export class Game<AssetId extends string> {
  assets: Assets<AssetId>

  constructor(private app: App) {
    this.assets = new Assets(app)
  }

  add<T extends Entity>(entityType: EntityClass<T>) {
    return new entityType(this.app)
  }
  play(init: () => void) {
    this.app.start(init)
  }
}
