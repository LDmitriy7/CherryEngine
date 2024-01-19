import { Game, Texture } from "./engine"
import { ScrollingSprite } from "./extensions"

class Background extends ScrollingSprite {
  texture = new Texture("bg.jpg")
  scrollSpeed = { x: 5, y: 0 }
}

const game = new Game()
const bg = new Background()

game.scene.addChild(bg)
game.start()
