import { ShaderProgramInfo } from "./lib"
import { gl } from "./loader"
import { createShaderProgram } from "./shaders"

const vsSource = `#version 300 es
in vec4 aVertexPosition;
in vec2 aTextureCoord;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

out vec2 vTextureCoord;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  vTextureCoord = aTextureCoord;
}
`

const fsSource = `#version 300 es
precision highp float;

in vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec2 uTextureOffset;
out vec4 fragColor;

void main() {
  vec2 coords = vec2(vTextureCoord.x + uTextureOffset.x, vTextureCoord.y + uTextureOffset.y);
  fragColor = texture(uSampler, coords);
}
`

const shaderProgram = createShaderProgram(gl, vsSource, fsSource)

function getUniformLocation(name: string) {
  return gl.getUniformLocation(shaderProgram, name)!
}

function getAttrLocation(name: string) {
  return gl.getAttribLocation(shaderProgram, name)!
}

export const shaderProgramInfo: ShaderProgramInfo = {
  program: shaderProgram,
  attrLocations: {
    vertexPosition: getAttrLocation("aVertexPosition"),
    vertexColor: getAttrLocation("aVertexColor"),
    textureCoord: getAttrLocation("aTextureCoord"),
  },
  uniformLocations: {
    projectionMatrix: getUniformLocation("uProjectionMatrix"),
    modelViewMatrix: getUniformLocation("uModelViewMatrix"),
    sampler: getUniformLocation("uSampler"),
    textureOffset: getUniformLocation("uTextureOffset"),
  },
}
