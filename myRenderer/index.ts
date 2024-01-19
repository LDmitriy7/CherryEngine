import { brickColumnCount, brickRowCount, canvas, ctx, stats } from "./lib"
import {
  getMousePosition,
  onKeyDown,
  onKeyUp,
  onMouseMove,
  run,
} from "./renderer"
import { paddle, bricks, ball, scoreLabel, livesLabel } from "./entities"

let dx = 2
let dy = -2

let rightPressed = false
let leftPressed = false
const brickCount = brickRowCount * brickColumnCount

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
      const brick = bricks.bricks[c][r]
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
  stats.score++
  if (stats.score == brickCount) {
    alert("YOU WIN, CONGRATS!")
    document.location.reload()
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  bricks.draw()
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
      stats.lives--
      if (!stats.lives) {
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
