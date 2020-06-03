// this project is based on the snake game posted by - web dev simplified youtube channel

let lastRenderTime = 0;
const SNAKE_SPEED = 2;

function main(currentTime){
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if(secondsSinceLastRender < 1/SNAKE_SPEED) return

    lastRenderTime = currentTime;
    console.log("Render!!");
    
    // update the game logic (eat the food, state: lost,playing, won ...)
    update();
    
    // draw the elements of the game in the screen
    draw();
}

window.requestAnimationFrame(main);

function update(){

}
function draw(){
    
}