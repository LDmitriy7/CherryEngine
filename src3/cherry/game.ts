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

export class PixiGame<AssetId extends string> implements Game<AssetId> {
  app: PixiApp
  assets: PixiAssets<AssetId>

  constructor() {
    this.assets = new PixiAssets<AssetId>()
    this.app = new PixiApp()
  }

  private add(entity: PixiEntity) {
    this.app.root.addChild(entity.base)
  }

  addImage() {
    const entity = new PixiImage<AssetId>()
    this.add(entity)
    return entity
  }

  addLabel() {
    const entity = new PixiLabel()
    this.add(entity)
    return entity
  }
  addTextBlock = this.addLabel

  addRoundedRect() {
    const entity = new PixiRoundedRect()
    this.add(entity)
    return entity
  }

  addCircle() {
    const entity = new PixiCircle()
    this.add(entity)
    return entity
  }

  addContainer() {
    const entity = new PixiContainer()
    this.add(entity)
    return entity
  }

  async play(init: () => void) {
    await this.assets.load()
    init()
  }
}
