import * as PIXI from "pixi.js"
import { DefaultAssetIds } from "./entities/image"

export interface Assets<AssetId extends string> {
  add(id: AssetId, src: string): void
  load(): Promise<any>
}

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
