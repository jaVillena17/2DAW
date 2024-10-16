function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una secuencia de notas (con valores que van de 0 a 10, sin decimales). La entrada acabará con el valor “-1”.<br>La aplicación mostrará en la parte destinada para tal efecto, \"SI\", si hay algún 10, \"NO\" en caso contrario."
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
        //Mediante un bucle do while, solicitamos notas al usuario hasta que escriba -1 para salir
        let num = 0;
        //Iniciamos a false la variable booleana que usaremos para saber si hay algun 10 o no
        let bool = false;
        //Creamos un bucle para pedir numero
        do{
            num = prompt("Introduce la nota. -1 Para salir del programa");
            //Las notas deben estar comprendidos entre 0 y 10
            if(num<-1 ||  num > 10) alert("La nota debe estar comprendida entre 0 y 10");
            //Si durante el recorrido encontramos un 10, cambiamos la variable a true
            else if (num == 10) bool = true;
        }while(num!=-1)
        //Fuera el bucle, haciendo uso de la variable booleana imprimimos si hay dieces o no
        p.innerHTML = bool ? "SI" : "NO";

        //Modificamos boton
        boton.value = "Ocultar resultado"
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}
