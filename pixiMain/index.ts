import { createApp, RectTransform } from "../pixi-tools"
import { createBg, createLabel, createPhone } from "./objects"

const app = createApp()
// app.ticker.add(() => RectTransform.update())

const bg = createBg()
const phone = createPhone()
const label = createLabel()
phone.scale.set(0.7)

phone.addChild(label)

app.stage.addChild(bg, phone)

app.ticker.add((dt) => {
  bg.tilePosition.x += dt * 0.5
})

// const fpsLabel = createLabel()
// fpsLabel.text = "123"
// app.stage.addChild(fpsLabel)
// app.ticker.add((dt) => (fpsLabel.text = Math.round(app.ticker.FPS)))
