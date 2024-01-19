import { Entity } from "./entity"

abstract class Component {
  constructor(protected entity: Entity) {}
}

export abstract class FigureComponent extends Component {
  color = "white"

  update() {
    const ctx = this.entity.ctx
    ctx.color = this.color
    this.draw()
  }

  protected abstract draw(): void
}

export class CircleComponent extends FigureComponent {
  radius = 10

  protected draw() {
    const { entity } = this
    const ctx = entity.ctx
    ctx.drawCircle(entity.x, entity.y, this.radius)
  }
}

export class RectComponent extends FigureComponent {
  width = 10
  height = 10

  protected draw() {
    const { entity } = this
    const ctx = entity.ctx
    ctx.drawRect(entity.x, entity.y, this.width, this.height)
  }
}

export class LabelComponent extends FigureComponent {
  font = "16px Arial"
  text = "Text"

  protected draw() {
    const { entity } = this
    const ctx = entity.ctx
    ctx.font = this.font
    ctx.drawLabel(entity.x, entity.y, this.text)
  }
}
