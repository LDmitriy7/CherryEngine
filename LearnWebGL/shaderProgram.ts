import { ShaderProgramInfo } from "./lib"
import { gl } from "./loader"
import { createShaderProgram } from "./shaders"

const vsSource = `
attribute vec4 aVertexPosition;
attribute vec4 aVertexColor;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
varying lowp vec4 vColor;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  vColor = aVertexColor;
}
`

const fsSource = `
varying lowp vec4 vColor;

void main() {
  gl_FragColor = vColor;
  // gl_FragColor = vec4(1,1,1,1);
}
`

const shaderProgram = createShaderProgram(gl, vsSource, fsSource)

export const shaderProgramInfo: ShaderProgramInfo = {
  program: shaderProgram,
  attrLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(
      shaderProgram,
      "uProjectionMatrix"
    )!,
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix")!,
  },
}
