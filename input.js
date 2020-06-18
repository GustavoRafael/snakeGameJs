let inputDirection = {x: 0, y: 0};
let lastInputDirection = {x: 0, y: 0};


window.addEventListener('keydown', e => {
    console.log(e.key)
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1}
            break
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1}
            break
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0}
            break
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0}
            break
    }
    
})

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}

const button1 = document.getElementById("button-button1");
button1.onclick = () => {
    console.log("move up!!")
    if(lastInputDirection.y === 0) inputDirection = { x: 0, y: -1}
}

const button2 = document.getElementById("button-button2");
button2.onclick = () => {
    console.log("move Down!!")
    if(lastInputDirection.y === 0) inputDirection = { x: 0, y: 1}
}

const button3 = document.getElementById("button-button3");
button3.onclick = () => {
    console.log("move left!!")
    if(lastInputDirection.x === 0) inputDirection = { x: -1, y: 0}
}

const button4 = document.getElementById("button-button4");
button4.onclick = () => {
    console.log("move right!!")
    if(lastInputDirection.x === 0) inputDirection = { x: 1, y: 0}
}