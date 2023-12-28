import * as cherry from "../cherry"

type AssetId = "bg" | "panel"
export const Image = cherry.Image<AssetId>
export const Label = cherry.Label

const app = new cherry.PixiApp()
// const app = new cherry.PhaserApp()
export const game = new cherry.Game<AssetId>(app)
