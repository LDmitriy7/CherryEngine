import { createDefaultCanvasAndContext } from "./canvas"
import { Square } from "./entities"

const { ctx } = createDefaultCanvasAndContext()

const e = new Square()
const e2 = new Square()
e2.parent = e
e.x = 70
e.y = 100
e2.x = 300

setInterval(() => e.render(ctx), 1000 / 60)
