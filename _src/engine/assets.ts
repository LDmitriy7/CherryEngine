import * as PIXI from "pixi.js"

const ASSET_IDS: string[] = []

export abstract class Assets {
  abstract add(id: string | number, src: string): void
  abstract load(): void
}

export class PixiAssets extends Assets {
  add(id: string | number, src: string) {
    id = id.toString()
    PIXI.Assets.add({ alias: id, src: src })
    ASSET_IDS.push(id)
  }

  load() {
    return PIXI.Assets.load(ASSET_IDS)
  }
}

export class PhaserAssets extends Assets {
  add(id: string | number, src: string): void {
    throw new Error("Method not implemented.")
  }
  load(): void {
    throw new Error("Method not implemented.")
  }
}
