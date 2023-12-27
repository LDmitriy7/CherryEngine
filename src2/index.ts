import { Game, Image, PhaserApp, PixiApp } from "./cherry"

const app = new PixiApp()
// const app = new PhaserApp()
const game = new Game(app)

game.addAsset("bg", "bg.jpg")
game.addAsset("panel", "panel.png")
game.addAsset("panel2", "panel4.png")

game.play(() => {
  const bg = game.add(Image)
  bg.scale = 0.7
  bg.texture = "bg"
  const panel = game.add(Image)
  panel.texture = "panel2"
  // panel.scale = 0.35 / 6
  panel.tint = "000000"
})
