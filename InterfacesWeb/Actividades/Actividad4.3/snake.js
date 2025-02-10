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
    if(!(lastAction == KEY_LEFT && e.code == "ArrowRight") && !(lastAction == KEY_RIGHT && e.code == "ArrowLeft") && !(lastAction == KEY_UP && e.code == "ArrowDown") && !(lastAction == KEY_DOWN && e.code == "ArrowUp")){
        lastAction = e.code;
    }
    
    if(snake.get(2)[2] == "null"){
        switch (lastAction){
            case "ArrowLeft":
                snake.set(2, [48,24, "ArrowRight", "null"]);
                snake.set(3, [24,24, "ArrowRight", "null"]);
                break;
            case "ArrowRight":
                snake.set(2, [48,24, "ArrowRight", "null"]);
                snake.set(3, [24,24, "ArrowRight", "null"]);
                break;
            case "ArrowUp":
                snake.set(2, [48,24, "ArrowRight", "null"]);
                snake.set(3, [24,24, "ArrowRight", "null"]);
                break;
            case "ArrowDown":
                snake.set(2, [48,24, "ArrowRight", "null"]);
                snake.set(3, [24,24, "ArrowRight", "null"]);
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
    let direccion = head[2];

    //Control de la cabeza y los giros
    if(x%24 == 0 && y%24 == 0){
        if(direccion != lastAction){
            if(lastAction === KEY_LEFT){
                turns[`${x}, ${y}`] = "ArrowLeft";
                x -= 3;
                snake.set(1, [x,y, "ArrowLeft", "none"]);
            }else if(lastAction === KEY_RIGHT){
                turns[`${x}, ${y}`] = "ArrowRight";
                x += 3;
                snake.set(1, [x,y, "ArrowRight", "none"]);
                
            }else if(lastAction === KEY_UP){
                turns[`${x}, ${y}`] = "ArrowUp";
                y -= 3;
                snake.set(1, [x,y, "ArrowUp", "none"]);
                
            }else if(lastAction === KEY_DOWN){
                turns[`${x}, ${y}`] = "ArrowDown";
                y += 3;
                snake.set(1, [x,y, "ArrowDown", "none"]);
                
            }
        }else{
            if(lastAction === KEY_LEFT){
                x -= 3;
                snake.set(1, [x,y, "ArrowLeft", "none"]);
            }else if(lastAction === KEY_RIGHT){
                x += 3;
                snake.set(1, [x,y, "ArrowRight", "none"]);
            }else if(lastAction === KEY_UP){
                y -= 3;
                snake.set(1, [x,y, "ArrowUp", "none"]);
            }else if(lastAction === KEY_DOWN){
                y += 3;
                snake.set(1, [x,y, "ArrowDown", "none"]);
            }
        }



        //Movimiento del resto del cuerpo en puntos de giro
        for (let i = 2; i <= snake.size; i++) {
            //Sacamos las coordenadas y las comparamos con los giros
            x = snake.get(i)[0];
            y = snake.get(i)[1];
            let dire = snake.get(i)[2]

            //Cadena key del objeto
            let cadena = `${x}, ${y}`;


            if(turns[cadena]){
                console.log("SAJFNJSD")
                snake.set(i, [x,y, turns[cadena], "null"]);
                
            }

            //Movimiento del resto del cuerpo
            let move = snake.get(i)[2];

            if(move == "ArrowLeft"){
                x -= 3;
                snake.set(i, [x,y, "ArrowLeft", "none"]);
            }else if(move == "ArrowRight"){
                x += 3;
                snake.set(i, [x,y, "ArrowRight", "none"]);
            }else if(move == "ArrowUp"){
                y -= 3;
                snake.set(i, [x,y, "ArrowUp", "none"]);
            }
            else if(move == "ArrowDown"){
                y += 3;
                snake.set(i, [x,y, "ArrowDown", "none"]);
            }     
        } 


    }else{
        if(snake.get(1)[2] == "ArrowLeft"){
            x -= 3;
            snake.set(1, [x,y, "ArrowLeft", "none"]);
        }else if(snake.get(1)[2] == "ArrowRight"){
            x += 3;
            snake.set(1, [x,y, "ArrowRight", "none"]);
        }else if(snake.get(1)[2] == "ArrowUp"){
            y -= 3;
            snake.set(1, [x,y, "ArrowUp", "none"]);
        }
        else if(snake.get(1)[2] == "ArrowDown"){
            y += 3;
            snake.set(1, [x,y, "ArrowDown", "none"]);
        }

        //Movimiento del resto del cuerpo en puntos de giro
        for (let i = 2; i <= snake.size; i++) {
            //Sacamos las coordenadas y las comparamos con los giros

            x = snake.get(i)[0];
            y = snake.get(i)[1];

            //Movimiento del resto del cuerpo
            let move = snake.get(i)[2];


            if(move == "ArrowLeft"){
                x -= 3;
                snake.set(i, [x,y, "ArrowLeft", "none"]);
                console.log(snake)
            }else if(move == "ArrowRight"){
                x += 3;
                snake.set(i, [x,y, "ArrowRight", "none"]);
            }else if(move == "ArrowUp"){
                y -= 3;
                snake.set(i, [x,y, "ArrowUp", "none"]);
            }
            else if(move == "ArrowDown"){
                y += 3;
                snake.set(i, [x,y, "ArrowDown", "none"]);
            }     
        } 
    }

    //Comprobación de derrota 
    if(head[0] < 0 || head[0] > canvas.width || head[1] < 0 || head[1] > canvas.width){
        runnnin = false;
        alert("Has perdido")
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