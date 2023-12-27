import { game, Image } from "./cherry"

game.addAsset("bg", "bg.jpg")
game.addAsset("panel", "panel.png")
game.addAsset("panel2", "panel4.png")

game.start(() => {
  const bg = game.add(Image)
  bg.scale = 0.7
  bg.texture = "bg"
  const panel = game.add(Image)
  panel.texture = "panel2"
  // panel.scale = 0.35 / 6
  panel.tint = "000000"
})
