import { GL } from "./lib"

function createShader(gl: GL, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) throw new Error("Couldn't create shader")
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const infoLog = gl.getShaderInfoLog(shader)
    gl.deleteShader(shader)
    throw new Error("Couldn't compile shader: " + infoLog)
  }
  return shader
}

export function createShaderProgram(
  gl: GL,
  vsSource: string,
  fsSource: string
) {
  const vShader = createShader(gl, gl.VERTEX_SHADER, vsSource)
  const fShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource)
  const program = gl.createProgram()
  if (!program) throw new Error("Couldn't create program")
  gl.attachShader(program, vShader)
  gl.attachShader(program, fShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error("Couldn't link program: " + gl.getProgramInfoLog(program))
  }
  return program
}
