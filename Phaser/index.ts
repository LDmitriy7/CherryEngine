import Phaser from "phaser"
import { createGame } from "./patch"

const width = 1280
const height = 720

class Scene extends Phaser.Scene {
  preload() {
    this.load.image("bg", "rect.png")
  }

  create() {
    const image = this.add.image(width / 2, height / 2, "bg")
    image.scale = 0.1
  }
}

createGame({
  width,
  height,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [Scene],
})
