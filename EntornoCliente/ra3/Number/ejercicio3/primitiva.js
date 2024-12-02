let boleto;
function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botPrimitiva");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web que simule el comportamiento del juego de La Primitiva y la Quiniela propiedad de Loterías y Apuestas del Estado.";
        console.log("Mensaje de prueba en consola")
        boton.value = "Ocultar Enunciado"
    }
    //En el caso de que el parrafo tenga algo, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado"
    }
}

function verResultadoPrimitiva(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("resolucionID");
    let boton = document.getElementById("botPrimitiva");
    //Si el parrafo está vacio, realizamos el ejercicio
    if(p.innerHTML.length==0){
        //Solicitamos el número de combinaciones
        let numero = pedirNumero();

        //Llamamo a la función
        boleto = generarBoleto(numero);

        p.innerHTML = printBoleto(boleto);

        //Cambioamos el texto que muestra el boton
        boton.outerHTML = `<input type="button" name="botonEnunciado" value="Comprobar Boletos" id="botPrimitiva" onclick="testPrimitiva();"><input type="button" name="botonEnunciado" value="Introducir a manita" id="botPrimitiva2" onclick="verBoletoManual();">`
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
    
}

function generarBoleto(numero){
    //Creamos un array
    let boleto = [];
    //Generamos x numero de combinaciones y los metemos en el array
    for (let i = 0; i < numero; i++) {
        boleto.push(combinacion())
    }
    return boleto;
}

function combinacion(){
    //Creamos array
    let combo = [];
    //Generamos 6 numeros aleatorios y comprobamos que no estén repetudos
    for (let i = 0; i < 6; i++){
        let azar = Math.ceil(Math.random()*49);
        if(!combo.includes(azar)) combo.push(azar);
        else i--;
    }
    //Ordenamos el array creando la funcion de forma manual porque si no lo ordena como una string
    combo.sort(function(a, b){return a-b});
    return combo;
}

function printBoleto(boleto){
    let cadena = "<div class='containerPrimitiva'>";
    for (let i = 0; i < boleto.length; i++) {
        cadena += `<div class='combinacion'>${(i+1)+"."}`;
        for (let j = 0; j < boleto[i].length; j++) {
            cadena += `<span class='numero'>${boleto[i][j]}</span>`
        }
        cadena += "</div>";
        
    }
    cadena+=`<div class='reintegro'>Reintegro:<span class='re'> `+reintegro()+`</span></div></div>`;
    return cadena;
}

function reintegro(){
    //Generamos un numero alatorio entre 0 y 9
    return Math.floor(Math.random()*9)
}

function pedirNumero(){
    let numero = prompt("Introduzca el número de combinaciones del boleto");
    if(numero >= 1 && numero <= 8) return numero
    else return pedirNumero();
}

//De aqui para abajo las funciones correspondientes al ejercicio 3
function testPrimitiva(){
    //Generamos la combinación aleatoria
   let winner = combinacion();
   let reWinner = reintegro();
   //Contamos el numero de coincidencias de cada combinacion y lo guardamos en un array en orden
   let contadores = [];
   for (let i = 0; boleto[i] != undefined; i++) {
        let contador = 0;
        
        for (let j = 0; boleto[i][j] != undefined; j++) {
            if(boleto[i][j] == winner[j]){
                contador++;
            }
        }        
        contadores.push(contador);
   }
    let p = document.getElementById("resolucionID");
    p.innerHTML += `Combinación Ganadora: ${winner} Reintegro: ${reWinner}<br>Numero de aciertos por bloque:<br>`
    for (let i = 0;contadores[i] != undefined; i++) {
        p.innerHTML += `Combinación ${i+1}. Aciertos: ${contadores[i]}<br>`
   }
   let boton = document.getElementById("botPrimitiva");
   boton.outerHTML = "";
}
