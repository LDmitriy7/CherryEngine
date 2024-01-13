import * as PIXI from "pixi.js"
import { IRectTransformable, RectTransform } from "./rectTransform"

export class Label extends PIXI.Text implements IRectTransformable {
  rectTransform: RectTransform

  constructor(text: string) {
    super(text)
    this.rectTransform = new RectTransform(this)
    this.anchor.set(0.5)
  }
}
