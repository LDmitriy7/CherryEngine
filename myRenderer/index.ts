import { brickColumnCount, brickRowCount, canvas, ctx, stats } from "./lib"
import { run } from "./renderer"
import { paddle, bricks, ball, scoreLabel, livesLabel } from "./entities"
import { Input } from "./renderer/input"

let dx = 2
let dy = -2

const input = new Input(canvas)
const brickCount = brickRowCount * brickColumnCount

input.onMouseMove((pos) => {
  if (pos.x > 0 && pos.x < canvas.width) {
    paddle.x = pos.x - paddle.width / 2
  }
})

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
      if (!stats.lives) gameover()
      ball.x = canvas.width / 2
      ball.y = canvas.height - 30
      dx = 3
      dy = -3
      paddle.x = (canvas.width - paddle.width) / 2
    }
  }

  if (input.isPressed("right") && paddle.x < canvas.width - paddle.width) {
    paddle.x += 7
  } else if (input.isPressed("left") && paddle.x > 0) {
    paddle.x -= 7
  }

  ball.x += dx
  ball.y += dy
}

function gameover() {
  alert("GAME OVER")
  document.location.reload()
}

run(draw)
