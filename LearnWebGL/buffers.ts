import { GL } from "./lib"

const CUBE_POSITIONS = [
  // Front face
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,

  // Back face
  -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,

  // Top face
  -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,

  // Bottom face
  -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,

  // Right face
  1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,

  // Left face
  -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
];

function createPositionBuffer(gl: GL) {
  const buffer = gl.createBuffer()
  if (!buffer) throw new Error("Could not create buffer")
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(CUBE_POSITIONS), gl.STATIC_DRAW)
  return buffer
}

function createColorBuffer(gl: GL) {
  const colors = [
    1,
    1,
    1,
    1, // white
    1,
    0,
    0,
    1, // red
    0,
    1,
    0,
    1, // green
    0,
    0,
    1,
    1, // blue
  ]
  const buffer = gl.createBuffer()
  if (!buffer) throw new Error("Could not create buffer")
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW)
  return buffer
}

export class Buffers {
  position: WebGLBuffer
  color: WebGLBuffer

  constructor(gl: GL) {
    this.position = createPositionBuffer(gl)
    this.color = createColorBuffer(gl)
  }
}
