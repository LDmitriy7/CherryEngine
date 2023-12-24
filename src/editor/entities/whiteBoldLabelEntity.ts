import { entity } from "./entity"
import { LabelEntity } from "./labelEntity"

@entity()
export class WhiteBoldLabelEntity extends LabelEntity {
  constructor() {
    super()
    this.weight = "bold"
    this.color = "white"
  }
}
