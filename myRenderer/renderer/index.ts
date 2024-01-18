export function createCanvas() {
  const canvas = document.createElement("canvas")
  canvas.height = 320
  canvas.width = 480
  document.body.appendChild(canvas)
  return canvas
}

export function getCanvasContext(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Canvas context not available")
  return ctx
}
