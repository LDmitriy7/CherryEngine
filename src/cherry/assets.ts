export interface Assets<AssetId extends string> {
  add(id: AssetId, src: string): void
  load(): Promise<any>
}

export enum DefaultAssetIds {
  square = "_square",
}
