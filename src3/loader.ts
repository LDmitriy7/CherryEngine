import * as cherry from "./cherry"

export type AssetId = "bg"

const game = cherry.createPixiGame<AssetId>()
// const game = new cherry.PixiGame<AssetId>()

export { game }
