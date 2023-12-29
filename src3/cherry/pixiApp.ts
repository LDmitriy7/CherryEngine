import * as PIXI from "pixi.js"
import { expose } from "./lib"

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
    const root = new PIXI.Container()
    root.name = "root"
    this.base = app
    this.root = root
    this.updateRoot()
    window.addEventListener("resize", this.updateRoot)
    app.stage.addChild(root)
    document.body.appendChild(app.view as unknown as Node)
  }

  private updateRoot = () => {
    const app = this.base
    const root = this.root
    app.resize()
    root.x = app.screen.width / 2
    root.y = app.screen.height / 2
    root.scale.set(app.screen.height / 720)
  }
}
