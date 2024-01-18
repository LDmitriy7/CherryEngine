import { Context } from "./lib"

export class Entity {
  x = 0
  y = 0

  constructor(protected ctx: Context) {}

  // init?(): void

  draw() {
    this.ctx.beginPath()
    if (this.drawSelf) this.drawSelf()
    this.ctx.closePath()
  }

  drawSelf?(): void
}

abstract class Figure extends Entity {
  color = "white"

  protected fill() {
    const { ctx } = this
    ctx.fillStyle = this.color
    ctx.fill()
  }

  drawSelf() {
    this.drawFigure()
    this.fill()
  }

  abstract drawFigure(): void
}

export class Circle extends Figure {
  radius = 10

  drawFigure() {
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
  }
}

export class Rect extends Figure {
  width = 10
  height = 10

  drawFigure() {
    this.ctx.rect(this.x, this.y, this.width, this.height)
  }
}
