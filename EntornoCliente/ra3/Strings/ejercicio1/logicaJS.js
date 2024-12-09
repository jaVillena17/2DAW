function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cadena de caracteres. Crea una función que reciba como argumento esa cadena de caracteres y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento";
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
        let cad = prompt("Introduce una frase o palabra");

        //Llamamo a la función
        p.innerHTML = vocales(cad);


        //Cambioamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
    
}

function vocales(cadena){
    //Creamos un array con las vocales y otro con contadores para cada vocal
    let vocal = ['a','e','i','o','u'];
    let contadores = [0,0,0,0,0];
    //Creamos un indice para recorrer estos arrays
    let indice = 0;
    //Creamos expresion regular con la que comprobamos que estemos ante una vocal 
    const regExVocales = /[aeiou]/;
    //Iniciamos cadena donde meteremos el resultado final
    let nueva = "";
    //Recorremos cada caracter de la cadena
    for (let i = 0 ; i < cadena.length; i++){
        //Si la letra de esa posicion en una vocal
        if(regExVocales.test(cadena.charAt(i))){
            //Buscamos que vocal el con un while, que irá avanzando la posicioón del array de vocales hasta llegar a ella
            while(vocal[indice] != cadena.charAt(i)){
                indice++;
            }
            //Una vez termine el bucle, estaremos en la vocal correcta, sumamos 1 a su contador
            contadores[indice]++;
        }
        //Devolvemos el indice a cero para volver a empezar
        indice = 0;
    }

    //Mediante un bucle for formateamos el resultado final para mostrar cada letra con su contador
    for (let i = 0; i<vocal.length; i++){
        nueva += `${vocal[i]}:${contadores[i]}, `;
    }
    //Retornamos la cadena
    return nueva;
}