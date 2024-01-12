import { repeat } from "./cherry/lib"
import { game } from "./loader"

function addAssets() {
  const { assets } = game
  assets.add("bg", "bg.jpg")
  assets.add("phone", "phone.png")
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
  const maxWidth = 370
  const contact = game.addRoundedRect()
  contact.name = "contact"
  contact.width = maxWidth
  contact.height = 80
  contact.radius = 50
  contact.color = "#428fd9"
  const circle = addContactCircle()
  const maxCircleX = circle.x
  circle.parent = contact
  const label = game.addLabel()
  label.parent = contact
  label.color = "white"
  label.text = `Котик ${num}`

  contact.base.pivot.x = 0

  function resize(size: { width: number; height: number }) {
    const ratio = size.width / size.height
    const _width = maxWidth * ratio * 1.8
    contact.width = Math.min(maxWidth, _width)
    const _circleX = contact.width / 2 - 45
    // circle.x = Math.min(maxCircleX, (maxCircleX * _width) / maxWidth)
    circle.x =_circleX
  }

  resize(game.app.base.screen)
  game.onResize(resize)

  return contact
}

function addContactCircle() {
  const circle = game.addCircleWithBorder()
  circle.radius = 35
  circle.borderRadius = 3
  circle.innerCircle.color = "#59f487"
  circle.x = 140
  circle.doScaleOnPointerEnter()
  const phone = game.addImage()
  phone.texture = "phone"
  phone.parent = circle
  phone.scale = 0.15
  phone.y = -1
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
