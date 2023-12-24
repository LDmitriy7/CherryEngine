export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export function moveArrayItem<T>(
  array: T[],
  oldIndex: number,
  newIndex: number
) {
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0])
}
