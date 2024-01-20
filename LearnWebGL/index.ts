import { createBuffers } from "./buffers"
import { gl } from "./loader"
import { drawScene } from "./scene"
import { shaderProgramInfo } from "./shaderProgram"

function main() {
  const buffers = createBuffers(gl)
  drawScene(gl, shaderProgramInfo, buffers)
}

main()
