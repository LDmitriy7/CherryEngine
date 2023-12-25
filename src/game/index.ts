import { assets, scene } from "../engine"
import "./temp"
import { editor } from "./temp"
import "./entities"
import { AssetIds } from "./assetIds"

assets.add(AssetIds.bg, "bg.jpg")
assets.add(AssetIds.panel, "panel.png")
assets.add(AssetIds.contact, "contact.png")
assets.add(AssetIds.phone, "phone.png")

function main() {
  editor.restore()
  setInterval(() => editor.backup(), 3000)
}

// function createContact() {
//   scene.addImage(AssetIds.contact, 0.26)
// }

scene.play(main)

Object.assign(window, { AssetIds })
