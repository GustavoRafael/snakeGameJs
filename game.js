// this project is based on the snake game posted by - web dev simplified youtube channel
import { outSideGrid} from './grid.js'
import {update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection , SNAKE_SPEED} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'


let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');
let gameOver = false;

function main(currentTime){
    
    if(gameOver) {
        if(confirm('You lost. Press ok to restart.')){
            window.location = '/';
        }
        return
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime;
    
    // update the game logic (eat the food, state: lost,playing, won ...)
    update();
    
    // draw the elements of the game in the screen
    draw();
    
}

window.requestAnimationFrame(main);


function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    
    // gameBoard.innerHTML = ''
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}