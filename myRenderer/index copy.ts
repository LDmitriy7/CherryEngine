import { App } from "./app"
import { createDefaultCanvasAndContext } from "./canvas"
import { Circle, Square } from "./entities"
import { loop } from "./loop"

const { ctx, canvas } = createDefaultCanvasAndContext()

const e = new Circle()
// const e2 = new Square()
// e2.parent = e
// e.y = -100
// // e.size = 10
// e.scale = 1
// e2.x = 300

const app = new App(ctx, canvas)
app.start(e)

// setInterval(() => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   e.render(ctx)
// }, 10)
