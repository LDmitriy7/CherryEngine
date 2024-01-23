export type GL = WebGLRenderingContext

export interface ShaderProgramInfo {
  program: WebGLProgram
  attrLocations: {
    vertexPosition: number
    vertexColor: number 
  }
  uniformLocations: {
    projectionMatrix: WebGLUniformLocation
    modelViewMatrix: WebGLUniformLocation
  }
}

export function toRads(degrees: number) {
  return degrees * (Math.PI / 180)
}

export function fillArray<T>(value: T, num: number) {
  return Array<T>(num).fill(value)
}
