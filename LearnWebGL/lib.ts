export type GL = WebGLRenderingContext

export interface ShaderProgramInfo {
  program: WebGLProgram
  attrLocations: {
    vertexPosition: number
  }
  uniformLocations: {
    projectionMatrix: WebGLUniformLocation
    modelViewMatrix: WebGLUniformLocation
  }
}

export function toRads(degrees: number) {
  return degrees * (Math.PI / 180)
}
