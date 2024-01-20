import { createBuffers } from "./buffers"
import { gl } from "./loader"
import { drawScene } from "./scene"
import { shaderProgramInfo } from "./shaderProgram"

function main() {
  gl.clearColor(0, 0, 0, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)
  const buffers = createBuffers(gl)
  drawScene(gl, shaderProgramInfo, buffers)
}

main()
