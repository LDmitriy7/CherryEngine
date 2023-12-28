import { Assets, Container, Sprite } from "pixi.js"
import * as PIXI from "pixi.js"
import { PixiEngine } from "../../../src/editor/entities/_engine"
import { App } from "./app"
import { expose } from "../lib"

export function createPixiApp() {
  const engine = new PixiEngine()
  engine.assets.add("square", "square.png")
  return engine
}

export class PixiApp extends App {
  setText(base: PIXI.Text, value: string) {
    base.text = value
  }
  setFontWeight(base: PIXI.Text, value: string) {
    base.style.fontWeight = value as PIXI.TextStyleFontWeight // TODO:
  }
  setX(base: PIXI.Container, value: number) {
    base.x = value
  }
  setY(base: PIXI.Container, value: number) {
    base.y = -value
  }
  setLabelColor(base: PIXI.Text, value: string): void {
    base.style.fill = value
  }
  addLabel() {
    return this.app.addLabel("text")
  }
  addAsset(id: string, src: string): void {
    this.app.assets.add(id, src)
  }

  app: ReturnType<typeof createPixiApp>

  setScale(base: Container, value: number): void {
    base.scale.set(value)
  }

  constructor() {
    super()
    this.app = createPixiApp()
    expose({ __PIXI_APP__: this.app.app })
  }

  addImage() {
    return this.app.addImage("square")
  }

  async start(load: () => void) {
    await this.app.assets.load()
    load()
  }

  setImageTint(base: Sprite, value: string) {
    base.tint = value
  }

  setTexture(base: Sprite, assetId: string) {
    const texture = Assets.get(assetId)
    base.texture = texture
  }
}
