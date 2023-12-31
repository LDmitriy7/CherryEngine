export type Context = CanvasRenderingContext2D

export class Entity {
  x = 0
  y = 0
  private _children: Entity[] = []
  private _parent?: Entity

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

  render(ctx: Context) {
    if (this.renderSelf) this.renderSelf(ctx)
    this.children.forEach((child) => child.render(ctx))
  }

  protected renderSelf?(ctx: Context): void
}
