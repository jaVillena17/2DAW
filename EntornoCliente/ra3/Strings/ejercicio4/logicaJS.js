function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cadena y el carácter buscado.Crea una función recursiva que cuente el número de veces que el carácter introducido por el usuario aparece en la cadena introducida por el usuario."
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
        //Solicitamos que introduzca una frase
        let cad = prompt("Introduce una frase");
        //Y después una letra
        let letra = pedirLetra();
        //Llamamo a la función
        let cont = recursiva(cad, letra);
        p.innerHTML = `El carácter ${letra} aparece ${cont} veces en la cadena`;

        //Cambioamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}

//Función recursiva para contar apariciones
function recursiva(cadena, letra){
    //Sacamos el ultimo indice en el que encontramos la letra
    let index = cadena.lastIndexOf(letra);
    //Cortamos la cadena desde el principio hasta que se encuentra esa ultima letra
    let cadenaCortada = cadena.substring(0, index);
    //Si el indice es -1 (lo que devuelve lastIndexOf al no encontrar nada), salimos de la funcuón recursiva porque ya no quedan letras que contar
    if(index == -1){
        return 0;
    }else{
        //Si lo ha encontrado, sumamos 1 y volvemos a llamar a la funcion con la cadena recortada
        return 1 + recursiva(cadenaCortada, letra)
    }
}
//Función recursiva para pedir una letra
function pedirLetra(){
    //Declaramos la variable regex que comprueba que se introduce una letra
    const regEx = /[A-Za-z]/
    //Pedimos letra
    let letra = prompt("Introduce una letra")
    if(regEx.test(letra)){
        return letra;
    }
    else{
        alert("Debe ser una letra")
        return pedirLetra();
    }
}