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

//Coordenadas de la manzana
let apple = {
    x : null,
    y : null
}
spawnApple();

// Array con piedras
let piedras = [];
//Contador de piedras spawnear
let blockCoutner = 2;
//Generamos las piedras
for (let i = 0; i < blockCoutner; i++) {
    spawnBlock()   
}



//Contador de manzanas comidas
let feedCounter = 0;

//Personal record
let record = window.localStorage.getItem('record')
if(record){
    let pb = document.querySelector("span.PB");
    pb.innerHTML = `PB: ${record}`
}

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
    //Guardamos los valores iniciales para usar en la función eatApple
    const currentX = x;
    const currentY = y;

    let crash = false;

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
        
        //Función que controla si en el siguiente movimiento de come una fruta
        if(eatApple(currentX, currentY)){
            //Añadimos una posición más a la serpiente
            //debemos ponerlo en las coordenadas -24 con respecto a la cola
            //Sacamos las coordenadas de la cola y la dirección
            const tailX = snake.get(snakeWidth-1)[0];
            const tailY = snake.get(snakeWidth-1)[1];
            const tailMove = snake.get(snakeWidth-1)[2];

            switch(tailMove){
                case "ArrowLeft":
                    snake.set(snakeWidth, [tailX+24, tailY, tailMove, "null"]);
                    break;
                case "ArrowRight":
                    snake.set(snakeWidth, [tailX-24, tailY, tailMove, "null"]);
                    break;
                case "ArrowUp":
                    snake.set(snakeWidth, [tailX, tailY+24, tailMove, "null"]);
                    break;
                case "ArrowDown":
                    snake.set(snakeWidth, [tailX, tailY-24, tailMove, "null"]);
                    break
            }
            //Aumentamos el tamaño de la serpiente
            snakeWidth++;
        }else if(spotBlock(currentX, currentY)){
            runnnin = false;
            alert("Has perdido")
            location.reload();
        }

        //Otro switch mas para las coordenadas que se le van a pasar a la función que busca el choque
            //Creamos las variables x e y donde comprobaremos si hay fruta (partiendo de la posicion inicial de la cabeza antes del siguiente movimiento)
            let nextX = currentX;
            let nextY = currentY;

            //Variable booleana donde ejecutamos la función para encontrar si se choca, definida como false de forma inicial
            
            if(head[2] != "null"){
                
                //Con un switch, aumentamos la siguiente coordenada en función del siguiente move
                switch (snake.get(1)[2]){
                    case "ArrowLeft":
                        nextX -= 24;
                        break;
                    case "ArrowRight":
                        nextX += 24;
                        break;
                    case "ArrowUp":
                        nextY -= 24
                        break;
                    case "ArrowDown":
                        nextY += 24;
                        break
                }
                crash = spotSnake(nextX, nextY);
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

            //COMENTAR PARA CREAR LA MAGIA

            //Comprobamos si estamos en la cola para eliminar el giro del mapa de giros
            if(i == snake.size){
                //Esto por lo visto elimina una clave de un objeto
                delete turns[cadena];
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
    if(head[0] < 0 || head[0] > canvas.width || head[1] < 0 || head[1] > canvas.width || crash){
        runnnin = false;
        alert("Has perdido")
        let record = window.localStorage.getItem('record')
        if(!record || record < feedCounter){
            window.localStorage.setItem('record', feedCounter)
        }
        location.reload();
    }
}
function testTurn(index){
    let parte = snake.get(index);
    let previo = snake.get(index-1);
    return parte[2] == previo[2]
}

function eatApple(x, y){
    //Sacamos la direccion del siguiente movimiento
    let nextMove = snake.get(1)[2];

    //Creamos las variables x e y donde comprobaremos si hay fruta (partiendo de la posicion inicial de la cabeza antes del siguiente movimiento)
    let nextX = x;
    let nextY = y;
    
    //Con un switch, aumentamos la siguiente coordenada en función del siguiente move
    switch (nextMove){
        case "ArrowLeft":
            nextX -= 24;
            break;
        case "ArrowRight":
            nextX += 24;
            break;
        case "ArrowUp":
            nextY -= 24
            break;
        case "ArrowDown":
            nextY += 24;
            break
    }
    
    //Comparamos dichas coordenadas con las coordenadas de la manzana
    if(apple.x == nextX && apple.y == nextY){
        feedCounter++;
        if(feedCounter == 10){
            alert("Has Ganado!");
            location.reload();
        }
        //Actualizamos la interfaz
        let feed = document.querySelector("div.result span");
        feed.innerHTML = `x${feedCounter}`
        spawnApple();
        // Array con piedras
        piedras = [];
        //Contador de piedras spawnear
        blockCoutner++;
        //Generamos las piedras
        for (let i = 0; i < blockCoutner; i++) {
            spawnBlock()   
        }
        return true;
    }else{
        return false;
    }
}

//Función que genera una fruta de forma aletoria
function spawnApple(){
    //Generamos dos números aleatorios múltiplos de 24, entre 0 y 480
    //Lo que quiere decir, generamos un número aleatorio entre 0 y 19 Y multiplicaremos 24 por dicho número
    let randomX = Math.floor(Math.random() * 19) * 24;
    let randomY = Math.floor(Math.random() * 19) * 24;
    
    //Comprobar si hay una serpiente en esas coordenadas
    if(!spotSnake(randomX, randomY)){
        //Si no hay serpiente guardamos las coordenadas
        apple.x = randomX;
        apple.y = randomY;
    }else{
        //Si hay serpiente en esas coordenadas, llamamos a la función otra vez
        spawnApple()
    }
}

//funcion que me dice si hay alguna parte de la serpiente en las coordenadas metidas por parámetro
function spotSnake(x, y){
    //Creamos una variable booleana donde guardaremos si encontramos coincidencia
    let found = false;
    snake.forEach((bodyPart) => {
        if(bodyPart[0] == x && bodyPart[1] == y) found = true
    })
    return found;
}

function printCanvas(){
    let image = new Image();
    image.src = "./Assets/background.png";
    ctx.drawImage(image, 0 ,0)
    ctx.fillStyle='rgb(104, 29, 29)';
    snake.forEach(tramo => {
        ctx.fillRect(tramo[0],tramo[1],24,24);
    })
    //Imprimir la fruta en las coordenadas
    let manzana = new Image();
    manzana.src = "./Assets/apple.png"
    ctx.drawImage(manzana, apple.x, apple.y)

    //Imprimir las piedras
    ctx.fillStyle='rgb(135, 82, 204)';
    piedras.forEach(piedra => {
        ctx.fillRect(piedra.x,piedra.y,24,24);
    })
}





//Cosas Nueva a añadir

function spawnBlock() {
    let randomX = Math.floor(Math.random() * 19) * 24;
    let randomY = Math.floor(Math.random() * 19) * 24;

    if (!spotSnake(randomX, randomY) && !(apple.x === randomX && apple.y === randomY) && !spotBlock(randomX, randomY)) {
        piedras.push({ x: randomX, y: randomY });
    } else {
        spawnBlock();
    }
}


function spotBlock(x, y) {
    let bool = false;

    //Sacamos la direccion del siguiente movimiento
    let nextMove = snake.get(1)[2];

    //Creamos las variables x e y donde comprobaremos si hay fruta (partiendo de la posicion inicial de la cabeza antes del siguiente movimiento)
    let nextX = x;
    let nextY = y;
    
    //Con un switch, aumentamos la siguiente coordenada en función del siguiente move
    switch (nextMove){
        case "ArrowLeft":
            nextX -= 24;
            break;
        case "ArrowRight":
            nextX += 24;
            break;
        case "ArrowUp":
            nextY -= 24
            break;
        case "ArrowDown":
            nextY += 24;
            break
    }

    piedras.forEach(piedra => {
        if(piedra.x == x && piedra.y == y){
            bool = true;
        }
    })

    return bool
}