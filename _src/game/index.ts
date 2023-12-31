import { scene } from "../engine"
import "./temp"
import { editor } from "./temp"
import "./entities"
import { AssetIds } from "./assetIds"
import "./assets"

function main() {
  editor.restore()
  setInterval(() => editor.backup(), 3000)
}

// function createContact() {
//   scene.addImage(AssetIds.contact, 0.26)
// }

scene.play(main)

Object.assign(window, { AssetIds })
