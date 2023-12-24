import { LabelEntity } from "./labelEntity"

export class WhiteBoldLabelEntity extends LabelEntity {
  type = "whiteBoldLabel"

  constructor() {
    super()
    this.weight = "bold"
    this.color = "white"
  }
}
