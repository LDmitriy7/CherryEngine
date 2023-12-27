import * as cherry from "./cherry"

type AssetId = "bg" | "panel"
const Image = cherry.Image<AssetId>

// const app = new cherry.PixiApp()
const app = new cherry.PhaserApp()
const game = new cherry.Game<AssetId>(app)

game.assets.add("bg", "bg.jpg")
game.assets.add("panel", "panel.png")

game.play(() => {
  const bg = game.add(Image)
  bg.scale = 0.7
  bg.texture = "bg"
  const panel = game.add(Image)
  panel.texture = "panel"
  panel.scale = 0.5
  panel.tint = "000000"
})
