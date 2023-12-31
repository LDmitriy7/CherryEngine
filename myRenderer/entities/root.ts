import { Entity } from "./entity"

export class Root extends Entity {
  constructor(private canvas: HTMLCanvasElement) {
    super()
  }

  get globalX() {
    return this.canvas.width / 2
  }

  get globalY() {
    return -this.canvas.height / 2
  }
}
