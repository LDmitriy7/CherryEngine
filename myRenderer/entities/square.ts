import { Context, Entity } from "./entity"

export class Square extends Entity {
  size = 100
  protected renderSelf(ctx: Context) {
    const size = this.size * this.globalScale
    const halfSize = size / 2
    ctx.rect(this.globalX - halfSize, -this.globalY - halfSize, size, size)
    // ctx.rect(this.globalX, -this.globalY, size, size)
    ctx.fill()
  }
}
