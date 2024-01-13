import { createApp, Label, RectTransform, RoundedRect } from "../pixi-tools"
import { createBg, createPhone } from "./objects"

const app = createApp()
app.ticker.add(() => RectTransform.update())

const bg = createBg()
const phone = createPhone()

const rect2 = new RoundedRect()
phone.addChild(rect2)

function test() {
  rect2.rectTransform.preset = "top-right"
  rect2.rectTransform.x = -70
  rect2.rectTransform.y = 170
}

test()

const label = new Label("МОИ КОНТАКТЫ")
label.style.fill = "white"
label.style.fontWeight = "bolder"
label.rectTransform.preset = "top"
label.rectTransform.y = 25
phone.addChild(label)

app.stage.addChild(bg, phone)

app.ticker.add(() => (bg.tilePosition.x += 0.5))
