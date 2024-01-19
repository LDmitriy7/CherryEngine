import { Entity, Root } from "./entities"
import { Context } from "./lib"
import { startRenderLoop } from "./loop"

export class App {
  private root: Root

  constructor(private ctx: Context, canvas: HTMLCanvasElement) {
    this.root = new Root(canvas)
  }

  start(entity: Entity) {
    entity.parent = this.root
    startRenderLoop(this.ctx, this.root)
  }
}
