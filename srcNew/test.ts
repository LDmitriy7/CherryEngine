import * as PIXI from "pixi.js"

const app = new PIXI.Application({
  resizeTo: window,
  antialias: true,
  resolution: window.devicePixelRatio,
})

document.body.appendChild(app.view)

// create a texture from an image path
// const texture = PIXI.Texture.from('https://pixijs.com/assets/p2.jpeg');
// const texture = PIXI.Texture.from("bg.jpg")
const texture = PIXI.Texture.from("b.png")

/* create a tiling sprite ...
 * requires a texture, a width and a height
 * in WebGL the image size should preferably be a power of two
 */
const tilingSprite = new PIXI.TilingSprite(
  texture,
  512,
  512
  // app.screen.width,
  // app.screen.height
)

console.log(app.screen.width)
console.log(app.screen.height)

app.stage.addChild(tilingSprite)

const speed = 0.1

tilingSprite.scale.set(2)
// tilingSprite.anchor.set(0.5)

app.ticker.add(() => {
  // tilingSprite.tilePosition.x += speed
  tilingSprite.x += speed
})

app.stage.addChild(new PIXI.Text(JSON.stringify([screen.width, screen.height])))
