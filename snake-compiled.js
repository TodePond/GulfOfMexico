// Compiled from GulfOfMexico (cursed mode)
// This might work, probably, maybe

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const GAME_SPEED = 150;
let score = 0;
let gameOver = false;
let direction = "right";
let snake = [{x: 10, y: 10}];
let food = {x: 15, y: 15};
function randomFood() {
   return {;
}
// Cursed line: food = {
try { food = { } catch(e) { console.log("Maybe this works?") }
// Cursed line: x: Math.floor(Math.random() * GRID_SIZE),
try { x: Math.floor(Math.random() * GRID_SIZE), } catch(e) { console.log("Maybe this works?") }
// Cursed line: y: Math.floor(Math.random() * GRID_SIZE)
try { y: Math.floor(Math.random() * GRID_SIZE) } catch(e) { console.log("Maybe this works?") }
}
}
function moveSnake() {
   return {;
}
if (gameOver ) {
// Cursed line: return
try { return } catch(e) { console.log("Maybe this works?") }
}
let head = snake[0];
let newHead = {x: head.x, y: head.y};
if (direction == "up" ) {
// Cursed line: newHead.y = newHead.y - 1
try { newHead.y = newHead.y - 1 } catch(e) { console.log("Maybe this works?") }
}
if (direction == "down" ) {
// Cursed line: newHead.y = newHead.y + 1
try { newHead.y = newHead.y + 1 } catch(e) { console.log("Maybe this works?") }
}
if (direction == "left" ) {
// Cursed line: newHead.x = newHead.x - 1
try { newHead.x = newHead.x - 1 } catch(e) { console.log("Maybe this works?") }
}
if (direction == "right" ) {
// Cursed line: newHead.x = newHead.x + 1
try { newHead.x = newHead.x + 1 } catch(e) { console.log("Maybe this works?") }
}
if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE ) {
// Cursed line: gameOver = true
try { gameOver = true } catch(e) { console.log("Maybe this works?") }
// Cursed line: return
try { return } catch(e) { console.log("Maybe this works?") }
}
let newSnake = [newHead];
let i = 0;
if (i < snake.length ) {
// Cursed line: newSnake.push(snake[i])
try { newSnake.push(snake[i]) } catch(e) { console.log("Maybe this works?") }
// Cursed line: i = i + 1
try { i = i + 1 } catch(e) { console.log("Maybe this works?") }
}
if (newHead.x == food.x && newHead.y == food.y ) {
// Cursed line: score = score + 1
try { score = score + 1 } catch(e) { console.log("Maybe this works?") }
// Cursed line: randomFood()
try { randomFood() } catch(e) { console.log("Maybe this works?") }
// Cursed line: } else {
try { } else { } catch(e) { console.log("Maybe this works?") }
// Cursed line: newSnake.pop()
try { newSnake.pop() } catch(e) { console.log("Maybe this works?") }
}
// Cursed line: snake = newSnake
try { snake = newSnake } catch(e) { console.log("Maybe this works?") }
}
function handleKeyPress(event) {
   return {;
}
let key = event.key;
if (key == "ArrowUp" && direction = "down" ) {
// Cursed line: direction = "up"
try { direction = "up" } catch(e) { console.log("Maybe this works?") }
}
if (key == "ArrowDown" && direction = "up" ) {
// Cursed line: direction = "down"
try { direction = "down" } catch(e) { console.log("Maybe this works?") }
}
if (key == "ArrowLeft" && direction = "right" ) {
// Cursed line: direction = "left"
try { direction = "left" } catch(e) { console.log("Maybe this works?") }
}
if (key == "ArrowRight" && direction = "left" ) {
// Cursed line: direction = "right"
try { direction = "right" } catch(e) { console.log("Maybe this works?") }
}
}
function drawGame(ctx) {
   return {;
}
// Cursed line: ctx.fillStyle = "#000"
try { ctx.fillStyle = "#000" } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE)
try { ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE) } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.fillStyle = "#0f0"
try { ctx.fillStyle = "#0f0" } catch(e) { console.log("Maybe this works?") }
let i = 0;
if (i < snake.length ) {
// Cursed line: ctx.fillRect(snake[i].x * CELL_SIZE, snake[i].y * CELL_SIZE, CELL_SIZE - 2, CELL_SIZE - 2)
try { ctx.fillRect(snake[i].x * CELL_SIZE, snake[i].y * CELL_SIZE, CELL_SIZE - 2, CELL_SIZE - 2) } catch(e) { console.log("Maybe this works?") }
// Cursed line: i = i + 1
try { i = i + 1 } catch(e) { console.log("Maybe this works?") }
}
// Cursed line: ctx.fillStyle = "#f00"
try { ctx.fillStyle = "#f00" } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.fillRect(food.x * CELL_SIZE, food.y * CELL_SIZE, CELL_SIZE - 2, CELL_SIZE - 2)
try { ctx.fillRect(food.x * CELL_SIZE, food.y * CELL_SIZE, CELL_SIZE - 2, CELL_SIZE - 2) } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.fillStyle = "#fff"
try { ctx.fillStyle = "#fff" } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.font = "20px Arial"
try { ctx.font = "20px Arial" } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.fillText("Score: " + score, 10, 25)
try { ctx.fillText("Score: " + score, 10, 25) } catch(e) { console.log("Maybe this works?") }
if (gameOver ) {
// Cursed line: ctx.fillStyle = "#fff"
try { ctx.fillStyle = "#fff" } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.font = "40px Arial"
try { ctx.font = "40px Arial" } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.textAlign = "center"
try { ctx.textAlign = "center" } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.fillText("Game Over!", GRID_SIZE * CELL_SIZE / 2, GRID_SIZE * CELL_SIZE / 2)
try { ctx.fillText("Game Over", GRID_SIZE * CELL_SIZE / 2, GRID_SIZE * CELL_SIZE / 2) } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.font = "20px Arial"
try { ctx.font = "20px Arial" } catch(e) { console.log("Maybe this works?") }
// Cursed line: ctx.fillText("Press R to restart", GRID_SIZE * CELL_SIZE / 2, GRID_SIZE * CELL_SIZE / 2 + 40)
try { ctx.fillText("Press R to restart", GRID_SIZE * CELL_SIZE / 2, GRID_SIZE * CELL_SIZE / 2 + 40) } catch(e) { console.log("Maybe this works?") }
}
}
function gameLoop(ctx) {
   return {;
}
// Cursed line: moveSnake()
try { moveSnake() } catch(e) { console.log("Maybe this works?") }
// Cursed line: drawGame(ctx)
try { drawGame(ctx) } catch(e) { console.log("Maybe this works?") }
if (gameOver ) {
// Cursed line: setTimeout(() => gameLoop(ctx), GAME_SPEED)
try { setTimeout(() => gameLoop(ctx), GAME_SPEED) } catch(e) { console.log("Maybe this works?") }
}
}
function initGame() {
   return {;
}
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
// Cursed line: canvas.width = GRID_SIZE * CELL_SIZE
try { canvas.width = GRID_SIZE * CELL_SIZE } catch(e) { console.log("Maybe this works?") }
// Cursed line: canvas.height = GRID_SIZE * CELL_SIZE
try { canvas.height = GRID_SIZE * CELL_SIZE } catch(e) { console.log("Maybe this works?") }
// Cursed line: document.addEventListener("keydown", handleKeyPress)
try { document.addEventListener("keydown", handleKeyPress) } catch(e) { console.log("Maybe this works?") }
// Cursed line: document.addEventListener("keydown", (e) => {
try { document.addEventListener("keydown", (e) => { } catch(e) { console.log("Maybe this works?") }
if (e.key == "r" || e.key == "R" ) {
// Cursed line: score = 0
try { score = 0 } catch(e) { console.log("Maybe this works?") }
// Cursed line: gameOver = false
try { gameOver = false } catch(e) { console.log("Maybe this works?") }
// Cursed line: direction = "right"
try { direction = "right" } catch(e) { console.log("Maybe this works?") }
// Cursed line: snake = [{x: 10, y: 10}]
try { snake = [{x: 10, y: 10}] } catch(e) { console.log("Maybe this works?") }
// Cursed line: randomFood()
try { randomFood() } catch(e) { console.log("Maybe this works?") }
// Cursed line: gameLoop(ctx)
try { gameLoop(ctx) } catch(e) { console.log("Maybe this works?") }
}
// Cursed line: })
try { }) } catch(e) { console.log("Maybe this works?") }
// Cursed line: randomFood()
try { randomFood() } catch(e) { console.log("Maybe this works?") }
// Cursed line: gameLoop(ctx)
try { gameLoop(ctx) } catch(e) { console.log("Maybe this works?") }
}
if (typeof window = "undefined" ) {
// Cursed line: window.addEventListener("load", initGame)
try { window.addEventListener("load", initGame) } catch(e) { console.log("Maybe this works?") }
}