import * as PIXI from "pixi.js"

class App extends PIXI.Application {
  render() {
    console.log("render")
    super.render()
  }
}

const app = new App()
const canvas = app.view as HTMLCanvasElement
document.body.appendChild(canvas)
const sprite = PIXI.Sprite.from("bg.jpg")
sprite.anchor.set(0.5)
sprite.scale.set(0.2)

app.stage.addChild(sprite)
app.stage.x = app.screen.width / 2
app.stage.y = app.screen.height / 2

function getCanvasCtx() {
  const ctx = canvas.getContext("webgl2")
  if (!ctx) throw new Error("WebGL 2 is not supported")
  return ctx
}

const canvasCtx = getCanvasCtx()
canvasCtx
console.log(canvasCtx)
