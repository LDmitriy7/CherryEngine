import { Context } from "./lib"

export class CanvasContext implements Context {
  color = "white"
  font = "16px Arial"

  constructor(private ctx: CanvasRenderingContext2D) {}

  private fill() {
    const { ctx } = this
    ctx.fillStyle = this.color
    ctx.fill()
  }

  private draw(setPath: (ctx: CanvasRenderingContext2D) => void) {
    this.ctx.closePath()
    setPath(this.ctx)
    this.fill()
    this.ctx.beginPath()
  }

  drawRect(x: number, y: number, width: number, height: number) {
    this.draw((ctx) => ctx.rect(x, y, width, height))
  }

  drawCircle(x: number, y: number, radius: number) {
    this.draw((ctx) => ctx.arc(x, y, radius, 0, Math.PI * 2))
  }

  drawLabel(x: number, y: number, text: string) {
    this.ctx.font = this.font
    this.draw((ctx) => ctx.fillText(text, x, y))
  }
}
