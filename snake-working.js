// Snake Game - Working JavaScript version
// Compiled from GulfOfMexico (with manual fixes for cursed compiler)

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const GAME_SPEED = 150;

let score = 0;
let gameOver = false;
let direction = "right";
let snake = [{x: 10, y: 10}];
let food = {x: 15, y: 15};

function randomFood() {
   food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
   };
}

function moveSnake() {
   if (gameOver) {
      return;
   }
   
   const head = snake[0];
   const newHead = {x: head.x, y: head.y};
   
   if (direction === "up") {
      newHead.y = newHead.y - 1;
   }
   if (direction === "down") {
      newHead.y = newHead.y + 1;
   }
   if (direction === "left") {
      newHead.x = newHead.x - 1;
   }
   if (direction === "right") {
      newHead.x = newHead.x + 1;
   }
   
   if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
      gameOver = true;
      return;
   }
   
   // Check self collision
   for (let i = 0; i < snake.length; i++) {
      if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
         gameOver = true;
         return;
      }
   }
   
   const newSnake = [newHead, ...snake];
   
   if (newHead.x === food.x && newHead.y === food.y) {
      score = score + 1;
      randomFood();
      
      // Make sure food doesn't spawn on snake
      let onSnake = true;
      while (onSnake) {
         onSnake = false;
         for (let segment of snake) {
            if (segment.x === food.x && segment.y === food.y) {
               onSnake = true;
               food = {
                  x: Math.floor(Math.random() * GRID_SIZE),
                  y: Math.floor(Math.random() * GRID_SIZE)
               };
               break;
            }
         }
      }
   } else {
      newSnake.pop();
   }
   
   snake = newSnake;
}

function handleKeyPress(event) {
   const key = event.key;
   
   if (key === "ArrowUp" && direction !== "down") {
      direction = "up";
   }
   if (key === "ArrowDown" && direction !== "up") {
      direction = "down";
   }
   if (key === "ArrowLeft" && direction !== "right") {
      direction = "left";
   }
   if (key === "ArrowRight" && direction !== "left") {
      direction = "right";
   }
}

function drawGame(ctx) {
   ctx.fillStyle = "#000";
   ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);
   
   ctx.fillStyle = "#0f0";
   for (let i = 0; i < snake.length; i++) {
      ctx.fillRect(snake[i].x * CELL_SIZE, snake[i].y * CELL_SIZE, CELL_SIZE - 2, CELL_SIZE - 2);
   }
   
   ctx.fillStyle = "#f00";
   ctx.fillRect(food.x * CELL_SIZE, food.y * CELL_SIZE, CELL_SIZE - 2, CELL_SIZE - 2);
   
   ctx.fillStyle = "#fff";
   ctx.font = "20px Arial";
   ctx.textAlign = "left";
   ctx.fillText("Score: " + score, 10, 25);
   
   if (gameOver) {
      ctx.fillStyle = "#fff";
      ctx.font = "40px Arial";
      ctx.textAlign = "center";
      ctx.fillText("Game Over!", GRID_SIZE * CELL_SIZE / 2, GRID_SIZE * CELL_SIZE / 2);
      ctx.font = "20px Arial";
      ctx.fillText("Press R to restart", GRID_SIZE * CELL_SIZE / 2, GRID_SIZE * CELL_SIZE / 2 + 40);
   }
}

function gameLoop(ctx) {
   moveSnake();
   drawGame(ctx);
   
   if (!gameOver) {
      setTimeout(() => gameLoop(ctx), GAME_SPEED);
   }
}

function initGame() {
   const canvas = document.getElementById("gameCanvas");
   const ctx = canvas.getContext("2d");
   
   canvas.width = GRID_SIZE * CELL_SIZE;
   canvas.height = GRID_SIZE * CELL_SIZE;
   
   document.addEventListener("keydown", handleKeyPress);
   
   document.addEventListener("keydown", (e) => {
      if (e.key === "r" || e.key === "R") {
         score = 0;
         gameOver = false;
         direction = "right";
         snake = [{x: 10, y: 10}];
         randomFood();
         gameLoop(ctx);
      }
   });
   
   randomFood();
   gameLoop(ctx);
}

if (typeof window !== "undefined") {
   window.addEventListener("load", initGame);
}

