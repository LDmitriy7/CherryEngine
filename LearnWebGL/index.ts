import { Buffers } from "./buffers"
import { gl } from "./loader"
import { drawScene } from "./scene"
import { shaderProgramInfo } from "./shaderProgram"
import { createTexture } from "./textures"

const buffers = new Buffers(gl)
// const texture = createTexture(gl, "cubetexture.png")
const texture = createTexture(gl, "bg.jpg")

function update(cameraRotation: number) {
  drawScene(
    gl,
    shaderProgramInfo,
    buffers,
    cameraRotation,
    textureOffset,
    texture
  )
}

function loop(callback: (dt: number) => void) {
  let lastTime = 0
  function _loop(timeMS: number) {
    requestAnimationFrame(_loop)
    const time = timeMS * 0.001
    const deltaTime = time - lastTime
    lastTime = time
    callback(deltaTime)
  }
  _loop(0)
}

let rotation = 0
let textureOffset = 0
const rotationSpeed = 5

loop((dt) => {
  update(rotation)
  rotation += dt * rotationSpeed
  textureOffset += dt * 0.1
})
