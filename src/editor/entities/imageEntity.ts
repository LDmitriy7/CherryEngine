import { scene } from "../../engine"
import { AssetIds } from "../assets"
import { attr } from "../attr"
import { SpatialEntity } from "./spatialEntity"
import * as PIXI from "pixi.js"

export class ImageEntity extends SpatialEntity<PIXI.Sprite> {
  type = "image"
  private _texture: string = AssetIds.square

  constructor() {
    super(scene.addImage(AssetIds.square))
    this.tint = "white"
  }

  @attr
  set texture(assetId: string | number) {
    assetId = assetId.toString()
    this._texture = assetId
    const texture = PIXI.Assets.get(assetId)
    this.base.texture = texture
  }
  get texture() {
    return this._texture
  }

  @attr
  set tint(value: string) {
    this.base.tint = value
  }
  get tint() {
    return this.base.tint.toString()
  }
}
