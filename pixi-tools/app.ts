import * as PIXI from "pixi.js"
import { DESIGN_HEIGHT, expose } from "./lib"
import { mat3 } from "gl-matrix"

export function elapse(callback: () => void, times = 1) {
  const elapsed = getElapsedTime(callback, times)
  console.log("Elapsed: " + elapsed)
}

class Elapser {
  private totalTime = 0
  private count = 0

  constructor(private batchSize: number) {}

  elapse(callback: () => void) {
    this.totalTime += getElapsedTime(callback)
    this.count += 1
    if (this.count >= this.batchSize) {
      console.log("Elapsed: " + this.totalTime / this.count)
      this.totalTime = 0
      this.count = 0
    }
  }
}

function getElapsedTime(callback: () => void, times = 1) {
  const time = performance.now()
  while (times > 0) {
    callback()
    times--
  }
  return performance.now() - time
}

const elapser = new Elapser(100)

class Application extends PIXI.Application {
  render() {
    elapser.elapse(() => super.render())
  }
}

export function createApp() {
  const app = new Application({
    resizeTo: window,
    antialias: true,
    resolution: window.devicePixelRatio,
    powerPreference: "high-performance",
    // autoStart: false,
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
