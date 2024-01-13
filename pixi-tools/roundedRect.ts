import { drawRoundedRect, setFigure } from "./graphics"
import * as PIXI from "pixi.js"

export class RoundedRect extends PIXI.Graphics {
  _color = "white"
  _width = 100
  _height = 100
  _radius = 10

  constructor() {
    super()
    this.updateFigure()
  }

  private updateFigure() {
    setFigure(
      this,
      () => drawRoundedRect(this, this._width, this._height, this._radius),
      this.color
    )
  }

  get width() {
    return this._width
  }

  set width(value: number) {
    this._width = value
    this.updateFigure()
  }

  get height() {
    return this._height
  }

  set height(value: number) {
    this._height = value
    this.updateFigure()
  }

  get radius() {
    return this._radius
  }

  set radius(value: number) {
    this._radius = value
    this.updateFigure()
  }

  get color() {
    return this._color
  }

  set color(value: string) {
    this._color = value
    this.updateFigure()
  }
}
