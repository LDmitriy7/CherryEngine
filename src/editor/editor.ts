import { root } from "../engine/scene"
import { Attrs, getAttrs, setAttrs } from "./attr"
import { Entity } from "./entity"
import { ImageEntity } from "./imageEntity"
import { LabelEntity } from "./labelEntity"
import { moveArrayItem } from "./lib"
import { WhiteBoldLabelEntity } from "./whiteBoldLabelEntity"

const ENTITY_CONSTRUCTORS: Record<string, new () => Entity> = {
  image: ImageEntity,
  label: LabelEntity,
  whiteBoldLabel: WhiteBoldLabelEntity,
}

export const ENTITIES: Entity[] = []

const KEY_ENTITIES = "__entities__"

type EntityData = { type: string; name?: string; attrs: Attrs }

export function findEntity(name: string) {
  return ENTITIES.find((e) => e.name == name)
}

function saveEntities() {
  const items: EntityData[] = ENTITIES.map((e) => ({
    type: e.type,
    attrs: getAttrs(e),
    name: e.name,
  }))
  localStorage[KEY_ENTITIES] = JSON.stringify(items)
}

export class Editor {
  root = root

  add(entityType: string) {
    const constructor = ENTITY_CONSTRUCTORS[entityType]
    if (!constructor) throw new Error(`Unknown entity type: ${entityType}`)
    const entity = new constructor()
    ENTITIES.push(entity)
    return entity
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

  private loadEntities() {
    const data = localStorage[KEY_ENTITIES]
    if (!data) return
    const items = JSON.parse(data) as EntityData[]
    items.forEach((i) => {
      const entity = this.add(i.type)
      entity.name = i.name
      setAttrs(entity, i.attrs)
    })
  }
}
