//Creamos la matriz
const matriz = [[0,0,0],[0,1,0],[0,0,0]];
//Creamos un array en la que cada posicion guardamos si esa casilla ha sido revelada o no
let reveal = [[false, false, false],[false, false, false],[false,false,false]]
const wrapper = document.getElementById("wrapper");
let counter = 0;
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
        //Si estas coordenadas no están dentros de los valores válidas, mostramos el error
        if(x>2 || x<0 || y>2 || y<0){
            alert("Introduce una coordenada válida (Valores entre 0 y 2)");
        }
        //Si ya ha revelado esa casilla
        else if (reveal[x][y] == true){
            alert("Otra vez la misma casilla, ¿eres tonto?");
        }
        //Si no hay bomba
        else if(matriz[x][y]==0){
            //Revelamos la casilla
            reveal[x][y]=true;
            //Imprimimos la matriz de nuevo y aumentamos el contador
            printMatrix();
            counter++;
            //Si el cntador llega a 8, has completado el juego sin explotar la bomba
            if (counter == 8){
                but.innerHTML = "🎉HAS GANADO🎉";
            }
        }
        //Si explotas la bomba
        else{
            reveal[x][y]=true;
            printMatrix();
            but.innerHTML = "😰HAS PERDIDO😰";
        }
    }
}

//Función que resetea la matriz
function reset(){
    but = document.getElementById("bot");
    but.innerHTML="COMENZAR EL JUEGO";
    reveal = [[false, false, false],[false, false, false],[false,false,false]]
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
                if(matriz[i][j]==0){
                    cad += `<td>🏳️</td>`
                }else{
                    cad += `<td>💣</td>`
                }
            }
        }
        cad += "</tr>";
    }
    cad += "</table";
    wrapper.innerHTML = cad;
};



