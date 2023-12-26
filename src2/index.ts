import { game, Image } from "./cherryEngine"

game.addAsset("bg", "bg.jpg")

game.start(() => {
  const image = game.add(Image)
  image.tint = "11ffff"
  image.scale = 0.7
  // setTimeout(() => (image.texture = "bg"), 3000)
  image.texture = "bg"
})
