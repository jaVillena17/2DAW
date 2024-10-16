function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una calificación numérica entre 0 y 10 (con decimales). La aplicación mostrará en la parte destinada para tal efecto, su transformación en calificación alfabética según la siguiente tabla. De 0 a 3, Muy deficiente. De 3 a 5, Insuficiente. De 5 a 6, Bien. De 6 a 9, Notable. De 9 a 10, Sobresaliente."

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
        //Solicitamos al usuario que introduzca su nota
        let nota = parseFloat(prompt("Introduce tu nota"));
        
        //Realizamos el ejercicio
        if(nota < 0){
            p.innerHTML = "Su nota no puede ser negativa";
        }else if(nota < 3){
            p.innerHTML = "Muy deficiente";
        }else if(nota < 5){
            p.innerHTML = "Insuficiente";
        }else if(nota < 6){
            p.innerHTML = "Bien";
        }else if(nota < 9 ){
            p.innerHTML = "Notable";
        }else if(nota <=10){
            p.innerHTML = "Sobresaliente";
        }else{
            p.innerHTML = "Su nota no puede ser mayor que 10";
        }

        //Modificamos boton
        boton.value = "Ocultar resultado"
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}
