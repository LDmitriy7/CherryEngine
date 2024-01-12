import { RoundedRect } from "../../entities"
import { PixiFigure } from "./figure"

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

  get width() {
    return this._width
  }

  set height(value: number) {
    this._height = value
    this.update()
  }

  get height() {
    return this._height
  }

  set radius(value: number) {
    this._radius = value
    this.update()
  }
}
