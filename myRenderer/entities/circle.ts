import { Context } from "../lib"
import { Entity } from "./entity"

export class Circle extends Entity {
  size = 100
  protected renderSelf(ctx: Context) {
    const size = this.size * this.globalScale
    ctx.arc(this.globalX, -this.globalY, size / 2, 0, Math.PI * 2)
    ctx.fill()
  }
}
