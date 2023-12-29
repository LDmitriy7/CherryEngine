export type Class<T> = new () => T

export function expose(data: object) {
  Object.assign(window, data)
}

export function repeat(count: number, callback: (index: number) => any) {
  for (let i = 0; i < count; i++) {
    callback(i)
  }
}
