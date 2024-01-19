import { Context } from "../lib"
import { Entity } from "./entity"

export class Square extends Entity {
  size = 100
  protected renderSelf(ctx: Context) {
    const size = this.size * this.globalScale
    const halfSize = size / 2
    ctx.rect(this.globalX - halfSize, -this.globalY - halfSize, size, size)
    ctx.fill()
  }
}
