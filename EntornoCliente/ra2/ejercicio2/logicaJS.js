function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un día y mes en formato numérico. La aplicación mostrará en la parte destinada para tal efecto \"SI\" si es navidad (el 25 del 12) y \"NO\" en caso contrario.",
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
        //Pedimos al usuario que introduzcas el número del dia
        let dia = parseInt(prompt("Introduce el número del día del mes"));
        //Pedimos al usuario que introduzca el número del mes
        let mes = parseInt(prompt("Introduce el número del mes"));

        //Si cumple ambos requisitos, mostramos que es SI, es navidad
        if(dia == 25 && mes == 12){
            p.innerHTML="SI";
        }
        //Si no es Navidad, mostramos NO
        else{
            p.innerHTML="NO";
        }
        //Modificamos apariencia del boton
        boton.value = "Ocultar resultado"
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
    
}
