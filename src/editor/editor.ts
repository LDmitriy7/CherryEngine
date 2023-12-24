import { root } from "../engine/scene"
import { Attrs, getAttrs, setAttrs } from "./attr"
import { Entity, EntityClass, EntityTypes } from "./entities"
import { moveArrayItem } from "./lib"

export const ENTITIES: Entity[] = []

const KEY_ENTITIES = "__entities__"

export function findEntity(name: string) {
  return ENTITIES.find((e) => e.name == name)
}

function saveEntities() {
  localStorage[KEY_ENTITIES] = serializeEntities()
}

class EntityData {
  id: string
  type: string
  name: string
  attrs: Attrs

  constructor(entity: Entity) {
    this.type = entity.type
    this.id = entity.id
    this.name = entity.name
    this.attrs = getAttrs(entity)
  }
}

function createEntityData(entity: Entity) {
  return new EntityData(entity)
}

function serializeEntities() {
  const items: EntityData[] = ENTITIES.map(createEntityData)
  return JSON.stringify(items)
}

Object.assign(window, { serializeEntities })

export class Editor {
  root = root
  lastEntity?: Entity

  add(entityType: string | EntityClass) {
    let constructor: EntityClass
    if (typeof entityType == "string") {
      constructor = EntityTypes[entityType]
      if (!constructor) throw new Error(`Unknown entity type: ${entityType}`)
    } else constructor = entityType
    const entity = new constructor()
    ENTITIES.push(entity)
    this.lastEntity = entity
    return entity
  }

  remove(entity: Entity) {
    let index = ENTITIES.indexOf(entity)
    if (index !== -1) ENTITIES.splice(index)
    index = root.children.indexOf(entity.base)
    if (index !== -1) root.children.splice(index)
  }

  reorder(entity: Entity, newIndex: number) {
    let oldIndex = ENTITIES.indexOf(entity)
    if (oldIndex == -1) throw new Error(`Entity not found: ${entity.name}`)
    const indexDelta = newIndex - oldIndex
    moveArrayItem(ENTITIES, oldIndex, newIndex)
    oldIndex = this.root.children.indexOf(entity.base)
    newIndex = oldIndex + indexDelta
    moveArrayItem(this.root.children, oldIndex, newIndex)
  }

  save() {
    saveEntities()
  }

  load() {
    this.loadEntities()
  }

  removeLastEntity() {
    if (!this.lastEntity) return
    this.remove(this.lastEntity)
  }

  private loadEntities() {
    const data = localStorage[KEY_ENTITIES]
    if (!data) return
    const items = JSON.parse(data) as EntityData[]
    items.forEach((i) => {
      const entity = this.add(i.type)
      entity.id = i.id
      entity.name = i.name
      setAttrs(entity, i.attrs)
    })
  }
}
