import { Game, Sprite, Texture } from "./engine"

class ScrollingSprite extends Sprite {
  scrollSpeed = { x: 1, y: 1 }

  update(dt: number) {
    const offset = this.texture.offset
    offset.x += dt * this.scrollSpeed.x
    offset.y += dt * this.scrollSpeed.y
  }
}

class Background extends ScrollingSprite {
  texture = new Texture("bg.jpg")
  scrollSpeed = { x: 5, y: 0 }
}

const game = new Game()
const bg = new Background()

game.scene.addChild(bg)
game.start()
