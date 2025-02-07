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
snake.set(snakeWidth, [72,24,"null", "null"]);
snakeWidth++;
snake.set(snakeWidth, [48,24, "null", "null"]);
snakeWidth++;
snake.set(snakeWidth, [24,24, "null", "null"]);
snakeWidth++;

//Creamos un array con los giros
let turns = new Map();


document.addEventListener("keydown", function(e){
    lastAction = e.code;
    if(snake.get(1)[2] == "null"){
        switch (lastAction){
            case "ArrowLeft":
                snake.set(2, [48,24, "left", "null"]);
                snake.set(3, [24,24, "left", "null"]);
                break;
            case "ArrowRight":
                snake.set(2, [48,24, "right", "null"]);
                snake.set(3, [24,24, "right", "null"]);
                break;
            case "ArrowUp":
                snake.set(2, [48,24, "up", "null"]);
                snake.set(3, [24,24, "up", "null"]);
                break;
            case "ArrowDown":
                snake.set(2, [48,24, "down", "null"]);
                snake.set(3, [24,24, "down", "null"]);
                break;
        }
    }
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

    //Movimiento de la cabeza
    if(x%24 == 0 && y%24 == 0){
        if(lastAction === KEY_LEFT){
            x -= 3;
            snake.set(1, [x,y, "left", "none"]);
        }else if(lastAction === KEY_RIGHT){
            x += 3;
            snake.set(1, [x,y, "right", "none"]);
        }else if(lastAction === KEY_UP){
            y -= 3;
            snake.set(1, [x,y, "up", "none"]);
            
        }else if(lastAction === KEY_DOWN){
            y += 3;
            snake.set(1, [x,y, "down", "none"]);
        }

        //Movimiento del resto del cuerpo
        for (let i = 2; i <= snake.size; i++) {
            //Si no gira, continua con la trayectoria
            if(!testTurn(i)){
                x = snake.get(i)[0];
                y = snake.get(i)[1];
                
                if(snake.get(i)[2] == "left"){
                    x -= 3;
                    snake.set(i, [x,y, "left", "none"]);
                }else if(snake.get(i)[2] == "right"){
                    x += 3;
                    snake.set(i, [x,y, "right", "none"]);
                }else if(snake.get(i)[2] == "up"){
                    y -= 3;
                    snake.set(i, [x,y, "up", "none"]);
                }
                else if(snake.get(i)[2] == "down"){
                    y += 3;
                    snake.set(i, [x,y, "down", "none"]);
                }
            }else{
                x = snake.get(i)[0];
                y = snake.get(i)[1];
                
                //Sacamos la dirección del segmento anterior
                let nextMove = snake.get(i-1)[2];
                console.log(snake.get(i))
                console.log(nextMove);
                console.log(snake);
                if(snake.get(i)[2] == "left"){
                    x -= 3;
                    snake.set(i, [x,y, nextMove, "none"]);
                }else if(snake.get(i)[2] == "right"){
                    x += 3;
                    snake.set(i, [x,y, nextMove, "none"]);
                }else if(snake.get(i)[2] == "up"){
                    y -= 3;
                    snake.set(i, [x,y, nextMove, "none"]);
                }
                else if(snake.get(i)[2] == "down"){
                    y += 3;
                    snake.set(i, [x,y, nextMove, "none"]);
                }
            }
        }
    }else{
        if(snake.get(1)[2] == "left"){
            x -= 3;
            snake.set(1, [x,y, "left", "none"]);
        }else if(snake.get(1)[2] == "right"){
            x += 3;
            snake.set(1, [x,y, "right", "none"]);
        }else if(snake.get(1)[2] == "up"){
            y -= 3;
            snake.set(1, [x,y, "up", "none"]);
        }
        else if(snake.get(1)[2] == "down"){
            y += 3;
            snake.set(1, [x,y, "down", "none"]);
        }

        //Movimiento del resto del cuerpo
        for (let i = 2; i <= snake.size; i++) {
            x = snake.get(i)[0];
            y = snake.get(i)[1];
            //Sacamos la dirección del segmento anterior
            if(snake.get(i)[2] == "left"){
                x -= 3;
                snake.set(i, [x,y, "left", "none"]);
            }else if(snake.get(i)[2] == "right"){
                x += 3;
                snake.set(i, [x,y, "right", "none"]);
            }else if(snake.get(i)[2] == "up"){
                y -= 3;
                snake.set(i, [x,y, "up", "none"]);
            }
            else if(snake.get(i)[2] == "down"){
                y += 3;
                snake.set(i, [x,y, "down", "none"]);
            }
        }
    }

    if(head[0] < 0 || head[0] > canvas.width || head[1] < 0 || head[1] > canvas.width){
        runnnin = false;
        alert("Has perdido")
    }else{

        
    }
}
function testTurn(index){
    let parte = snake.get(index);
    let previo = snake.get(index-1);
    return parte[2] == previo[2]
}

function printCanvas(){
    let image = new Image();
    image.src = "./Assets/background.png";
    ctx.drawImage(image, 0 ,0)
    ctx.fillStyle='rgb(104, 29, 29)';
    snake.forEach(tramo => {
        ctx.fillRect(tramo[0],tramo[1],24,24);
    })
    ctx.fillStyle='red';
    ctx.fillRect(240,240,24,24);
}