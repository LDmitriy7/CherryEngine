import {
  CircleComponent,
  FigureComponent,
  LabelComponent,
  RectComponent,
} from "./component"
import { Context } from "./lib"

export class Entity {
  x = 0
  y = 0

  constructor(public ctx: Context) {}

  // init?(): void
  // draw() {}
}

abstract class Figure extends Entity {
  color = "white"
  protected abstract comp: FigureComponent

  draw() {
    const { comp } = this
    comp.color = this.color
    this.syncComponent()
    comp.update()
  }

  protected abstract syncComponent(): void
}

export class Circle extends Figure {
  radius = 10
  protected comp = new CircleComponent(this)

  protected syncComponent() {
    const { comp } = this
    comp.radius = this.radius
  }
}

export class Rect extends Figure {
  width = 10
  height = 10
  protected comp = new RectComponent(this)

  protected syncComponent() {
    const { comp } = this
    comp.width = this.width
    comp.height = this.height
  }
}

export class Label extends Figure {
  font = "16px Arial"
  text = "Text"
  protected comp = new LabelComponent(this)

  protected syncComponent() {
    const { comp } = this
    comp.font = this.font
    comp.text = this.text
  }
}
