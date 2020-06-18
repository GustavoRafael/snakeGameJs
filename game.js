import {update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection , SNAKE_SPEED} from './snake.js'
import {update as updateFood, draw as drawFood, getFoodScore} from './food.js'
import { outsideGrid } from './grid.js'



let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
const scoreElement = document.getElementById('score');
const maxScoreElement = document.getElementById('maxScore');
let gameOver = false
let currentScore = 0;
let maxScore = Number(sessionStorage.getItem("currMax"))=== null? 0: Number(sessionStorage.getItem("currMax"));
// Stores max value
// sessionStorage.setItem("currMax", "0");

const finalMessage = score => {
    return `You lost!!!\n Score: ${score} \n Press ok to restart.`
} 


function main(currentTime){
    
    if(gameOver) {
        
        if(confirm(finalMessage(getFoodScore()))){
            window.location = window.location.pathname
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
    updateMaxScore()
    
}

function draw() {
    
    gameBoard.innerHTML = ''
    showScore()
    showMaxScore()
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function gameStatus(){
    if(gameOver) {
        if(confirm(finalMessage)){
            window.location = '/'
        }
        return
    }
}

function showScore(){
    const scoreText = score =>{
        return `<h1>Score: ${score} </h1>`
    }
    if(currentScore !== getFoodScore()){
        currentScore = getFoodScore();
        scoreElement.innerHTML = scoreText(currentScore);
    }
}

// function showMaxScore(){
//     const maxScoreText = maxValue => {
//         return `<h1>Max Score: ${maxValue} </h1>`
//     }
//     if(maxScore < getFoodScore()){
//         maxScore = getFoodScore();
//         maxScoreElement.innerHTML = maxScoreText(maxScore);
//     }

//     // Retrieve
//     sessionStorage.getItem("currMax");
// }

function showMaxScore(){
    if(typeof(Storage) !== "undefined"){
        const maxScoreText = maxValue => {
            return `<h1>Max Score: ${maxValue} </h1>`
        }
        if(maxScore < getFoodScore()){
            maxScore = getFoodScore();
             // Store
            sessionStorage.setItem("currMax", `${maxScore}`);
            maxScoreElement.innerHTML = maxScoreText(sessionStorage.getItem("currMax"));
        } 
    }else{
        maxScoreElement.innerHTML = "Sorry, browser does not support web storage...";
    }
}

function updateMaxScore(){
    const maxScoreText = maxValue => {
        return `<h1>Max Score: ${maxValue} </h1>`
    }
    maxScoreElement.innerHTML = maxScoreText(sessionStorage.getItem("currMax"));
}

// function moveUp(){
//     console.log("hello")
// }



