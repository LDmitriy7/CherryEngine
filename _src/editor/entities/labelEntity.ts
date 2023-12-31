import { scene } from "../../engine"
import { attr } from "../attr"
import { entity } from "./entity"
import { SpatialEntity } from "./spatialEntity"
import * as PIXI from "pixi.js"

@entity()
export class LabelEntity extends SpatialEntity<PIXI.Text> {
  constructor() {
    super(scene.addLabel("text"))
  }

  @attr
  set color(value: string) {
    this.base.style.fill = value
  }
  get color() {
    return this.base.style.fill.toString()
  }

  @attr
  set weight(value: PIXI.TextStyleFontWeight) {
    this.base.style.fontWeight = value
  }
  get weight() {
    return this.base.style.fontWeight
  }

  @attr
  set text(value: string) {
    this.base.text = value
  }
  get text() {
    return this.base.text
  }

  @attr
  set fontSize(value: string | number) {
    this.base.style.fontSize = value
  }
  get fontSize() {
    return this.base.style.fontSize
  }
}
