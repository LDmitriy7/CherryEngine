import {
  createApp,
  getMousePosition,
  onKeyDown,
  onKeyUp,
  onMouseMove,
  run,
} from "./renderer"
import { CanvasContext } from "./renderer/canvasContext"
import { Circle, Entity, Label, Rect } from "./renderer/entity"

class Brick extends Rect {
  status: 0 | 1 = 1
  width = 75
  height = 20
}

class Bricks extends Entity {
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
}

class ScoreLabel extends Label {
  color = "#0095DD"

  draw() {
    this.text = "Score: " + score
    super.draw()
  }
}

class LivesLabel extends Label {
  color = "#0095DD"

  draw() {
    this.text = "Lives: " + lives
    super.draw()
  }
}

const { canvas, ctx } = createApp()
const CTX = new CanvasContext(ctx)
canvas.height = 320
canvas.width = 480

let dx = 2
let dy = -2

const ball = new Circle(CTX)
ball.radius = 10
ball.color = "#0095DD"
ball.x = canvas.width / 2
ball.y = canvas.height - 30

// moving platform
const paddle = new Rect(CTX)
paddle.x = (canvas.width - paddle.width) / 2
paddle.y = canvas.height - paddle.height
paddle.width = 75
paddle.height = 10
paddle.color = "#0095DD"

let rightPressed = false
let leftPressed = false
const brickRowCount = 5
const brickColumnCount = 3
const brickCount = brickRowCount * brickColumnCount
const brickPadding = 10
const brickOffsetTop = 30
const brickOffsetLeft = 30
let score = 0
let lives = 3

const _bricks = new Bricks(CTX)
_bricks.init()
const bricks = _bricks.bricks

onKeyDown(() => (leftPressed = true), "left")
onKeyUp(() => (leftPressed = false), "left")
onKeyDown(() => (rightPressed = true), "right")
onKeyUp(() => (rightPressed = false), "right")
onMouseMove(mouseMoveHandler)

function mouseMoveHandler(e: MouseEvent) {
  const mouseX = getMousePosition(e, canvas).x
  if (mouseX > 0 && mouseX < canvas.width) {
    paddle.x = mouseX - paddle.width / 2
  }
}

function getCollision() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const brick = bricks[c][r]
      if (brick.status != 1) continue
      if (
        ball.x > brick.x &&
        ball.x < brick.x + brick.width &&
        ball.y > brick.y &&
        ball.y < brick.y + brick.height
      )
        return brick
    }
  }
}

function handleCollisions() {
  const brick = getCollision()
  if (!brick) return
  dy = -dy
  brick.status = 0
  score++
  if (score == brickCount) {
    alert("YOU WIN, CONGRATS!")
    document.location.reload()
  }
}

function drawBricks() {
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

const scoreLabel = new ScoreLabel(CTX)
scoreLabel.x = 8
scoreLabel.y = 20

const livesLabel = new LivesLabel(CTX)
livesLabel.x = canvas.width - 65
livesLabel.y = 20

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBricks()
  ball.draw()
  paddle.draw()
  scoreLabel.draw()
  livesLabel.draw()
  handleCollisions()

  if (ball.x + dx > canvas.width - ball.radius || ball.x + dx < ball.radius) {
    dx = -dx
  }
  if (ball.y + dy < ball.radius) {
    dy = -dy
  } else if (ball.y + dy > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      dy = -dy
    } else {
      lives--
      if (!lives) {
        alert("GAME OVER")
        document.location.reload()
      } else {
        ball.x = canvas.width / 2
        ball.y = canvas.height - 30
        dx = 3
        dy = -3
        paddle.x = (canvas.width - paddle.width) / 2
      }
    }
  }

  if (rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.x += 7
  } else if (leftPressed && paddle.x > 0) {
    paddle.x -= 7
  }

  ball.x += dx
  ball.y += dy
}

run(draw)
