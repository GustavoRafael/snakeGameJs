import {update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection , SNAKE_SPEED} from './snake.js'
import {update as updateFood, draw as drawFood, getFoodScore} from './food.js'
import { outsideGrid } from './grid.js'



let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false
let score = 0

function main(currentTime){
    
    if(gameOver) {
        if(confirm(`You lost \n Score: ${getFoodScore()} \n Press ok to restart.`)){
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    
    // updates the game logic
    update()
    // draws elements in the screen
    draw()
    
}

window.requestAnimationFrame(main)


function update() {
    updateSnake()
    updateFood()
    checkDeath()
    
}

function draw() {
    
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

