import { assets, scene } from "../engine"
import * as PIXI from "pixi.js"

assets.add("square", "square.png")

const KEY_ATTRS = "__attrs__"

function attr(constructor: unknown, context: unknown) {
  if (typeof context != "string")
    throw new Error(`Invalid attribute: ${context}`)
  const _name = context as string
  const _constructor = constructor as { [KEY_ATTRS]: string[] }
  if (!Object.hasOwn(_constructor, KEY_ATTRS)) {
    const parentAttrs = _constructor[KEY_ATTRS] ?? []
    _constructor[KEY_ATTRS] = parentAttrs.slice()
  }
  _constructor[KEY_ATTRS].push(_name)
}

class Entity<T extends PIXI.DisplayObject = PIXI.DisplayObject> {
  static __attrs__: string[]

  constructor(public base: T) {}

  @attr
  get x() {
    return this.base.x
  }
  set x(value) {
    this.base.x = value
  }

  @attr
  get y() {
    return this.base.y
  }
  set y(value) {
    this.base.y = value
  }

  @attr
  get scale() {
    return this.base.scale.x
  }
  set scale(value: number) {
    this.base.scale.set(value)
  }
}

class ImageEntity extends Entity<PIXI.Sprite> {
  constructor() {
    super(scene.addImage("square"))
  }

  @attr
  set texture(assetId: string) {
    const texture = PIXI.Assets.get(assetId)
    this.base.texture = texture
  }
}

const ENTITY_CONSTRUCTORS: Record<string, new () => Entity> = {
  image: ImageEntity,
}

class Editor {
  add(entityType: string) {
    const constructor = ENTITY_CONSTRUCTORS[entityType]
    if (!constructor) throw new Error(`Unknown entity type: ${entityType}`)
    return new constructor()
  }
}

const _window = window as any
_window.editor = new Editor()
_window.PIXI = PIXI
