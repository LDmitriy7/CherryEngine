import { APP } from "./app"
import { Entity } from "./entity"
import { Class } from "./lib"

export class Game {
  addAsset(id: string, src: string) {
    APP.addAsset(id, src)
  }
  add<T extends Entity>(entityType: Class<T>) {
    return new entityType()
  }
  start(load: () => void) {
    APP.start(load)
  }
}
