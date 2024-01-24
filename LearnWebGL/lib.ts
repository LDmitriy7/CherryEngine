export type GL = WebGLRenderingContext

export interface ShaderProgramInfo {
  program: WebGLProgram
  attrLocations: {
    vertexPosition: number
    vertexColor: number
    textureCoord: number
  }
  uniformLocations: {
    projectionMatrix: WebGLUniformLocation
    modelViewMatrix: WebGLUniformLocation
    sampler: WebGLUniformLocation
    textureOffset: WebGLUniformLocation
  }
}

export function toRads(degrees: number) {
  return degrees * (Math.PI / 180)
}

export function fillArray<T>(value: T, num: number) {
  return Array<T>(num).fill(value)
}
