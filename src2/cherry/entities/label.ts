import { App } from "../apps"
import { Entity } from "./entity"

export class Label extends Entity {
  constructor(protected app: App) {
    const base = app.addLabel()
    super(base, app)
  }

  set color(value: string) {
    this.app.setLabelColor(this.base, value)
  }

  set text(value: string) {
    this.app.setText(this.base, value)
  }

  set weight(value: string) {
    this.app.setFontWeight(this.base, value)
  }
}
