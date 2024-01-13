import * as PIXI from "pixi.js"

export class Sprite extends PIXI.Sprite {
  constructor(src: string) {
    const texture = PIXI.Texture.from(src)
    super(texture)
    this.anchor.set(0.5)
  }
}
