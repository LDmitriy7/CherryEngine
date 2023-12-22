import Phaser from "phaser"

function createConfig(scene: typeof Phaser.Scene, width = 1280, height = 720) {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: "app",
    width,
    height,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 },
      },
    },
    scene: [scene],
    antialias: true,
  }
  return config
}

export function createGame(scene: typeof Phaser.Scene) {
  const game = new Phaser.Game(createConfig(scene))
  return game
}
