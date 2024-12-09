function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = " Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase o palabra. Crea una función que reciba dicha frase o palabra, como resultado la función determinará si es o no un palíndromo."
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
        let cad = prompt("Introduce la frase que deseas comprobar si es palíndromo");

        p.innerHTML = testPalindromo(cad);

        //Cambiamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}

function testPalindromo(frase){
    let bool = true;
    const cadena = transform(frase);
    for (let i = 0, j = frase.length-1; i < j; i++, j--) {
        //Si caemos en un espacio, pasamos al siguiente indice
        if(cadena.charAt(i) == " ") i++;
        if(cadena.charAt(j) == " ") j--;
        //Si alguno es diferente, no es palíndromo. Lo pasamos a minúsculas para evitar conflictos
        if(cadena.charAt(i) != cadena.charAt(j)) bool = false;
    }

    return (bool) ? "El texto introducido es un palíndromo" : "El texto introducido no es un palíndromo"
}

//Función que recorre una cadena y la devuelve en minúscula, con las letras con tilde cambbiadas por las normales
function transform(cadena){
    //Pasamos la cadena a minúscula
    cadena = cadena.toLowerCase();
    //Creamos la cadena donde reescribiremos
    let cad = "";
    //Creamos arrays con tildes y su correspondiente letra normal
    const tildes = ["á", "é", "í", "ó", "ú"];
    const normal = ["a", "e", "i", "o", "u"];
    //recorremos el array
    for (let i = 0; i < cadena.length; i++) {
        //Si la letra está en el array de tildes, sumamos la la cadena resultado su letra normal
        if(tildes.includes(cadena[i])){
            cad += normal[tildes.indexOf(cadena[i])]
        }else{
            cad += cadena[i];
        }
    }
    return cad;
}