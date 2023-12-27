export type Class<T> = new () => T

export function expose(data: object) {
  Object.assign(window, data)
}
