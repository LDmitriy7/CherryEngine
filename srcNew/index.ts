import { createApp, RectTransform, RoundedRect, Sprite } from "../pixi-tools"

const app = createApp()
const rect = new RoundedRect()

const bg = new Sprite("bg.jpg")
app.stage.addChild(bg)
bg.scale.set(0.7)

app.stage.addChild(rect)
app.ticker.add(() => RectTransform.update())

rect.color = "green"
rect.radius = 40
rect.width = 200
rect.height = 300
const rect2 = new RoundedRect()
rect.addChild(rect2)

function test() {
  rect2.rectTransform.preset = "top-right"
  rect.width = 500
  rect2.rectTransform.x = -70
  rect2.rectTransform.y = 70
}

test()
