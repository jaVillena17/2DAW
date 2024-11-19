function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "RRealiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos cadenas. Crea una función que sea capaz de encontrar los caracteres comunes entre dos palabras. La función recibe como argumentos dos palabras o frases y devuelve una cadena con los caracteres que haya en común entre ambas ordenados de menor a mayor.Se desechan los espacios en blanco. No se tiene en cuenta el caso (mayúsculas o minúsculas)"
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
        //Solicitamos que introduzca un código de cliente
        let cad1 = prompt("Introduce la primera cadena");
        let cad2 = prompt("Introduce la segunda cadena");

        p.innerHTML = coincidencias(cad1, cad2);

        //Cambiamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}

function coincidencias(string1, string2){
    //Creamos array y cadena que devolveremos
    let lista = [];
    let cad = "";

    //Recorremos cada caracter, si no es un espacio, no está ya en el array, y está en las dos cadenas
    for (let i = 0; i < string1.length; i++) {
        let letra = string1.charAt(i).toLowerCase();
        if(letra != " " && !lista.includes(letra) && string2.toLowerCase().includes(letra)){
            //lo metemos en el array
            lista.push(letra);
        }
        
    }
    //Ordenamos el array y lo recorremos para meter sus valores en la cadena
    lista.sort();
    for (let i = 0; i< lista.length; i++) {
      cad += lista[i]
    }
    return cad;
}

