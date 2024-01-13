import { createApp, RectTransform } from "../pixi-tools"
import { createBg, createLabel, createPhone } from "./objects"

const app = createApp()
app.ticker.add(() => RectTransform.update())

const bg = createBg()
const phone = createPhone()
const label = createLabel()

phone.addChild(label)
app.stage.addChild(bg, phone)

app.ticker.add(() => (bg.tilePosition.x += 0.5))
