import * as PIXI from "pixi.js"
import { expose } from "../lib"

export class PixiApp {
  root: PIXI.Container
  base: PIXI.Application

  constructor() {
    const app = new PIXI.Application({
      resizeTo: window,
      antialias: true,
      resolution: window.devicePixelRatio,
    })
    expose({ __PIXI_APP__: app, PIXI })
    this.base = app
    this.root = app.stage
    this.root.name = "root"
    const canvas = app.view as HTMLCanvasElement
    document.body.appendChild(canvas)
    this.doUpdateRoot()
  }

  private doUpdateRoot() {
    this.updateRoot()
    window.addEventListener("resize", this.updateRoot)
  }

  private updateRoot = () => {
    const { screen } = this.base
    const { root } = this
    this.base.resize()
    root.x = screen.width / 2
    root.y = screen.height / 2
    root.scale.set(screen.height / 720)
  }

  onResize(callback: () => void) {
    this.base.renderer.on("resize", callback)
  }
}
