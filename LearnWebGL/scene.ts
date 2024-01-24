import { mat4 } from "gl-matrix"
import { Buffers, VERTEX_INDEXES } from "./buffers"
import { GL, ShaderProgramInfo, toRads } from "./lib"
import { createTexture } from "./textures"

function setAttribute(
  gl: GL,
  componentsNum: number,
  buffer: WebGLBuffer,
  attrLocation: number
) {
  const normalize = false
  const stride = 0
  const offset = 0
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.vertexAttribPointer(
    attrLocation,
    componentsNum,
    gl.FLOAT,
    normalize,
    stride,
    offset
  )
  gl.enableVertexAttribArray(attrLocation)
}

function setPositionAttribute(
  gl: GL,
  buffers: Buffers,
  programInfo: ShaderProgramInfo
) {
  const attrLocation = programInfo.attrLocations.vertexPosition
  const buffer = buffers.position
  const componentsNum = 3
  setAttribute(gl, componentsNum, buffer, attrLocation)
}

function setTextureAttribute(
  gl: GL,
  buffers: Buffers,
  programInfo: ShaderProgramInfo
) {
  const attrLocation = programInfo.attrLocations.textureCoord
  const buffer = buffers.textureCoord
  const componentsNum = 2
  setAttribute(gl, componentsNum, buffer, attrLocation)
}

// function setColorAttribute(
//   gl: GL,
//   buffers: Buffers,
//   programInfo: ShaderProgramInfo
// ) {
//   const attrLocation = programInfo.attrLocations.vertexColor
//   const buffer = buffers.color
//   const componentsNum = 4
//   setAttribute(gl, componentsNum, buffer, attrLocation)
// }

export function drawScene(
  gl: GL,
  programInfo: ShaderProgramInfo,
  buffers: Buffers,
  cameraRotation: number,
  textureOffsetX: number,
  texture: WebGLTexture
) {
  gl.clearColor(0, 0, 0, 1)
  gl.enable(gl.DEPTH_TEST)
  gl.depthFunc(gl.LEQUAL)

  const fieldOfView = toRads(45)
  const canvas = gl.canvas as HTMLCanvasElement // TODO: ?
  const aspect = canvas.clientWidth / canvas.clientHeight
  const zNear = 0.1
  const zFar = 100
  const projectionMatrix = mat4.create()
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar)

  const modelViewMatrix = mat4.create()
  mat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, -5])
  mat4.rotate(
    modelViewMatrix,
    modelViewMatrix,
    toRads(cameraRotation),
    [1, 1, 1]
  )

  setPositionAttribute(gl, buffers, programInfo)
  setTextureAttribute(gl, buffers, programInfo)

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices) // TODO: move
  gl.useProgram(programInfo.program)

  gl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    projectionMatrix
  )
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix
  )

  gl.uniform2f(programInfo.uniformLocations.textureOffset, textureOffsetX, 1)

  const textureUnit = 0
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
  gl.activeTexture(gl.TEXTURE0 + textureUnit)
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.uniform1i(programInfo.uniformLocations.sampler, textureUnit)

  const offset = 0
  const vertexCount = VERTEX_INDEXES.length
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  gl.drawElements(gl.TRIANGLES, vertexCount, gl.UNSIGNED_SHORT, offset)
}
