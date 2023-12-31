function createCanvas() {
  const canvas = document.createElement("canvas")
  document.body.appendChild(canvas)
  return canvas
}

function resizeCanvas(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function doResizeCanvas(canvas: HTMLCanvasElement) {
  resizeCanvas(canvas)
  window.addEventListener("resize", () => resizeCanvas(canvas))
}

function getCanvasContext(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Canvas context not available")
  return ctx
}

function createDefaultCanvas() {
  const canvas = createCanvas()
  doResizeCanvas(canvas)
  return canvas
}

export function createDefaultCanvasAndContext() {
  const canvas = createDefaultCanvas()
  const ctx = getCanvasContext(canvas)
  return { canvas, ctx }
}
