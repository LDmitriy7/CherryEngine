import { root } from "../engine/scene"
import { editor } from "../game/temp"
import { Attrs, getAttrs, setAttrs } from "./attr"
import { PixiEntity, EntityClass, EntityTypes } from "./entities"
import { moveArrayItem } from "./lib"

export const ENTITIES: PixiEntity[] = []

const KEY_BACKUP_ENTITIES = "__backupEntities__"
const KEY_ENTITIES = "__entities__"

function importEntities(data: string) {
  localStorage[KEY_ENTITIES] = data
  editor.revert()
}

Object.assign(window, { importEntities })

class EntityStorage {
  save = () => this._save(KEY_ENTITIES)
  load = () => this._load(KEY_ENTITIES)
  backup = () => this._save(KEY_BACKUP_ENTITIES)
  restore = () => this._load(KEY_BACKUP_ENTITIES)

  revert() {
    localStorage[KEY_BACKUP_ENTITIES] = localStorage[KEY_ENTITIES]
  }

  private _load(key: string) {
    const data = localStorage[key]
    if (!data) return []
    return JSON.parse(data) as EntityData[]
  }

  private _save(key: string) {
    localStorage[key] = serializeEntities()
  }
}

const entityStorage = new EntityStorage()

type EntityData = {
  id: string
  type: string
  name: string
  attrs: Attrs
}

function createEntityData(entity: PixiEntity): EntityData {
  return {
    type: entity.type,
    id: entity.id,
    name: entity.name,
    attrs: getAttrs(entity),
  }
}

function serializeEntities() {
  const items: EntityData[] = ENTITIES.map(createEntityData)
  return JSON.stringify(items)
}

Object.assign(window, { serializeEntities })

export class Editor {
  root = root
  lastEntity?: PixiEntity

  add<T extends EntityClass>(entityType: string | T): InstanceType<T> {
    let constructor: EntityClass
    if (typeof entityType == "string") {
      constructor = EntityTypes[entityType]
      if (!constructor) throw new Error(`Unknown entity type: ${entityType}`)
    } else constructor = entityType
    const entity = new constructor()
    ENTITIES.push(entity)
    this.lastEntity = entity
    return entity as InstanceType<T>
  }

  get entityNames() {
    return ENTITIES.map((e) => e.name)
  }

  find(entityName: string) {
    return ENTITIES.find((e) => e.name == entityName)
  }

  remove(entity: PixiEntity) {
    let index = ENTITIES.indexOf(entity)
    if (index !== -1) ENTITIES.splice(index)
    index = root.children.indexOf(entity.base)
    if (index !== -1) root.children[index].destroy()
  }
  delete = this.remove

  reorder(entity: PixiEntity, newIndex: number) {
    let oldIndex = ENTITIES.indexOf(entity)
    if (oldIndex == -1) throw new Error(`Entity not found: ${entity.name}`)
    const indexDelta = newIndex - oldIndex
    moveArrayItem(ENTITIES, oldIndex, newIndex)
    oldIndex = this.root.children.indexOf(entity.base)
    newIndex = oldIndex + indexDelta
    moveArrayItem(this.root.children, oldIndex, newIndex)
  }

  save = () => entityStorage.save()
  backup = () => entityStorage.backup()
  restore = () => this._loadEntities(entityStorage.restore())

  revert() {
    entityStorage.revert()
    location.reload()
  }

  removeLastEntity() {
    if (!this.lastEntity) return
    this.remove(this.lastEntity)
  }
  deleteLastEntity = this.removeLastEntity

  private _loadEntities(items: EntityData[]) {
    items.forEach((i) => {
      const entity = this.add(i.type)
      entity.id = i.id
      entity.name = i.name
      setAttrs(entity, i.attrs)
    })
  }
}
