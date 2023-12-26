import * as Phaser from "phaser"
import { App } from "./app"
import { expose } from "../lib"

type AssetData = { id: string; src: string }
const ASSETS_DATA: AssetData[] = []

export class PhaserApp extends App {
  setTexture(base: Phaser.GameObjects.Image, assetId: string): void {
    base.setTexture(assetId)
  }
  addAsset(id: string, src: string): void {
    ASSETS_DATA.push({ id, src })
  }
  // TODO: may be not image
  setScale(base: Phaser.GameObjects.Image, value: number): void {
    base.scale = value
  }
  constructor() {
    super()
    const app = new Phaser.Game(config)
    expose({ __PHASER_GAME__: app })
  }

  addImage() {
    return PHASER_SCENE.addImage()
  }

  start(load: () => void): void {
    setTimeout(load, 500) // TODO: !
  }

  setImageTint(base: Phaser.GameObjects.Image, value: string) {
    base.tint = Number(`0x${value}`)
  }
}

class Scene extends Phaser.Scene {
  root: Phaser.GameObjects.Container

  addImage() {
    const image = PHASER_SCENE.add.image(0, 0, "square")
    this.root.add(image)
    return image
  }

  create() {
    const root = this.add.container(0, 0)
    this.root = root

    function resize(width: number, height: number) {
      root.x = width / 2
      root.y = height / 2
      root.scale = height / 720
    }

    resize(window.innerWidth, window.innerHeight)

    window.addEventListener("resize", () =>
      resize(window.innerWidth, window.innerHeight)
    )
  }

  preload(this: Phaser.Scene) {
    this.load.image("square", "square.png")
    ASSETS_DATA.forEach(({ id, src }) => this.load.image(id, src))
  }
}

export const PHASER_SCENE = new Scene({})

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: { mode: Phaser.Scale.RESIZE },
  scene: PHASER_SCENE,
}

// function update() {}
