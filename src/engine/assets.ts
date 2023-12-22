import * as PIXI from "pixi.js"

const ASSET_IDS: string[] = []

class Assets {
  add(id: string, src: string) {
    PIXI.Assets.add({ alias: id, src: src })
    ASSET_IDS.push(id)
  }

  load() {
    return PIXI.Assets.load(ASSET_IDS)
  }
}

export const assets = new Assets()
