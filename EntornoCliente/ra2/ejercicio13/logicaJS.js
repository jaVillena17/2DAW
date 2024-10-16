function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una secuencia de números enteros. Adicionalmente, la aplicación pedirá al usuario un número comprendido del 1 al 100 que determinará la cantidad de números de la secuencia mencionada. Tras ello se leerán X números en las próximas X ventanas emergentes. La aplicación mostrará en la parte destinada para tal efecto, la línea en orden inverso.";

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
       //Creamos la cadena en el que guardaremos los números
       let cadena = "";
        
       //Solicitamos la cantidad de números que va a meter
       let num = prompt("Introduce la cantidad de números que quieres meter. Deben ser entre 1 y 100");
       if(num>=1 && num<=100){
           //Mediante bucle for le vamos pidiendo números y los metemos en el array
           for (let i=1; i<=num; i++){
               cadena = (prompt("Introduce el siguiente número"))+" "+cadena;
           }
           //Añadimos la solución
           p.innerHTML = cadena;
           
       }else{
           p.innerHTML = "<b>Error: </b>La cantidad debe estar entre 1 y 100";
       }


        //Modificamos boton
        boton.value = "Ocultar resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}
