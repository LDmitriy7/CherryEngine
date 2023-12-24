import { assets, scene } from "../engine"
import * as PIXI from "pixi.js"
import { root } from "../engine/scene"
import { Attrs, attr, getAttrs, setAttrs } from "../editor/attr"
import { Entity } from "../editor"

assets.add("square", "square.png")

const KEY_ENTITIES = "__entities__"

enum AssetIds {
  square = "square",
}

class ImageEntity extends Entity<PIXI.Sprite> {
  type = "image"
  private _texture: string = AssetIds.square

  constructor() {
    super(scene.addImage(AssetIds.square))
    this.tint = "white"
  }

  @attr
  set texture(assetId: string | number) {
    assetId = assetId.toString()
    this._texture = assetId
    const texture = PIXI.Assets.get(assetId)
    this.base.texture = texture
  }
  get texture() {
    return this._texture
  }

  @attr
  set tint(value: string) {
    this.base.tint = value
  }
  get tint() {
    return this.base.tint.toString()
  }
}

class LabelEntity extends Entity<PIXI.Text> {
  type = "label"

  constructor() {
    super(scene.addLabel("text"))
  }

  @attr
  set color(value: string) {
    this.base.style.fill = value
  }
  get color() {
    return this.base.style.fill.toString()
  }

  @attr
  set weight(value: PIXI.TextStyleFontWeight) {
    this.base.style.fontWeight = value
  }
  get weight() {
    return this.base.style.fontWeight
  }

  @attr
  set text(value: string) {
    this.base.text = value
  }
  get text() {
    return this.base.text
  }
}

class WhiteBoldLabelEntity extends LabelEntity {
  type = "whiteBoldLabel"

  constructor() {
    super()
    this.weight = "bold"
    this.color = "white"
  }

  @attr
  set fontSize(value: string | number) {
    this.base.style.fontSize = value
  }
  get fontSize() {
    return this.base.style.fontSize
  }
}

const ENTITY_CONSTRUCTORS: Record<string, new () => Entity> = {
  image: ImageEntity,
  label: LabelEntity,
  whiteBoldLabel: WhiteBoldLabelEntity,
}

type EntityData = { type: string; name?: string; attrs: Attrs }

const ENTITIES: Entity[] = []

function saveEntities() {
  const items: EntityData[] = ENTITIES.map((e) => ({
    type: e.type,
    attrs: getAttrs(e),
    name: e.name,
  }))
  localStorage[KEY_ENTITIES] = JSON.stringify(items)
}

function loadEntities() {
  const data = localStorage[KEY_ENTITIES]
  if (!data) return
  const items = JSON.parse(data) as EntityData[]
  items.forEach((i) => {
    const entity = editor.add(i.type)
    entity.name = i.name
    setAttrs(entity, i.attrs)
  })
}

function findEntity(name: string) {
  return ENTITIES.find((e) => e.name == name)
}

function moveArrayItem<T>(array: T[], oldIndex: number, newIndex: number) {
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0])
}

class Editor {
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
    loadEntities()
  }
}

export const editor = new Editor()

Object.assign(window, {
  PIXI,
  ENTITIES,
  editor,
  findEntity,
})
