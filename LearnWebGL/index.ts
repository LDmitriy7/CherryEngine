import { Buffers } from "./buffers"
import { gl } from "./loader"
import { drawScene } from "./scene"
import { shaderProgramInfo } from "./shaderProgram"

function update(cameraRotation: number) {
  const buffers = new Buffers(gl)
  drawScene(gl, shaderProgramInfo, buffers, cameraRotation)
}

function loop(update: (dt: number) => void) {
  let lastTime = 0
  function _loop(timeMS: number) {
    requestAnimationFrame(_loop)
    const time = timeMS * 0.001
    const deltaTime = time - lastTime
    lastTime = time
    update(deltaTime)
  }
  _loop(0)
}

let rotation = 0
const rotationSpeed = 25

loop((dt) => {
  rotation += dt * rotationSpeed
  update(rotation)
})
