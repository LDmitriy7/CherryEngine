import * as PIXI from "pixi.js"
import { assets } from "./assets"

class Scene {
  addImage(assetId: string) {
    const texture = PIXI.Assets.get(assetId)
    const sprite = PIXI.Sprite.from(texture)
    sprite.anchor.set(0.5)
    root.addChild(sprite)
    return sprite
  }

  async play(callback: () => void) {
    await assets.load()
    callback()
  }
}

const app = new PIXI.Application({
  resizeTo: window,
  antialias: true,
  resolution: window.devicePixelRatio,
})
const root = new PIXI.Container()

function updateRoot() {
  app.resize()
  root.x = app.screen.width / 2
  root.y = app.screen.height / 2
  root.scale.set(app.screen.height / 720)
}

updateRoot()
window.addEventListener("resize", updateRoot)

app.stage.addChild(root)

document.body.appendChild(app.view as unknown as Node)

export const scene = new Scene()
