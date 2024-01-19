export interface Game {
  scene: GameObject
  start(): void
}

export interface Vec2 {
  x: number
  y: number
}

export interface Texture {
  src: string
  offset: Vec2
}

export interface GameObject {
  x: number
  y: number
  addChild(obj: GameObject): void
}

export interface Sprite extends GameObject {
  texture: Texture
}

export interface RoundedRect extends GameObject {}
