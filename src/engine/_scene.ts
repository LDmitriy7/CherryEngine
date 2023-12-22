export class Scene extends Phaser.Scene {
  root!: Phaser.GameObjects.Container

  constructor() {
    super("scene")
  }

  preload() {
    const config = this.game.config
    this.root = this.add.container(
      Number(config.width) / 2,
      Number(config.height) / 2
    )
  }

  addImage(texture: string, scale = 1) {
    const image = this.add.image(0, 0, texture)
    this.root.add(image)
    image.scale = scale
    return image
  }
}
