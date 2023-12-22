import { Scene } from "./engine/_scene"

enum Textures {
  bg = "bg",
  panel = "panel",
}

export default class Scene1 extends Scene {
  preload() {
    super.preload()
    this.load.image(Textures.bg, "bg.jpg")
    this.load.image(Textures.panel, "panel.png")
  }

  create() {
    this.addImage(Textures.bg, 0.3)
    const panel = this.addImage(Textures.panel, 0.49)
    panel.tint = 0
  }
}

window.Scene1 = Scene1
