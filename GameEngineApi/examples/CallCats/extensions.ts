import { Sprite } from "./engine"

export class ScrollingSprite extends Sprite {
  scrollSpeed = { x: 1, y: 1 }

  update(dt: number) {
    const offset = this.texture.offset
    offset.x += dt * this.scrollSpeed.x
    offset.y += dt * this.scrollSpeed.y
  }
}
