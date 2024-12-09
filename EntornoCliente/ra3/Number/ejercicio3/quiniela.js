let quinielaGenerada;
function verResultadoQuiniela(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("resolucionID");
    let boton = document.getElementById("botQuiniela");
    let boton2 = document.getElementById("botPrimitiva");
    boton2.outerHTML = "";
    //Si el parrafo está vacio, realizamos el ejercicio
    if(p.innerHTML.length==0){
        //Solicitamos el número de combinaciones
        let numero = pedirNumero();
        //Definimos un array con los partidos
        const partidos = ["Valencia-Betis","At.Madrid-Alavés","Las Palmas-Mallorca","Girona-Espanyol","Celta-Barcelona","Osasuna-Villarreal","Sevilla-Rayo Vallecano","Leganés-Real Madrid", "Granada-Cádiz","Córdoba-R.Zaragoza","Málaga-Racing de Santander","Deportivo-Sporting","Huesca-Castellón","Elche-Oviedo", "Athletic Club-Real Sociedad"];
        //Llamamos a la función que genera la quiniela con un numero x de bloques
        quinielaGenerada = generarQuiniela(numero);
        //Imprimimos la quiniela
        p.innerHTML = printQuiniela(quinielaGenerada, partidos);

        //Cambiamos el texto que muestra el boton
        boton.outerHTML = `<input type="button" name="botonEnunciado" value="Comprobar Resultado" id="botQuiniela" onclick="resultado();">
        <input type="button" name="botonEnunciado" value="Introducir Resultado a Mano" id="botQuiniela" onclick="resultadoManual();">`
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}
//Función que nos genera una quiniela con un numero x de bloques
function generarQuiniela(numero){
    //Definimos un array, que será una matriz
    let quiniela = [];
    //Para cada bloque, generamos una combinacion
    for (let i = 0; i < numero; i++) {
        quiniela.push(generarCombinacion());
    }
    //Añadimos el pleno al 15 al final
    quiniela.push(pleno15());
    //Retornamos la matriz
    return quiniela;
}
//Función que genera una combinación de 14 resultados aleatorios
function generarCombinacion(){
    let combo = [];
    for (let i = 0; i < 14; i++) {
        let azar = Math.ceil(Math.random()*3)
        combo.push(azar);
    }
    return combo;
}
//Función que nos genera de forma aleatoria el resultado del pleno al 15
function pleno15(){
    let pleno = [];
    for (let i = 0; i < 2; i++) {
        let azar = Math.floor(Math.random()*4);
        pleno.push(azar);
    }
    return pleno;
}
//Función que imprime una combinación. Crea un div en el que cada resultado es un p formador por 3 span, uno de ellos marcado según el resultado aleatorio
function printCombo(combo, index){
    let cadena = `<div class='combo'><p class='title'>Bloque ${index+1}</p>`;
        for(let i = 0; i < combo.length; i++) {
            cadena +="<p>"
            if(combo[i] == 1){
                cadena += "<span class='marked'>1</span><span class='quiniela'>X</span><span class='quiniela'>2</span>"
            }else if(combo[i] == 2){
                cadena += "<span class='quiniela'>1</span><span class='quiniela'>X</span><span class='marked'>2</span>"
            }else if(combo[i] == 3){
                cadena += "<span class='quiniela'>1</span><span class='marked'>X</span><span class='quiniela'>2</span>"
            }
            cadena += "</p>"
        }
    cadena += "</div>"
    return cadena;
}
//Función que imprime un div con una serie de p con cada partido
function printPartidos(partidos){
    let cadena = "<div class='partidos'><p class='title'><b>Partidos</b></p>";

    for (let i = 0; i < partidos.length -1; i++) {
        cadena += `<p class='partido'>${i+1}.${partidos[i]}</p>`
    }
    cadena += "</div>"
    return cadena;

}
//Función que, haciendo uso de printPartidos y printPleno15, imprime todos los divs necesarios para la quiniela
function printQuiniela(quiniela, partidos){
    //Creamos la cadena con un div contenedor
    let cadena = "<div class='container'>"
    //Introducimos el div de los partidos
    cadena += printPartidos(partidos);
    //Para cada bloque de combinaciones, las imprimimos
    for (let i = 0; i < quiniela.length -1; i++) {
        cadena += printCombo(quiniela[i], i);
    }
    cadena += "</div>"
    //Añadimos el div del pleno al 15
    cadena += printPleno15(quiniela, partidos);
    return cadena;
}
//Función que imprime el bloque del pleno al 15
function printPleno15(quiniela, partidos){
    let cadena = `<div class='partido_pleno'><p class='partido'>${15}.${partidos[14]}</p>`;
    cadena += "<div class='combo'>"
    for (let i = 0; i < quiniela[quiniela.length-1].length; i++) {
        cadena += "<p>"
        if(quiniela[quiniela.length-1][i] == 0){
            cadena += "<span class='marked'>0</span><span class='quiniela'>1</span><span class='quiniela'>2</span><span class='quiniela'>M</span>"
        }else if(quiniela[quiniela.length-1][i] == 1){
            cadena += "<span class='quiniela'>0</span><span class='marked'>1</span><span class='quiniela'>2</span><span class='quiniela'>M</span>"
        }else if(quiniela[quiniela.length-1][i] == 2){
            cadena += "<span class='quiniela'>0</span><span class='quiniela'>1</span><span class='marked'>2</span><span class='quiniela'>M</span>"
        }else if(quiniela[quiniela.length-1][i] == 3){
            cadena += "<span class='quiniela'>0</span><span class='quiniela'>1</span><span class='quiniela'>2</span><span class='marked'>M</span>"
        }
        cadena += "</p>";
    }
    cadena += '</div>'
    return cadena;

}
//Función para pedir numero de opciones
function pedirNumero(){
    let numero = prompt("Introduzca el número de combinaciones del boleto");
    if(numero >= 1 && numero <= 8) return numero
    else return pedirNumero();
}

//De aqui para abajo las funciones correspondientes al ejercicio 3
function resultado(){
    //Creamos un array con los resultados de la jornadad que representa la quiniela
    let resultados = [1,1,2,1,3,3,1,2,3,3,3,3,3,1,1,0];
    //Creamos el array donde guardaremos los aciertos de cada bloque
    let aciertos = [];

    let cadena = "";
    
    //Recorremos la matriz con la quiniela y sumamos los aciertos
    for (let i = 0; i < quinielaGenerada.length; i++) {
        let contadorAciertos = 0;
        for (let j = 0; j < quinielaGenerada[i].length; j++) {
            if(quinielaGenerada[i][j] == resultados[j]){
                contadorAciertos++;
            }
        }
        aciertos.push(contadorAciertos);
    }
    //Creamos un array con los premios de cada bloque
    let Listapremios = premio(aciertos);
    //Imprimimos  los resultados de cada bloque
    for (let i = 0; i < aciertos.length-1; i++){
        cadena += `Bloque ${i+1}: Nº de aciertos: ${aciertos[i]} <b>Premio</b>: ${Listapremios[i]}€<br>`
    }
    //Mostramos la solucion y quitamos el boton
    let p = document.getElementById("resolucionID");
    p.innerHTML += cadena;
    let boton = document.getElementById("botQuiniela");
    boton.outerHTML = "";
}
//Funcion que devuelve un array con los premios monetarios por cada acierto
function premio(aciertos){
    let pleno = false;
    //Pimero comprobamos el pleno al 15
    if(aciertos[aciertos.length-1] == 2) pleno = true;
    //Creamos un array donde guardaremos la cantidad economica del premio segun el número de aciertos
    let premios = [];
    for (let i = 0; i < aciertos.length-1; i++) {
        if(pleno) aciertos[i]++
        //Hacemos un switch para asignar los valores
        switch(aciertos[i]){
            case 15:
                premios.push("76.527.504")
                break;
            case 14:
                premios.push("4.782.969")
                break;
            case 13:
                premios.push("170.820")
                break;
            case 12:
                premios.push("13.140")
                break;
            case 11:
                premios.push("1.643")
                break;
            case 10:
                premios.push("299")
                break;
            default:
                premios.push("0")
                break;
        }
    }
    return premios;
}
//Función para ver el numero de aciertos de forma manual. No da el dinero ni cuenta el pleno al 15 como uno
function resultadoManual(){
    let resultados = [1,1,2,1,3,3,1,2,3,3,3,3,3,1,1,0];
    let intro = [];
    let contador = 0;
    let premio = 0;

    for (let i = 1; i < 17; i++) {
        intro.push(parseInt(prompt("Introduce el resultado de los partidos en orden. 1 Vitcoria Local, 2 Visitante, 3 empate")));
    }
    for (let i = 0; i < resultados.length-2; i++) {
        if (resultados[i] == intro[i]){
            contador++;   
        } 
    }
    if(intro[14] == resultados[14] && intro[15] == resultados[15]) contador++;

    switch(contador){
        case 10:
            premio = 299;
            break;
        case 11:
            premio = 1643;
            break;
        case 12:
            premio = 13140;
            break;
        case 13:
            premio = 170820;
            break;
        case 14:
            premio = 4782969;
            break;
        case 15:
            premio = 75527504;
            break;  
        default:
            premio = 0;
            break;   
    }
    
    let p = document.getElementById("resolucionID");
    p.innerHTML += `Numero de aciertos: ${contador}, <b>Premio</b>: ${premio}€`
    let boton = document.getElementById("botQuiniela");
    boton.outerHTML = "";
}