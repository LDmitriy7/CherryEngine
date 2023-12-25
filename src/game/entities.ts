import { ContainerEntity, ImageEntity } from "../editor/entities"
import { entity } from "../editor/entities/entity"
import { AssetIds } from "./assetIds"

@entity()
export class ContactEntity extends ImageEntity {
  constructor() {
    super()
    this.texture = AssetIds.contact
    this.scale = 0.26
    const phone = this.createChild(PhoneEntity)
    phone.x = 500
  }
}

@entity()
export class PhoneEntity extends ImageEntity {
  constructor() {
    super()
    this.texture = AssetIds.phone
    this.scale = 0.8
  }
}

@entity()
export class ContactsEntity extends ContainerEntity {
  constructor() {
    super()
    let y = 0
    let contact: ContactEntity
    for (let i = 0; i < 6; i++) {
      contact = this.createChild(ContactEntity)
      contact.y = y
      y += 73
    }
  }
}
