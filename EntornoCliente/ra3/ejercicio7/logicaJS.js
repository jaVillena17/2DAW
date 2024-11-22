function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase y dos palabras.Crea una función que reciba tres argumentos: la frase y las dos palabras anteriores, como resultado la función insertará la segunda palabra detrás de la primera con un espacio por delante y por detrás. Si no se encuentra la palabra después de la que insertar se devuelve la frase original."
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
        //Solicitamos que introduzca un código de cliente
        let cad = prompt("Introduce una frase");
        let p1 = prompt("Introduce la primera palabra");
        let p2 = prompt("Introduce la segunda palabra")

        p.innerHTML = insertar(cad, p1, p2);

        //Cambiamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}

function insertar(frase, palabra1, palabra2){
    //Buscamos en que indice comienza la primera palabra
    let indexInicial = frase.search(palabra1);
    let result = "";
    console.log(indexInicial);
    //Si el indice es -1, lo cual devuelve search si no encuentra la palabra, retornamos la frase tal cual
    if(indexInicial == -1){
        return frase;
    }else{
        //Hacemos una substring desde el principio hasta el final de la palabra de lo que se desea poner detras
        let begin = frase.substring(0, findLastIndex(frase, indexInicial));
        console.log(begin);
        //Lo mismo para el final
        let end = frase.substring(findLastIndex(frase, indexInicial));
        //sumamos las dos cadenas poniendo la palabra a incrustar en medio
        return begin +" " + palabra2 + end;
    }
}

//Función pque devuelve el indice en el que termina una palabra y está el siguiente espacio para insertar otra
function findLastIndex(frase, start){
    //Igualamos el contador al indice inicial
    let contador = start;
    //Mientras que no sea un espacio, vamos avanzando
    while(frase.charAt(start) != " "){
        contador++;
        start++;
    }
    return contador;
}
