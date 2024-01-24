const canvas = document.querySelector("#glcanvas") as HTMLCanvasElement
const _gl = canvas.getContext("webgl2")
if (!_gl) {
  throw new Error(
    "Unable to initialize WebGL. Your browser or machine may not support it."
  )
}
export const gl = _gl
