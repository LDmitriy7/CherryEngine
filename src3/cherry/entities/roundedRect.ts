import { Figure, PixiFigure } from "./figure"

export interface RoundedRect extends Figure {
  set width(value: number)
  set height(value: number)
  set radius(value: number)
}

export class PixiRoundedRect extends PixiFigure implements RoundedRect {
  private _width = 100
  private _height = 100
  private _radius = 10

  constructor() {
    super()
    this.name = "roundedRect"
    this.update()
  }

  protected draw() {
    const { _width, _height, _radius } = this
    this.base.drawRoundedRect(
      -_width / 2,
      -_height / 2,
      _width,
      _height,
      _radius
    )
  }

  set width(value: number) {
    this._width = value
    this.update()
  }

  set height(value: number) {
    this._height = value
    this.update()
  }

  set radius(value: number) {
    this._radius = value
    this.update()
  }
}
