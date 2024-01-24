import Phaser from "phaser"

// TODO: check context
// TODO: fallback for webgl1

// Phaser version: 3.70.0
export class WebGL2Renderer extends Phaser.Renderer.WebGL.WebGLRenderer {
  createTextureFromSource(
    source: any,
    width: number,
    height: number,
    scaleMode: number,
    forceClamp?: boolean
  ): WebGLTexture | null {
    if (forceClamp === undefined) {
      forceClamp = false
    }

    var gl = this.gl
    var minFilter: number = gl.NEAREST
    var magFilter: number = gl.NEAREST
    var wrap: number = gl.CLAMP_TO_EDGE
    var texture: WebGLTexture | null = null

    width = source ? source.width : width
    height = source ? source.height : height

    var pow = true // patched

    if (pow && !forceClamp) {
      wrap = gl.REPEAT
    }

    if (scaleMode === Phaser.ScaleModes.LINEAR && this.config["antialias"]) {
      minFilter = pow && this.mipmapFilter ? this.mipmapFilter : gl.LINEAR
      magFilter = gl.LINEAR
    }

    if (source && source.compressed) {
      //  If you don't set minFilter to LINEAR then the compressed textures don't work!
      minFilter = gl.LINEAR
      magFilter = gl.LINEAR
    }

    if (!source && typeof width === "number" && typeof height === "number") {
      texture = this.createTexture2D(
        0,
        minFilter,
        magFilter,
        wrap,
        wrap,
        gl.RGBA,
        null,
        width,
        height
      )
    } else {
      texture = this.createTexture2D(
        0,
        minFilter,
        magFilter,
        wrap,
        wrap,
        gl.RGBA,
        source
      )
    }

    return texture
  }

  createTexture2D(
    mipLevel: number,
    minFilter: number,
    magFilter: number,
    wrapT: number,
    wrapS: number,
    format: number,
    pixels: any,
    width?: number,
    height?: number,
    pma?: boolean | undefined,
    forceSize?: boolean | undefined,
    flipY?: boolean | undefined
  ): WebGLTexture {
    var gl = this.gl

    pma = pma === undefined || pma === null ? true : pma
    if (forceSize === undefined) {
      forceSize = false
    }
    if (flipY === undefined) {
      flipY = false
    }

    var texture = gl.createTexture() as any

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
        width!,
        height!,
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

    gl.generateMipmap(gl.TEXTURE_2D) // patched

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
}
