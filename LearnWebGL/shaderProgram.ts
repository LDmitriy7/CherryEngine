import { ShaderProgramInfo } from "./lib"
import { gl } from "./loader"
import { createShaderProgram } from "./shaders"

const vsSource = `
  attribute vec4 aVertexPosition;
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  }
`

const fsSource = `
  void main() {
    gl_FragColor = vec4(1.0, 0, 1.0, 1.0);
  }
`

const shaderProgram = createShaderProgram(gl, vsSource, fsSource)

export const shaderProgramInfo: ShaderProgramInfo = {
  program: shaderProgram,
  attrLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(
      shaderProgram,
      "uProjectionMatrix"
    )!,
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix")!,
  },
}
