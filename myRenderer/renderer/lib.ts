export interface Context {
  font: string
  color: string
  drawRect(x: number, y: number, width: number, height: number): void
  drawCircle(x: number, y: number, radius: number): void
  drawLabel(x: number, y: number, text: string): void
}

export function copyProps<Src>(src: Src, dest: any, props: (keyof Src)[]) {
  for (const srcKey of props) {
    dest[srcKey] = src[srcKey]
  }
}
