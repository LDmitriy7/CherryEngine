export type Point = { x: number; y: number }

export function expose(data: object) {
  Object.assign(window, data)
}

export const DESIGN_HEIGHT = 720
export const MAX_RATIO = 20 / 9
