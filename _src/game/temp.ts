import * as PIXI from "pixi.js"
import { ENTITIES, Editor } from "../editor"

export const editor = new Editor()

Object.assign(window, {
  PIXI,
  ENTITIES,
  editor,
})
