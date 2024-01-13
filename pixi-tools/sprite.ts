import * as PIXI from "pixi.js"
import { DESIGN_HEIGHT, MAX_RATIO } from "./lib"

export class Sprite extends PIXI.Sprite {
  constructor(src: string) {
    const texture = PIXI.Texture.from(src)
    super(texture)
    this.anchor.set(0.5)
  }
}

export class TilingSprite extends PIXI.TilingSprite {
  constructor(src: string, textureWidth: number, textureHeight: number) {
    const texture = PIXI.Texture.from(src)
    super(texture, textureWidth, textureHeight)
    this.anchor.set(0.5)
  }
}

export class BackgroundSprite extends TilingSprite {
  constructor(src: string, textureWidth: number, textureHeight: number) {
    super(src, textureWidth, textureHeight)
    const scale = (DESIGN_HEIGHT / textureHeight) * 1.05
    this.scale.set(scale)
    this.width = (DESIGN_HEIGHT * MAX_RATIO) / scale
  }
}
