function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza la lógica de programación para que el usuario introduzca tres valores por teclado. Si al menos uno de ellos es mayor de 10, mostrar en una ventana emergente \"Alguno mayor que 10\". En caso contrario mostrar \"Ninguno es mayor que 10'\"";
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
        //Pedimos al usuario que introduzcas números
        let num1 = parseInt(prompt("Introduce el primer valor"));
        let num2 = parseInt(prompt("Introduce el segundo valor"));
        let num3 = parseInt(prompt("Introduce el tercer valor"));

        //Si alguno es mayor que 10
        p.innerHTML = (num1 > 10 || num2 > 10 || num3 > 10) ? "Alguno Mayor que 10" : "Ninguno Mayor que 10";
        //Cambioamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
    
}
