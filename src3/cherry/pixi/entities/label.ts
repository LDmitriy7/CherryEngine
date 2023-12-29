import { Label } from "../../entities"
import { PixiEntity } from "./entity"
import * as PIXI from "pixi.js"

export class PixiLabel extends PixiEntity<PIXI.Text> implements Label {
  constructor() {
    const base = new PIXI.Text()
    super(base)
    base.anchor.set(0.5)
    this.name = "label"
  }

  set color(value: string) {
    this.base.style.fill = value
  }

  set text(value: string) {
    this.base.text = value
  }

  set weight(value: PIXI.TextStyleFontWeight) {
    this.base.style.fontWeight = value
  }
}
