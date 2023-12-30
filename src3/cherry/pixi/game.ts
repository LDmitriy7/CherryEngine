import { PixiApp } from "./app"
import { Game } from "../game"
import { PixiAssets } from "./assets"
import {
  PixiCircle,
  PixiCircleWithBorder,
  PixiContainer,
  PixiEntity,
  PixiImage,
  PixiLabel,
  PixiRoundedRect,
} from "./entities"

export class _PixiGame<AssetId extends string> {
  app: PixiApp
  assets: PixiAssets<AssetId>

  constructor() {
    this.assets = new PixiAssets<AssetId>()
    this.app = new PixiApp()
  }

  protected addToScene(entity: PixiEntity) {
    this.app.root.addChild(entity.base)
  }

  protected addEntity<T extends PixiEntity>(entity: T) {
    if (!entity.name) entity.name = entity.constructor.name
    this.addToScene(entity)
    return entity
  }

  protected add<T extends PixiEntity>(entityType: new () => T) {
    const entity = new entityType()
    return this.addEntity(entity)
  }
}

export class PixiGame<AssetId extends string>
  extends _PixiGame<AssetId>
  implements Game<AssetId>
{
  addCircleWithBorder() {
    return this.add(PixiCircleWithBorder)
  }

  addImage() {
    const entity = new PixiImage<AssetId>()
    return this.addEntity(entity)
  }

  addLabel() {
    return this.add(PixiLabel)
  }
  addTextBlock = this.addLabel

  addRoundedRect() {
    return this.add(PixiRoundedRect)
  }

  addCircle() {
    return this.add(PixiCircle)
  }

  addContainer() {
    return this.add(PixiContainer)
  }

  async play(init: () => void) {
    await this.assets.load()
    init()
  }
}

export function createPixiGame<AssetId extends string>() {
  const game = new PixiGame<AssetId>()
  return game as Game<AssetId>
}
