let quinielaGenerada;
function verResultadoQuiniela(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("resolucionID");
    let boton = document.getElementById("botonRes");
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
        resultado();

        //Cambiamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
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
    
    //Recorremos la matriz con la quiniela y sumamos los aciertos, sin contar el pleno al 15
    //Preguntar como se suma el pleno al 15
    for (let i = 0; i < quinielaGenerada.length; i++) {
        let contadorAciertos = 0;
        for (let j = 0; j < quinielaGenerada[i].length; j++) {
            if(quinielaGenerada[i][j] == resultados[j]){
                contadorAciertos++;
            }
        }
        aciertos.push(contadorAciertos);
    }
    console.log(aciertos);
}