import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition} from './grid.js'

let food = getRandowFoodPositon();
const EXPANSION_RATE = 1;
let foodScore = 0;



export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        updateScore(EXPANSION_RATE)
        food = getRandowFoodPositon();
    }
}

export function draw(gameBoard){
    
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)     
}


function getRandowFoodPositon(){
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition) ){
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition;
}

export function getFoodScore(){
    return foodScore
}

function updateScore(amount){
    foodScore += amount
}