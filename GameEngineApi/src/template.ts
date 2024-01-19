import * as API from "./index"

export class GameObject implements API.GameObject {
  x = 0
  y = 0

  addChild(obj: GameObject) {
    throw new Error("Method not implemented.")
  }
}

export class Game implements API.Game {
  scene = new GameObject()

  start() {
    throw new Error("Method not implemented.")
  }
}

export class RoundedRect extends GameObject implements API.RoundedRect {}

export class Texture implements API.Texture {
  offset = { x: 0, y: 0 }
  constructor(public src: string) {}
}

export class Sprite extends GameObject implements API.Sprite {
  texture = new Texture("default.png")
}
