import { Context } from "../lib"

export class Entity {
  private _children: Entity[] = []
  private _parent?: Entity

  x = 0
  y = 0
  name: string | null = null
  scale = 1

  get children() {
    return this._children
  }

  get parent() {
    return this._parent
  }

  set parent(parent: Entity | undefined) {
    this._parent = parent
    if (parent) parent._children.push(this)
  }

  // TODO: optimize
  get globalX() {
    if (!this.parent) return this.x
    return this.parent.globalX + this.x
  }

  get globalY() {
    if (!this.parent) return this.y
    return this.parent.globalY + this.y
  }

  get globalScale() {
    if (!this.parent) return this.scale
    return this.parent.globalScale * this.scale
  }

  render(ctx: Context) {
    if (this.renderSelf) this.renderSelf(ctx)
    this.children.forEach((child) => child.render(ctx))
  }

  protected renderSelf?(ctx: Context): void
}
