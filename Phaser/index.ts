import Phaser from "phaser"

const width = 1280
const height = 720

class Scene extends Phaser.Scene {
  preload() {
    this.load.image("_rect", "rect2.png")
    this.load.image("bg", "rect.png")
  }

  create() {
    const image = this.add.image(width / 2, height / 2, "bg")

    image.scale = 0.2
    // image.scale = 1.5
    // image.width = 1000
    // image.scale = 1
  }
}

// {
//   "mipLevel": 0,
//   "minFilter": 9987,
//   "magFilter": 9729,
//   "wrapT": 10497,
//   "wrapS": 10497,
//   "format": 6408,
//   "pixels": {}
// }

// {
//   "mipLevel": 0,
//   "minFilter": 9987,
//   "magFilter": 9729,
//   "wrapT": 10497,
//   "wrapS": 10497,
//   "format": 6408,
//   "pixels": {}
// }

const canvas = document.createElement("canvas")
document.body.appendChild(canvas)
const gl = canvas.getContext("webgl2") as any

var config: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  width,
  height,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  render: {
    antialias: true,
    mipmapFilter: "LINEAR_MIPMAP_LINEAR",
  },
  scene: [Scene],
  canvas,
  context: gl,
}

var game = new Phaser.Game(config)

function patchRenderer(game: Phaser.Game) {
  const key = "createTexture2D"
  function createTexture2D(
    mipLevel,
    minFilter,
    magFilter,
    wrapT,
    wrapS,
    format,
    pixels,
    width,
    height,
    pma,
    forceSize,
    flipY
  ) {
    console.log({
      mipLevel,
      minFilter,
      magFilter,
      wrapT,
      wrapS,
      format,
      pixels,
      width,
      height,
      pma,
      forceSize,
      flipY,
    })
    minFilter = 9987

    pma = pma === undefined || pma === null ? true : pma
    if (forceSize === undefined) {
      forceSize = false
    }
    if (flipY === undefined) {
      flipY = false
    }

    var gl = this.gl
    var texture = gl.createTexture()

    gl.activeTexture(gl.TEXTURE0)

    var currentTexture = gl.getParameter(gl.TEXTURE_BINDING_2D)

    gl.bindTexture(gl.TEXTURE_2D, texture)

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT)

    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, pma)
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY)

    if (pixels === null || pixels === undefined) {
      gl.texImage2D(
        gl.TEXTURE_2D,
        mipLevel,
        format,
        width,
        height,
        0,
        format,
        gl.UNSIGNED_BYTE,
        null
      )
    } else {
      if (!forceSize) {
        width = pixels.width
        height = pixels.height
      }

      gl.texImage2D(
        gl.TEXTURE_2D,
        mipLevel,
        format,
        format,
        gl.UNSIGNED_BYTE,
        pixels
      )
    }

    // if (IsSizePowerOfTwo(width, height)) {
    gl.generateMipmap(gl.TEXTURE_2D)
    // }

    if (currentTexture) {
      gl.bindTexture(gl.TEXTURE_2D, currentTexture)
    }

    texture.isAlphaPremultiplied = pma
    texture.isRenderTexture = false
    texture.width = width
    texture.height = height
    texture.glIndex = 0
    texture.glIndexCounter = -1

    return texture
  }
  game.renderer[key] = createTexture2D.bind(game.renderer)
}

patchRenderer(game)
