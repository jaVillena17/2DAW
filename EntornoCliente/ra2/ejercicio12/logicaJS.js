function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una secuencia de números enteros. Adicionalmente, la aplicación pedirá al usuario un número comprendido del 1 al 100 que determinará la cantidad de números de la secuencia mencionada. Tras ello se leerán X números en las próximas X ventanas emergentes. La aplicación mostrará en la parte destinada para tal efecto, el número más alto y el más bajo, cada uno en una línea distinta.";

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
        let menor = 0;
        let mayor = 0;
        //Solicitamos la cantidad de números que va a meter
        let num = prompt("Introduce la cantidad de números que quieres meter. Deben ser entre 1 y 100");
        if(num>=1 && num<=100){
            //Mediante bucle for le vamos pidiendo números y los metemos en el array
            for (let i=1; i<=num; i++){
                //Pedimos número
                let next = parseInt(prompt("Introduce el siguiente número"));
                //Si la variables no están iniciadas, las iniciados con el primer número
                if(menor == 0 || mayor == 0){
                    menor = next;
                    mayor = next;
                }else{
                    if(next<menor) menor = next;
                    if(next>mayor) mayor = next;
                }
            }
            //Añadimos la solución
            p.innerHTML = "<b>Número más alto: </b>"+mayor+"<br><b>Número más bajo: </b>"+menor;
            
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

