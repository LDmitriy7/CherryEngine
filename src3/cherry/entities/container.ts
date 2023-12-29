import { PixiEntity } from "./entity"
import * as PIXI from "pixi.js"

export class PixiContainer extends PixiEntity {
  constructor() {
    const base = new PIXI.Container()
    super(base)
  }
}
