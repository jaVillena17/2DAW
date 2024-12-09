function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase con letras y números.Crea una función que reciba como argumento esa frase y devuelva la suma de todos los dígitos contenidos en la frase.";
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
        //Solicitamos una cadena de caracteres
        let cad = prompt("Introduce una frase con letras y numeros");

        //Llamamo a la función
        p.innerHTML = suma(cad);


        //Cambioamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}

function suma(cadena){
    //Creamos una variable donde iremos sumando los valores, y la cadena conde meteremos el historial de numeros
    let sumatoria = 0;
    let history = "";
    //Expresión regular donde comprobamos que es un número
    const regEx = /[0-9]/

    //Recorremos la cadena
    for (let i = 0; i < cadena.length; i++) {
        //Si es un número
       if(regEx.test(cadena.charAt(i))){
        //Lo sumamos tanto a la sumatoria como a la cadena
        sumatoria += parseInt(cadena.charAt(i));
        history += `${cadena.charAt(i)} + `
       } 
    }
    //Le quitamos el ultimo signo + y los espacios que se han colado al poner el ultimo número
    history = history.substring(0, history.length -2)
    //Devolvemos la cadena
    return  sumatoria + ` (${history})`
}