import { createApp, RoundedRect } from "../pixi-tools"

const app = createApp()

const rect = new RoundedRect()
rect.color = "green"
rect.width = 200
rect.height = 50
rect.radius = 50

app.stage.addChild(rect)
