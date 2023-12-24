import { assets } from "../engine"

export enum AssetIds {
  square = "square",
}

assets.add(AssetIds.square, "square.png")
