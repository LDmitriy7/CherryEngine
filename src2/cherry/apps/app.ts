export abstract class App {
  abstract setX(base: unknown, value: number): void
  abstract setY(base: unknown, value: number): void
  abstract setLabelColor(base: unknown, value: string): void
  abstract addLabel(): any
  abstract addImage(): any
  abstract start(load: () => void): void
  abstract setImageTint(base: unknown, value: string): void
  abstract setScale(base: unknown, value: number): void
  abstract addAsset(id: string, src: string): void
  abstract setTexture(base: unknown, assetId: string): void
  abstract setText(base: unknown, value: string): void
  abstract setFontWeight(base: unknown, value: string): void
}
