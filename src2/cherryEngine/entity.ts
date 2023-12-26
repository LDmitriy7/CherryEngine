import { APP } from "./app"

export class Entity<T = any> {
  constructor(protected base: T) {}
}

export class Image extends Entity {
  constructor() {
    const image = APP.addImage()
    super(image)
  }

  set tint(value: string) {
    APP.setImageTint(this.base, value)
  }

  set scale(value: number) {
    APP.setScale(this.base, value)
  }

  set texture(value: string) {
    APP.setTexture(this.base, value)
  }
}
