export interface Entity {
  set x(value: number)
  set y(value: number)
  get parent(): Entity
  set parent(value: Entity)
  get name()
  set name(value: string | null)
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
}

export interface RoundedRect extends Figure {
  set width(value: number)
  set height(value: number)
  set radius(value: number)
}
