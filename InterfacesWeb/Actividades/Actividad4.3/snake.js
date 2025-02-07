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
snake.set(snakeWidth, [72,24,"right", "null"]);
snakeWidth++;
snake.set(snakeWidth, [48,24, "right", "null"]);
snakeWidth++;
snake.set(snakeWidth, [24,24, "right", "null"]);
snakeWidth++;

//Creamos un array con los giros
let turns = new Map();


document.addEventListener("keydown", function(e){
    if(!(lastAction == KEY_LEFT && e.code == "ArrowRight") && !(lastAction == KEY_RIGHT && e.code == "ArrowLeft") && !(lastAction == KEY_UP && e.code == "ArrowDown") && !(lastAction == KEY_DOWN && e.code == "ArrowUp")){
        lastAction = e.code;
    }
    
    if(snake.get(2)[2] == "null"){
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
/*
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

        // Movimiento del resto del cuerpo
for (let i = 2; i <= snake.size; i++) {
    // Extraemos las coordenadas actuales del segmento
    let x = snake.get(i)[0];
    let y = snake.get(i)[1];

    if (testTurn(i)) {
        // Si la dirección es igual a la del segmento anterior,
        // continúa en la misma dirección.
        if(snake.get(i)[2] == "left"){
            x -= 3;
            snake.set(i, [x, y, "left", "none"]);
        } else if(snake.get(i)[2] == "right"){
            x += 3;
            snake.set(i, [x, y, "right", "none"]);
        } else if(snake.get(i)[2] == "up"){
            y -= 3;
            snake.set(i, [x, y, "up", "none"]);
        } else if(snake.get(i)[2] == "down"){
            y += 3;
            snake.set(i, [x, y, "down", "none"]);
        }
    } else {
        // Si la dirección es distinta, es que el segmento
        // aún no ha girado. Se actualiza la dirección para seguir al anterior.
        let nextMove = snake.get(i-1)[2];
        if(snake.get(i)[2] == "left"){
            x -= 3;
            snake.set(i, [x, y, nextMove, "none"]);
        } else if(snake.get(i)[2] == "right"){
            x += 3;
            snake.set(i, [x, y, nextMove, "none"]);
        } else if(snake.get(i)[2] == "up"){
            y -= 3;
            snake.set(i, [x, y, nextMove, "none"]);
        } else if(snake.get(i)[2] == "down"){
            y += 3;
            snake.set(i, [x, y, nextMove, "none"]);
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
    */
function move(){
    // Movimiento de la cabeza
    let head = snake.get(1);
    let x = head[0];
    let y = head[1];
    let currentDir = head[2];

    // Verificar si la cabeza está alineada en la grilla
    if(x % 24 === 0 && y % 24 === 0){
        let newDir = currentDir;
        // Si se ha solicitado un cambio y es distinto a la actual, lo aplicamos
        if(lastAction === KEY_LEFT && currentDir !== "left"){
            newDir = "left";
        } else if(lastAction === KEY_RIGHT && currentDir !== "right"){
            newDir = "right";
        } else if(lastAction === KEY_UP && currentDir !== "up"){
            newDir = "up";
        } else if(lastAction === KEY_DOWN && currentDir !== "down"){
            newDir = "down";
        }

        // Si la dirección cambió, registramos el punto de giro
        if(newDir !== currentDir){
            turns.set(`${x},${y}`, newDir);
            currentDir = newDir;
        }

        // Actualizamos la posición de la cabeza según la dirección actualizada
        if(currentDir === "left"){
            x -= 3;
        } else if(currentDir === "right"){
            x += 3;
        } else if(currentDir === "up"){
            y -= 3;
        } else if(currentDir === "down"){
            y += 3;
        }
        snake.set(1, [x, y, currentDir, "none"]);
    } else {
        // Si no está alineada en la grilla, se mueve en la misma dirección
        if(currentDir === "left"){
            x -= 3;
        } else if(currentDir === "right"){
            x += 3;
        } else if(currentDir === "up"){
            y -= 3;
        } else if(currentDir === "down"){
            y += 3;
        }
        snake.set(1, [x, y, currentDir, "none"]);
    }

    // Movimiento del resto del cuerpo
    for(let i = 2; i <= snake.size; i++){
        let segment = snake.get(i);
        let segX = segment[0];
        let segY = segment[1];
        let segDir = segment[2];

        // Creamos la clave para la posición actual del segmento
        let posKey = `${segX},${segY}`;
        // Si hay un giro registrado en esta posición, actualizamos la dirección
        if(turns.has(posKey)){
            segDir = turns.get(posKey);
            snake.set(i, [segX, segY, segDir, "none"]);
            // Si este es el último segmento (la cola), eliminamos el giro registrado
            if(i === snake.size){
                turns.delete(posKey);
            }
        }

        // Actualizamos la posición del segmento según su dirección actual
        if(segDir === "left"){
            segX -= 3;
        } else if(segDir === "right"){
            segX += 3;
        } else if(segDir === "up"){
            segY -= 3;
        } else if(segDir === "down"){
            segY += 3;
        }
        snake.set(i, [segX, segY, segDir, "none"]);
    }

    // Verificación de colisión con los bordes del canvas
    head = snake.get(1);
    if(head[0] < 0 || head[0] > canvas.width || head[1] < 0 || head[1] > canvas.height){
        runnnin = false;
        alert("Has perdido");
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