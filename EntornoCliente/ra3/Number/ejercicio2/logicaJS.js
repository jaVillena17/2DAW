function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web que simule el comportamiento del juego de La Primitiva propiedad de Loterías y Apuestas del Estado.";
        console.log("Mensaje de prueba en consola")
        boton.value = "Ocultar Enunciado"
    }
    //En el caso de que el parrafo tenga algo, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado"
    }
}

function verResultado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("resolucionID");
    let boton = document.getElementById("botonRes");
    //Si el parrafo está vacio, realizamos el ejercicio
    if(p.innerHTML.length==0){
        //Solicitamos el número de combinaciones
        let numero = pedirNumero();
        //Llamamos a la función
        const quiniela = generarQuiniela(numero);
        //generarCombinacion();
        p.innerHTML = printQuiniela(quiniela)
        //p.innerHTML = printQuiniela(quiniela);
        pleno15();

        //Cambioamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
    
}
function generarQuiniela(numero){
    let quiniela = [];
    for (let i = 0; i < numero; i++) {
        quiniela.push(generarCombinacion());
    }
    quiniela.push(pleno15());
    return quiniela;
}

function generarCombinacion(){
    let combo = [];
    for (let i = 0; i < 14; i++) {
        let azar = Math.ceil(Math.random()*3)
        combo.push(azar);
    }
    return combo;
}
function pleno15(){
    let pleno = [];
    for (let i = 0; i < 2; i++) {
        let azar = Math.floor(Math.random()*5);
        pleno.push(azar);
    }
    return pleno;
}
function printCombo(combo){
    let cadena = "<div class='combo'>";
        for(let i = 0; i < combo.length; i++) {
            cadena += "<p>"
            if(combo[i] == 1){
                cadena += "<span class='marked'>1</span><span>X</span><span>2</span>"
            }else if(combo[i] == 2){
                cadena += "<span>1</span><span>X</span><span class='marked'>2</span>"
            }else if(combo[i] == 3){
                cadena += "<span>1</span><span class='marked'>X</span><span>2</span>"
            }
            cadena += "</p>"
        }
    cadena += "</div>"
    console.log(combo)
    return cadena;
}
function printPartidos(){
    let cadena = "<div class='partidos'>";
    const partidos = ["Valencia-Betis","At.Madrid-Alavés","Las Palmas-Mallorca","Girona-Espanyol","Celta-Barcelona","Osasuna-Villarreal","Sevilla-Rayo Vallecano","Leganés-Real Madrid", "Granada-Cádiz","Córdoba-R.Zaragoza","Málaga-Racing de Santander","Deportivo-Sporting","Huesca-Castellón","Elche-Oviedo"];

    for (let i = 0; i < partidos.length; i++) {
        cadena += `<p class='partido'>${i+1}.${partidos[i]}</p>`
    }
    cadena += "</div>"
    return cadena;

}
function printQuiniela(quiniela){
    let cadena = "<div class='container'>"
    cadena += printPartidos();
    
    for (let i = 0; i < quiniela.length -1; i++) {
        cadena += printCombo(quiniela[i]);
    }
    cadena += "</div>"
    return cadena;
}


function pedirNumero(){
    let numero = prompt("Introduzca el número de combinaciones del boleto");
    if(numero >= 1 && numero <= 8) return numero
    else return pedirNumero();
}