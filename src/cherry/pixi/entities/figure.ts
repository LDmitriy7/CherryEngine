import { Figure } from "../../entities"
import { PixiEntity } from "./entity"
import * as PIXI from "pixi.js"

export abstract class PixiFigure
  extends PixiEntity<PIXI.Graphics>
  implements Figure
{
  protected _color = "white"

  constructor() {
    const base = new PIXI.Graphics()
    super(base)
    this.update()
  }

  protected abstract draw(): void

  protected update() {
    this.base.clear()
    this.base.beginFill(this._color)
    this.draw()
    this.base.endFill()
  }

  set color(value: string) {
    this._color = value
    this.update()
  }
}
