import { Context, Entity } from "./entity"

export class Square extends Entity {
  protected renderSelf(ctx: Context) {
    const size = 100
    ctx.rect(this.globalX, this.globalY, size, size)
    ctx.fill()
  }
}
