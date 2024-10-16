function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Añadir un valor al array";

        console.log("Mensaje de prueba en consola")
        boton.value = "Ocultar Enunciado"
    }
    //En el caso de que el parrafo tenga algo, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado"
    }
}

let lista4 = [];

function verResultado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("resolucionID");
    let boton = document.getElementById("botonRes");
    let num = prompt("Mete el valor que añadir al array");
    //Llamamos a la función que añade el valor al array
    lista4 = addArray(lista4, num);
    //Añadimos la cadena al resultado
    p.innerHTML += "Array: "+lista4+" - Tamaño del array: "+calcularLength(lista4)+"<br>";
    
}


function addArray(lista, numero){
    lista[calcularLength(lista)] = numero;
    return lista;
}

function calcularLength(lista){
    //Iniciamos un contador
    let contador = 0;
    //Fumada de como recorrer un hipotetico array vacio sin que explote
    for (let i=0; lista[i]!==undefined; i++){
        contador++;
    }
    return contador;
}