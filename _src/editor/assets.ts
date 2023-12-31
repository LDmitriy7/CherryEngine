import { ENGINE } from "./entities/_engine"

export enum AssetIds {
  square = "square",
}

ENGINE.assets.add(AssetIds.square, "square.png")
