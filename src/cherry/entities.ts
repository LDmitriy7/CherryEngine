export interface Entity {
  set x(value: number)
  get x()
  set y(value: number)
  get y()
  get parent(): Entity
  set parent(value: Entity)
  get name()
  set name(value: string | null)
  set scale(value: number)
  get scale()
  onPointerEnter(callback: () => any): void
  onPointerLeave(callback: () => any): void
  doScaleOnPointerEnter(multiplier?: number): void
}

export type Container = Entity

export interface Image<AssetId extends string> extends Entity {
  set tint(value: string)
  set scale(value: number)
  set texture(value: AssetId)
}

export interface Label extends Entity {
  set color(value: string)
  set text(value: string)
  set weight(value: string)
}

export interface Figure extends Entity {
  set color(value: string)
}

export interface Circle extends Figure {
  set radius(value: number)
  get radius()
}

export interface CircleWithBorder extends Circle {
  set borderRadius(value: number)
  get borderRadius()
  innerCircle: Circle
}

export interface RoundedRect extends Figure {
  set width(value: number)
  get width()
  set height(value: number)
  get height()
  set radius(value: number)
}
