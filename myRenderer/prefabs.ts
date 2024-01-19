import {
  brickColumnCount,
  brickOffsetLeft,
  brickOffsetTop,
  brickPadding,
  brickRowCount,
  stats,
} from "./lib"
import { Entity, Label, Rect } from "./renderer/entity"

class Brick extends Rect {
  status: 0 | 1 = 1
  width = 75
  height = 20
}

export class Bricks extends Entity {
  bricks: Brick[][] = []

  init() {
    const { bricks } = this
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = []
      for (let r = 0; r < brickRowCount; r++) {
        const brick = new Brick(this.ctx)
        brick.color = "#0095DD"
        bricks[c][r] = brick
      }
    }
  }

  draw() {
    const { bricks } = this
    for (let column = 0; column < brickColumnCount; column++) {
      for (let row = 0; row < brickRowCount; row++) {
        if (bricks[column][row].status == 1) {
          const brick = bricks[column][row]
          brick.x = row * (brick.width + brickPadding) + brickOffsetLeft
          brick.y = column * (brick.height + brickPadding) + brickOffsetTop
          brick.draw()
        }
      }
    }
  }
}

export class ScoreLabel extends Label {
  color = "#0095DD"

  draw() {
    this.text = "Score: " + stats.score
    super.draw()
  }
}

export class LivesLabel extends Label {
  color = "#0095DD"

  draw() {
    this.text = "Lives: " + stats.lives
    super.draw()
  }
}
