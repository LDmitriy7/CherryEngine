import { expose } from "./../../pixi-tools"

export type Class<T> = new () => T

export function repeat(count: number, callback: (index: number) => any) {
  for (let i = 0; i < count; i++) {
    callback(i)
  }
}

export { expose }
