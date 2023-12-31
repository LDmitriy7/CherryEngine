import { root } from "../../engine/scene"
import { entity } from "./entity"
import { SpatialEntity } from "./spatialEntity"
import * as PIXI from "pixi.js"

@entity()
export class ContainerEntity extends SpatialEntity {
  constructor() {
    const container = new PIXI.Container()
    root.addChild(container) // TODO: create from scene
    super(container)
  }
}
