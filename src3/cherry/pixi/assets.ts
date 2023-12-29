import * as PIXI from "pixi.js"
import { Assets, DefaultAssetIds } from "../assets"

const ASSET_IDS: string[] = []

export class PixiAssets<AssetId extends string> implements Assets<AssetId> {
  constructor() {
    this.add(DefaultAssetIds.square, "square.png")
  }

  add(id: AssetId | DefaultAssetIds, src: string) {
    PIXI.Assets.add({ alias: id, src: src })
    ASSET_IDS.push(id)
  }

  load() {
    return PIXI.Assets.load(ASSET_IDS)
  }
}
