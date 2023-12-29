import { DefaultAssetIds } from "../../assets"
import { Image } from "../../entities"
import { PixiEntity } from "./entity"
import * as PIXI from "pixi.js"

export function getTexture(id: string) {
  return PIXI.Assets.get(id) as PIXI.Texture
}

export class PixiImage<AssetId extends string>
  extends PixiEntity<PIXI.Sprite>
  implements Image<AssetId>
{
  constructor() {
    const texture = getTexture(DefaultAssetIds.square)
    const base = new PIXI.Sprite(texture)
    super(base)
    this.name = "image"
    this.base.anchor.set(0.5)
  }

  set tint(value: string) {
    this.base.tint = value
  }

  set scale(value: number) {
    this.base.scale.set(value)
  }

  set texture(value: AssetId) {
    this.base.texture = getTexture(value)
  }
}
