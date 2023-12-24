import * as PIXI from "pixi.js"
import { uid } from "./lib"

export class Entity<T extends PIXI.DisplayObject = PIXI.DisplayObject> {
  id: string
  type = "entity"
  name?: string

  constructor(public base: T) {
    this.id = uid()
  }
}
