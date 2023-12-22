import { assets, scene } from "../engine"

assets.add("bg", "bg.jpg")

function main() {
  const bg = scene.addImage("bg")
  bg.scale.set(0.7)
}

scene.play(main)
