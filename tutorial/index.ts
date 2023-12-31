const canvas = document.getElementById("myCanvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

let x = canvas.width / 2
let y = canvas.height - 30
let dx = 2 * 2
let dy = -2 * 2
const ballRadius = 10

function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
  ctx.fillStyle = "#0095DD"
  ctx.fill()
  ctx.closePath()
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall()
  updateDir()
  x += dx
  y += dy
}

function updateDir() {
  const nextX = x + dx
  const nextY = y + dy
  const maxX = canvas.width - ballRadius
  const maxY = canvas.height - ballRadius
  if (nextX < ballRadius || nextX > maxX) dx = -dx
  if (nextY < ballRadius || nextY > maxY) dy = -dy
}

function loop() {
  requestAnimationFrame(loop)
  draw()
}

loop()
