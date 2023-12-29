import { Circle } from "../../entities"
import { PixiFigure } from "./figure"

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
