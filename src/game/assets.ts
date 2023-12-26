import { AssetIds } from "./assetIds"
import { ENGINE } from "../editor/entities/_engine"

const assets = ENGINE.assets

assets.add(AssetIds.bg, "bg.jpg")
assets.add(AssetIds.panel, "panel.png")
assets.add(AssetIds.contact, "contact.png")
assets.add(AssetIds.phone, "phone.png")
