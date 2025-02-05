let canvas;
let ctx;
let runnnin = true;
//Posicion inicial
let x = 250;
let y = 250;

let lastAction = null;
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";

document.addEventListener("keydown", function(e){
    lastAction = e.code;
},false)

window.addEventListener("load", iniciar, false)

function iniciar(){
    if(runnnin){
        canvas = document.getElementById("lienzo")
        ctx = canvas.getContext('2d');
        run();
    }   
}

function run(){
    requestAnimationFrame(run);
    move();
    printCanvas();
}

function move(){
    if(lastAction === KEY_LEFT){
        x -= 5;
    }else if(lastAction === KEY_RIGHT){
        x += 5;
    }
    else if(lastAction === KEY_UP){
        y -= 5;
    }
    else if(lastAction === KEY_DOWN){
        y += 5;
    }

    if (x >= canvas.width) x = 0;
    if (x < 0) x = canvas.width;
    if (y >= canvas.height) y = 0;
    if (y < 0) y = canvas.height;
}

function printCanvas(){
    let image = new Image();
    image.src = "./Assets/background.png";
    ctx.drawImage(image, 0 ,0)
    ctx.fillStyle='rgb(104, 29, 29)';
    ctx.fillRect(x,y,15,15);
}