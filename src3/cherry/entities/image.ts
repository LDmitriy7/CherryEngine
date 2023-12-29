import { Entity, PixiEntity } from "./entity"
import * as PIXI from "pixi.js"

export interface Image<AssetId extends string> extends Entity {
  set tint(value: string)
  set scale(value: number)
  set texture(value: AssetId)
}

export enum DefaultAssetIds {
  square = "_square",
}

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
