// export type Context = CanvasRenderingContext2D
export interface Context {
  font: string
  color: string
  drawRect(x: number, y: number, width: number, height: number): void
  drawCircle(x: number, y: number, radius: number): void
  drawLabel(x: number, y: number, text: string): void
}
