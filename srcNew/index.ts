import { createApp, RectTransform, RoundedRect } from "../pixi-tools"

const app = createApp()

const rect = new RoundedRect()
app.stage.addChild(rect)
app.ticker.add(() => RectTransform.update())

rect.color = "green"
rect.radius = 40
rect.width = 200
rect.height = 300
const rect2 = new RoundedRect()
rect.addChild(rect2)

function test() {
  const tform = rect2.rectTransform
  tform.preset = "top-right"
  rect.width = 500
}

test()
