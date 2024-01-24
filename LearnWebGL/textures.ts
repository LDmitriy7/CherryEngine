import { GL } from "./lib"

export function createTexture(gl: GL, url: string) {
  const texture = gl.createTexture()
  if (!texture) throw new Error("Couldn't create texture")
  gl.bindTexture(gl.TEXTURE_2D, texture)
  const level = 0
  const format = gl.RGBA
  const width = 1
  const height = 1
  const srcType = gl.UNSIGNED_BYTE
  const pixels = new Uint8Array([0, 0, 255, 255])
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    format,
    width,
    height,
    0,
    format,
    srcType,
    pixels
  )

  const image = new Image()
  image.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texImage2D(gl.TEXTURE_2D, level, format, format, srcType, image)
    gl.generateMipmap(gl.TEXTURE_2D)
  }

  // TODO: check if POT

  image.src = url
  return texture
}
