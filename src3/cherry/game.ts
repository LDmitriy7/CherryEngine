import { Assets, PixiAssets } from "./assets"
import {
  Image,
  Label,
  PixiCircle,
  PixiContainer,
  PixiLabel,
  PixiRoundedRect,
} from "./entities"
import { PixiEntity } from "./entities/entity"
import { PixiImage } from "./entities/image"
import { PixiApp } from "./pixiApp"

interface Game<AssetId extends string> {
  assets: Assets<AssetId>
  addImage(): Image<AssetId>
  addLabel(): Label
  play(init: () => void): Promise<void>
}

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
