import { assets, scene } from "../engine"
import "./temp"
import { editor } from "./temp"

enum AssetIds {
  bg,
  panel,
  contact,
}

assets.add(AssetIds.bg, "bg.jpg")
assets.add(AssetIds.panel, "panel.png")
assets.add(AssetIds.contact, "contact.png")

function main() {
  // scene.addImage(AssetIds.bg, 0.7)
  // const panel = scene.addImage(AssetIds.panel, 0.35)
  // panel.tint = "black"
  // const label = scene.addLabel("МОИ КОНТАКТЫ", "white")
  // label.y = -220
  // label.style.fontWeight = "bold"
  // createContact()
  // loadScene(scene1)
  editor.load()
}

// function createContact() {
//   scene.addImage(AssetIds.contact, 0.26)
// }

scene.play(main)

Object.assign(window, { AssetIds })
