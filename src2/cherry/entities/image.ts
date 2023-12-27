import { App } from "../apps"
import { Entity } from "./entity"

export class Image<AssetId extends string> extends Entity {
  constructor(protected app: App) {
    const image = app.addImage()
    super(image, app)
  }

  set tint(value: string) {
    this.app.setImageTint(this.base, value)
  }

  set scale(value: number) {
    this.app.setScale(this.base, value)
  }

  set texture(value: AssetId) {
    this.app.setTexture(this.base, value)
  }
}
