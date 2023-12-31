import * as PIXI from "pixi.js"
import { ENGINE } from "../editor/entities/_engine"

export const root = ENGINE.root

class Scene {
  addImage(assetId: string | number, scale = 1) {
    assetId = assetId.toString()
    const texture = PIXI.Assets.get(assetId)
    const sprite = PIXI.Sprite.from(texture)
    sprite.anchor.set(0.5)
    sprite.scale.set(scale)
    root.addChild(sprite)
    return sprite
  }

  addLabel(text: string, color = "black") {
    const label = new PIXI.Text(text, { fill: color })
    label.anchor.set(0.5)
    root.addChild(label)
    return label
  }

  async play(callback: () => void) {
    await ENGINE.assets.load()
    callback()
  }
}

export const scene = new Scene()
