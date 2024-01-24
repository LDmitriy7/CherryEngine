import { GL, fillArray } from "./lib"

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
]

const faceColors = [
  [1.0, 1.0, 1.0, 1.0], // Front face: white
  [1.0, 0.0, 0.0, 1.0], // Back face: red
  [0.0, 1.0, 0.0, 1.0], // Top face: green
  [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
  [1.0, 1.0, 0.0, 1.0], // Right face: yellow
  [1.0, 0.0, 1.0, 1.0], // Left face: purple
]

const colors = faceColors.map((c) => fillArray(c, 4)).flat(2)

function createPositionBuffer(gl: GL) {
  const buffer = createBuffer(gl)
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(CUBE_POSITIONS),
    gl.STATIC_DRAW
  )
  return buffer
}

function createColorBuffer(gl: GL) {
  const buffer = createBuffer(gl)
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW)
  return buffer
}

export const VERTEX_INDEXES = [
  0,
  1,
  2,
  0,
  2,
  3, // front
  4,
  5,
  6,
  4,
  6,
  7, // back
  8,
  9,
  10,
  8,
  10,
  11, // top
  12,
  13,
  14,
  12,
  14,
  15, // bottom
  16,
  17,
  18,
  16,
  18,
  19, // right
  20,
  21,
  22,
  20,
  22,
  23, // left
]

function createIndexBuffer(gl: GL) {
  const buffer = createBuffer(gl)
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer)
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(VERTEX_INDEXES),
    gl.STATIC_DRAW
  )
  return buffer
}

function createBuffer(gl: GL) {
  const buffer = gl.createBuffer()
  if (!buffer) throw new Error("Couldn't create buffer")
  return buffer
}

function createTextureBuffer(gl: GL) {
  const buffer = createBuffer(gl)
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

  const _ratio = 768 / 512
  const _maxX = 1 / _ratio
  const _maxY = 1
  const textureCoordsRow = [0, 0, _maxX, 0, _maxX, _maxY, 0, _maxY]

  const textureCoords = [
    // Front
    ...textureCoordsRow,
    // Back
    ...textureCoordsRow,
    // Top
    ...textureCoordsRow,
    // Bottom
    ...textureCoordsRow,
    // Right
    ...textureCoordsRow,
    // Left
    ...textureCoordsRow,
  ]

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(textureCoords),
    gl.STATIC_DRAW
  )

  return buffer
}

export class Buffers {
  position: WebGLBuffer
  // color: WebGLBuffer
  indices: WebGLBuffer
  textureCoord: WebGLBuffer

  constructor(gl: GL) {
    this.position = createPositionBuffer(gl)
    // this.color = createColorBuffer(gl)
    this.indices = createIndexBuffer(gl)
    this.textureCoord = createTextureBuffer(gl)
  }
}
