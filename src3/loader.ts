import * as cherry from "./cherry"

export type AssetId = "bg"

const game = cherry.createPixiGame<AssetId>()

export { game }
