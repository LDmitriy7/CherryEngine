import { WebGL2Renderer } from "./renderer"

export function createGame(config: Phaser.Types.Core.GameConfig) {
  if (!config.canvas) {
    const canvas = document.createElement("canvas")
    document.body.appendChild(canvas)
    config.canvas = canvas
  }

  if (config.context) throw new Error("Custom context not supported")

  const gl = config.canvas.getContext("webgl2")
  if (!gl) throw new Error("WebGL2 not supported")
  config.context = gl as any
  config.type = Phaser.WEBGL

  if (!config.render) config.render = {}
  if (!config.render.mipmapFilter)
    config.render.mipmapFilter = "LINEAR_MIPMAP_LINEAR"

  // TODO: create renderer in game
  const game = new Phaser.Game(config)
  const renderer = new WebGL2Renderer(game)
  game.renderer = renderer
  return game
}
