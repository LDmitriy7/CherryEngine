import { Figure, PixiFigure } from "./figure"

export interface Circle extends Figure {
  set radius(value: number)
}

export class PixiCircle extends PixiFigure implements Circle {
  private _radius = 100

  constructor() {
    super()
    this.name = "circle"
    this.update()
  }

  protected draw() {
    this.base.drawCircle(0, 0, this._radius)
  }

  set radius(value: number) {
    this._radius = value
    this.update()
  }
}
