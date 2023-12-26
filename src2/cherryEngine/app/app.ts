export abstract class App {
  abstract addImage(): any
  abstract start(load: () => void): void
  abstract setImageTint(base: unknown, value: string): void
  abstract setScale(base: unknown, value: number): void
  abstract addAsset(id: string, src: string): void
  abstract setTexture(base: unknown, assetId: string): void
}
