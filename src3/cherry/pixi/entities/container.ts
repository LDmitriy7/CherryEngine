import { Container } from "../../entities"
import { PixiEntity } from "./entity"
import * as PIXI from "pixi.js"

export class PixiContainer extends PixiEntity implements Container {
  constructor() {
    const base = new PIXI.Container()
    super(base)
  }
}
