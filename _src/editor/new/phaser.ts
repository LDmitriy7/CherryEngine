import { Entity, PixiEntity } from "../entities"
import { Class } from "../lib"

type PhaserGameObject = { a: number }

export class PhaserEntity<
  T extends PhaserGameObject = PhaserGameObject
> extends Entity<T> {
  addChild(child: PixiEntity) {
    throw new Error("Not implemented")
  }

  createChild<T extends PhaserEntity>(type: Class<T>): T {
    return super.createChild(type)
  }
}
