import { Context } from "./lib"

export class Entity {
  x = 0
  y = 0

  constructor(protected ctx: Context) {}

  // init?(): void
  // draw() {}
}

abstract class Figure extends Entity {
  color = "white"

  draw() {
    this.ctx.color = this.color
    this.drawFigure()
  }

  protected abstract drawFigure(): void
}

export class Circle extends Figure {
  radius = 10

  drawFigure() {
    this.ctx.drawCircle(this.x, this.y, this.radius)
  }
}

export class Rect extends Figure {
  width = 10
  height = 10

  drawFigure() {
    this.ctx.drawRect(this.x, this.y, this.width, this.height)
  }
}

export class Label extends Figure {
  font = "16px Arial"
  text = "Text"

  protected drawFigure(): void {
    this.ctx.font = this.font
    this.ctx.drawLabel(this.x, this.y, this.text)
  }
}
