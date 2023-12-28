import { game, Image, Label } from "./loader"

function addAssets() {
  const assets = game.assets
  assets.add("bg", "bg.jpg")
  assets.add("panel", "panel.png")
}

function addBg() {
  const bg = game.add(Image)
  bg.scale = 0.7
  bg.texture = "bg"
}

function addPanel() {
  const panel = game.add(Image)
  panel.texture = "panel"
  panel.scale = 0.65
  panel.tint = "000000"
}

function addLabel() {
  const label = game.add(Label)
  label.color = "ffffff"
  label.y = 310
  label.text = "МОИ КОНТАКТЫ"
  label.weight = "bolder"
}

addAssets()

game.play(() => {
  addBg()
  addPanel()
  addLabel()
})
