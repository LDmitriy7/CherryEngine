import * as PIXI from "pixi.js"
import { uid } from "../lib"
import { Class } from "../lib"

export class Entity<T extends PIXI.Container = PIXI.Container> {
  id: string
  type: string
  name: string

  constructor(public base: T) {
    this.id = uid()
    this.type = this.constructor.name
    this.name = this.type.replace(/Entity$/, "")
  }

  createChild<T extends Entity>(type: Class<T>) {
    const entity = new type()
    this.addChild(entity)
    return entity
  }

  addChild(child: Entity) {
    this.base.addChild(child.base)
  }
}

export type EntityClass = Class<Entity>
export const EntityTypes: Record<string, EntityClass> = {}

Object.assign(window, { EntityTypes })

export function _entity<T extends Entity>(
  constructor: Class<T>,
  context: unknown
) {
  if (context) throw new Error(`Invalid entity: ${constructor.name}`)
  EntityTypes[constructor.name] = constructor
}

export function entity(oldName?: string) {
  return function decorator<T extends Entity>(
    constructor: new () => T,
    context: unknown
  ) {
    if (context) throw new Error(`Invalid entity: ${constructor.name}`)
    EntityTypes[constructor.name] = constructor
    if (oldName) EntityTypes[oldName] = constructor
  }
}
