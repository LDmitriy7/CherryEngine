import { repeat } from "./cherry/lib"
import { game } from "./loader"

function addAssets() {
  const { assets } = game
  assets.add("bg", "bg.jpg")
}

function addBg() {
  const bg = game.addImage()
  bg.texture = "bg"
  bg.scale = 0.7
  bg.tint = "lightgrey"
  bg.name = "bg"
}

function addPanel() {
  const rect = game.addRoundedRect()
  rect.color = "black"
  rect.width = 400
  rect.height = 700
  rect.radius = 30
  rect.name = "panel"
}

function addLabel() {
  const label = game.addLabel()
  label.color = "ffffff"
  label.y = 320
  label.text = "МОИ КОНТАКТЫ"
  label.weight = "bolder"
}

function addContact(num: number) {
  const contact = game.addRoundedRect()
  contact.name = "contact"
  contact.width = 370
  contact.height = 80
  contact.radius = 50
  contact.color = "#428fd9"
  const circle = addContactCircle()
  circle.parent = contact
  const label = game.addLabel()
  label.parent = contact
  label.color = "white"
  label.text = `Котик ${num}`
  return contact
}

function addContactCircle() {
  const circle = game.addCircleWithBorder()
  circle.radius = 35
  circle.borderRadius = 3
  circle.innerCircle.color = "#59f487"
  circle.x = 140
  circle.doScaleOnPointerEnter()
  return circle
}

function addContacts(count = 6) {
  const contacts = game.addContainer()
  contacts.name = "contacts"
  let y = 240
  repeat(count, (index) => {
    const contact = addContact(index + 1)
    contact.y = y
    y -= 90
    contact.parent = contacts
  })
}

function init() {
  addBg()
  addPanel()
  addLabel()
  addContacts()
}

addAssets()
game.play(init)
