export type Point = { x: number; y: number }

export function expose(data: object) {
  Object.assign(window, data)
}
