function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase.Crea una función que reciba como argumento esa frase y devuelva el número de espacios, dígitos y letras  contenidos en la frase. Puedes usar expresiones regulares.";
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
        let cad = prompt("Introduce una frase");

        //Llamamo a la función
        p.innerHTML = contarChar(cad);


        //Cambioamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}

function contarChar(cadena){
    //Creamos una variable donde iremos sumando los valores, y la cadena conde meteremos el historial de numeros
    let contadorLetra = 0;
    let contadorNum = 0;
    let contadorEsp = 0;
    //Expresión regular donde comprobamos que es un número
    const regExLetra = /[A-Za-z]/
    const regExNum = /[0-9]/
    const regExEsp = /[ ]/

    //Recorremos la cadena
    for (let i = 0; i < cadena.length; i++) {
        if(regExNum.test(cadena.charAt(i))){
            contadorNum++;
        }else if(regExLetra.test(cadena.charAt(i))){
            contadorLetra++;
        }else if(regExEsp.test(cadena.charAt(i))){
            contadorEsp++;
        }
    }
    return `${contadorNum} dígitos, ${contadorEsp} espacios y ${contadorLetra} letras`
}