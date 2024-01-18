import { Root } from "./entities"
import { Context } from "./lib"

export function loop(callback: (deltaTime: number) => void) {
  let lastTime = 0
  function _loop(time: number) {
    requestAnimationFrame(_loop)
    const deltaTime = (time - lastTime) / 1000
    callback(deltaTime)
    lastTime = time
  }
  _loop(0)
}

export function startRenderLoop(ctx: Context, root: Root) {
  loop(() => {
    ctx.clearRect(0, 0, root.width, root.height)
    root.render(ctx)
  })
}
