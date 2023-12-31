import * as PIXI from "pixi.js"
import { moveArrayItem } from "../lib"
import { PixiAssets } from "../../engine/assets"

abstract class Engine {
  abstract addImage(assetId: string | number, scale: number): unknown
  abstract addLabel(text: string, color: string): unknown
  abstract destroy(entity: unknown): void
  abstract reorder(entity: unknown, newIndex: number): void
}

// class EngineEntity<T> {
//   constructor(public base: T) {}
// }
// class Image extends EngineEntity {}

export class PixiEngine extends Engine {
  assets = new PixiAssets()

  // TODO:
  reorder(entity: any, newIndex: number): void {
    const oldIndex = this.root.children.indexOf(entity.base)
    moveArrayItem(this.root.children, oldIndex, newIndex)
  }

  // TODO:
  destroy(entity: any): void {
    const root = this.root
    const children = root.children
    const index = children.indexOf(entity.base)
    console.log({ children, e: entity.base })
    if (index !== -1) children[index].destroy()
  }

  root: PIXI.Container
  app: PIXI.Application

  constructor() {
    super()
    const app = new PIXI.Application({
      resizeTo: window,
      antialias: true,
      resolution: window.devicePixelRatio,
    })
    const root = new PIXI.Container()
    this.app = app
    this.root = root
    this.updateRoot()
    window.addEventListener("resize", this.updateRoot)
    app.stage.addChild(root)
    document.body.appendChild(app.view as unknown as Node)
  }

  private updateRoot = () => {
    const app = this.app
    const root = this.root
    app.resize()
    root.x = app.screen.width / 2
    root.y = app.screen.height / 2
    root.scale.set(app.screen.height / 720)
  }

  addImage(assetId: string | number, scale = 1) {
    assetId = assetId.toString()
    const texture = PIXI.Assets.get(assetId)
    const sprite = PIXI.Sprite.from(texture)
    sprite.anchor.set(0.5)
    sprite.scale.set(scale)
    this.root.addChild(sprite)
    return sprite
  }

  addLabel(text: string, color = "black") {
    const label = new PIXI.Text(text, { fill: color })
    label.anchor.set(0.5)
    this.root.addChild(label)
    return label
  }
}

// export const ENGINE = new PixiEngine()
