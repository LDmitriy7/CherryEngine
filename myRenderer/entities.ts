import { Bricks, LivesLabel, ScoreLabel } from "./prefabs"
import { Circle, Rect } from "./renderer/entity"
import { CTX, canvas } from "./lib"

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

const bricks = new Bricks(CTX)
bricks.init()

const scoreLabel = new ScoreLabel(CTX)
scoreLabel.x = 8
scoreLabel.y = 20

const livesLabel = new LivesLabel(CTX)
livesLabel.x = canvas.width - 65
livesLabel.y = 20

export { ball, paddle, bricks, scoreLabel, livesLabel }
