import * as PIXI from "pixi.js"
import { DESIGN_HEIGHT, expose } from "./lib"

export function createApp() {
  const app = new PIXI.Application({
    resizeTo: window,
    antialias: true,
    resolution: window.devicePixelRatio,
    powerPreference: "high-performance",
  })
  expose({ __PIXI_APP__: app, PIXI })
  const canvas = app.view as HTMLCanvasElement
  document.body.appendChild(canvas)
  app.stage.name = "root"
  doUpdateRoot(app)
  return app
}

function updateRoot(app: PIXI.Application) {
  const { screen, stage } = app
  app.resize()
  stage.x = screen.width / 2
  stage.y = screen.height / 2
  stage.scale.set(screen.height / DESIGN_HEIGHT)
}

function doUpdateRoot(app: PIXI.Application) {
  updateRoot(app)
  window.addEventListener("resize", () => updateRoot(app))
}
