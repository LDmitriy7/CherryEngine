import { scene } from "./scene"

type SceneDataItem = { type: string; args: any[]; x: number; y: number }
type SceneData = SceneDataItem[]

export function loadScene(data: SceneData) {
  return data.map(loadSceneItem)
}

function loadSceneItem(item: SceneDataItem) {
  if (item.type != "image") throw new Error("not implemented")
  const image = scene.addImage(item.args[0], item.args[1])
  image.x = item.x
  image.y = item.y
  return image
}
