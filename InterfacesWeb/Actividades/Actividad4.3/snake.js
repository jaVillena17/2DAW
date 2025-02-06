let canvas;
let ctx;
let runnnin = true;
//Posicion inicial

let lastAction = null;
const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";

//Mapa que contiene los tramos de la serpiente, coordenadas, direccion y giro
let snakeWidth = 1;
let snake = new Map();
snake.set(snakeWidth, [10,10,"null", "null"]);
snakeWidth++;
snake.set(snakeWidth, [25,10, "null", "null"]);
snakeWidth++;
snake.set(snakeWidth, [40,10, "null", "null"]);
snakeWidth++;

//Creamos un array con los giros
let turns = new Map();


document.addEventListener("keydown", function(e){
    lastAction = e.code;
},false)

window.addEventListener("load", iniciar, false)

function iniciar(){
    canvas = document.getElementById("lienzo")
    ctx = canvas.getContext('2d');
    run();
}

function run(){
    if(runnnin){
        requestAnimationFrame(run);
        move();
        printCanvas();
    }
    
}

function move(){
    //Sacamos las coordenadas de la cabeza
    let head = snake.get(1);
    let x = head[0];
    let y = head[1];

    if(lastAction === KEY_LEFT){
        x -= 2;
        snake.set(1, [x,y, "left", "none"]);
    }else if(lastAction === KEY_RIGHT){
        x += 2;
        snake.set(1, [x,y, "right", "none"]);
    }else if(lastAction === KEY_UP){
        y -= 2;
        snake.set(1, [x,y, "up", "none"]);
    }else if(lastAction === KEY_DOWN){
        y += 2;
        snake.set(1, [x,y, "down", "none"]);
    }

    if(x < 0 || x > canvas.width || y < 0 || y > canvas.width){
        runnnin = false;
        alert("Has perdido")
    }else{

        
    }
}
function testTurn(index){

}

function printCanvas(){
    let image = new Image();
    image.src = "./Assets/background.png";
    ctx.drawImage(image, 0 ,0)
    ctx.fillStyle='rgb(104, 29, 29)';
    snake.forEach(tramo => {
        ctx.fillRect(tramo[0],tramo[1],15,15);
    })
    //ctx.fillRect(x,y,15,15);
}