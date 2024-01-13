import * as PIXI from "pixi.js"
import { createApp } from "../../../pixi-tools"

export class PixiApp {
  root: PIXI.Container
  base: PIXI.Application

  constructor() {
    const app = createApp()
    this.base = app
    this.root = app.stage
  }

  onResize(callback: () => void) {
    this.base.renderer.on("resize", callback)
  }
}
