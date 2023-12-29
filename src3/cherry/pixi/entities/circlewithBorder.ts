import { Circle, CircleWithBorder } from "../../entities"
import { PixiCircle } from "./circle"

export class PixiCircleWithBorder
  extends PixiCircle
  implements CircleWithBorder
{
  private _borderRadius = 1
  innerCircle: Circle

  constructor() {
    super()
    this.innerCircle = new PixiCircle()
    this.innerCircle.parent = this
    this.innerCircle.color = "grey"
    this.updateInnerCircle()
  }

  private updateInnerCircle() {
    this.innerCircle.radius = this.radius - this.borderRadius
    console.log(this.radius)
  }

  set radius(value: number) {
    super.radius = value
    this.updateInnerCircle()
  }

  get radius() {
    return super.radius
  }

  set borderRadius(value: number) {
    this._borderRadius = value
    this.updateInnerCircle()
  }

  get borderRadius() {
    return this._borderRadius
  }
}
