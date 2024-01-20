import { mat4 } from "gl-matrix"
import { Buffers } from "./buffers"
import { GL, ShaderProgramInfo, toRads } from "./lib"

function setPositionAttribute(
  gl: GL,
  buffers: Buffers,
  programInfo: ShaderProgramInfo
) {
  const componentsNum = 2
  const normalize = false
  const stride = 0
  const offset = 0
  gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position)
  gl.vertexAttribPointer(
    programInfo.attrLocations.vertexPosition,
    componentsNum,
    gl.FLOAT,
    normalize,
    stride,
    offset
  )
  gl.enableVertexAttribArray(programInfo.attrLocations.vertexPosition)
}

export function drawScene(
  gl: GL,
  programInfo: ShaderProgramInfo,
  buffers: Buffers
) {
  gl.clearColor(0, 0, 0, 1)
  gl.enable(gl.DEPTH_TEST)
  gl.depthFunc(gl.LEQUAL)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  const fieldOfView = toRads(45)
  const canvas = gl.canvas as HTMLCanvasElement // TODO: ?
  const aspect = canvas.clientWidth / canvas.clientHeight
  const zNear = 0.1
  const zFar = 100
  const projectionMatrix = mat4.create()
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar)

  const modelViewMatrix = mat4.create()
  mat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, -6])

  setPositionAttribute(gl, buffers, programInfo)

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

  const offset = 0
  const vertexCount = 4
  gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount)
}
