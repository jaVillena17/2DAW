//Creamos la matriz
let matriz = [[0,0,true],[true,0,0],[0,0,true]];
//Creamos un array en la que cada posicion guardamos si esa casilla ha sido revelada o no
let reveal = [[false, false, false],[false, false, false],[false,false,false]]
//Iniciamos la matriz para rellenar los 0 con las bombas que hay alrededor
startMatrix();
console.log(matriz);
const wrapper = document.getElementById("wrapper");
let counter = countAir();
//Imprimimos la Matriz al cargar la página
printMatrix();


//En la función juego solicitaremos las coordenadas y revelaremos el contenido
function game(){
    //Iniciamos la variable botón
    but = document.getElementById("bot");
    //Si el juego no está finalizado
    if (but.innerHTML != "😰HAS PERDIDO😰"  && but.innerHTML != "🎉HAS GANADO🎉"){
        //Pedimos las coordenadas
        but.innerHTML="Siguiente Coordenada";
        x = prompt("Introduce el número de la coordenada X");
        y = prompt("Introduce el número de la coordenada Y");
        //Si alguno no es un número, llamamos tonto al jugador
        if(isNaN(x) || isNaN(y)){
            alert("Qué haces?");
        }
        //Si estas coordenadas no están dentros de los valores válidas, mostramos el error
        else if(x>2 || x<0 || y>2 || y<0){
            alert("Introduce una coordenada válida (Valores entre 0 y 2)");
        }
        //Si ya ha revelado esa casilla
        else if (reveal[x][y] == true){
            alert("Otra vez la misma casilla, ¿eres tonto?");
        }
        //Si no hay bomba
        else if(matriz[x][y]!== true){
            //Revelamos la casilla en el array de valores que enseñamos
            reveal[x][y]=true;
            
            //Imprimimos la matriz de nuevo y aumentamos el contador
            printMatrix();
            counter--;
            console.log(counter);
            //Si el contador llega a 0, has completado el juego sin explotar la bomba
            if (counter == 0){
                //Revelamos todas las casillas e imprimimos el tablero final
                reveal = [[true, true, true],[true, true, true],[true,true,true]];
                but.innerHTML = "🎉HAS GANADO🎉";
                printMatrix();
            }
        }//Si hay bomba
        else{
            //Cambiamos el contenido se esa celda a boomba explotada
            matriz[x][y] = "loser";
            //Revelamos todas las casillas e imprimimos el tablero final
            reveal = [[true, true, true],[true, true, true],[true,true,true]]
            but.innerHTML = "😰HAS PERDIDO😰";
            printMatrix();
            //Reiniciamos la celda para que vuelva a haber una bomba en caso de que se reinicie la partida
            matriz[x][y] = true;
        }
    }
}

//Función que resetea la matriz
function reset(){
    but = document.getElementById("bot");
    but.innerHTML="COMENZAR EL JUEGO";
    reveal = [[false, false, false],[false, false, false],[false,false,false]];
    counter = countAir()
    printMatrix();
}

//Función que imprime la matriz 
function printMatrix(){
    //Creamos la tabla
    let cad = "<table>";
    //Con un bucle for creamos las columnas
    for (let i = 0; i < matriz.length; i++) {
        cad += "<tr>";
        //Con otro bucle for creamos las celdas
        for (let j = 0; j < matriz[i].length; j++) {
            //Si no está reveladas, se imprime la interrogacion
            if (reveal[i][j]==false){
                cad += `<td>❓</td>`
            }else{//Si están reveladas se muestra el contenido
                //Si la matriz es true (bomba), se imprime la bomba
                if (matriz[i][j] === true){
                    //Imprimimos bombita
                    cad += `<td>💣</td>`
                }//Si es la bomba que hemos explotado, explosion
                else if(matriz[i][j] == "loser"){
                    cad += `<td>💥</td>`
                }//Si no, imprimimos el número, que será el número de bombas a su alrededor
                else{

                    cad += `<td>${matriz[i][j]}</td>`
                }
            }
        }
        cad += "</tr>";
    }
    cad += "</table";
    //Pasamos la cadena con la tabla al html
    wrapper.innerHTML = cad;
};

//Función que cuenta cuantas bombas tiene una casilla al rededor
function surrounds(x, y){
    //Iniciamos contador
    let contador = 0;
    //Recorremos las filas anterior, posterior y la misma fila revelada
    for (let i = x-1; i <= x+1; i++) {
        //En las posiciones (columnas, anterior posterior y igual, rodeando asi la casilla)
        for (let j = y-1; j <= y+1; j++) {
            //Si la fila existe y el valor de esa columna no es undefined
            if(matriz[i] != undefined && matriz[i][j] === true)
            //Si hay bomba, sumamos al contador
            contador++;
        } 
    }//Retornamos el contador
    return contador;
}

//Función que modifica la matrix cambiando los 0 por los números de bombas que tiene alrededor
function startMatrix(){
    //Recorremos la matriz
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            //Si no hay bomba, cambiamos su valor por el numero de bombas que hay alrededor
            if (matriz[i][j] !== true){
                matriz[i][j] = surrounds(i,j);
            }
        }
    }
}

//Función que cuenta el número de casillas vacía que hay
function countAir(){
    contador = 0;
    //Recorremos la matriz
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            //Si no hay bomba, cambiamos su valor por el numero de bombas que hay alrededor
            if (matriz[i][j] !== true){
                contador++;
            }
        }
    }
    return contador;
}
