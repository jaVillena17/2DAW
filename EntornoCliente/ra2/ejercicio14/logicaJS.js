function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras. El array de letras es: <br>var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];<br>Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A.<br>Con estos datos, realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número de DNI y la letra del DNI. La aplicación debe:<br>1.- Comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa vuelve a solicitar los datos mencionados<br>2.- Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente<br>3.- Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta y se le pide de nuevo que introduzca los datos volviendo al punto 1.<br>La aplicación mostrará en la parte destinada para tal efecto, un mensaje indicando que el número y la letra de DNI son correctos y el DNI introducido.";

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
        //Iniciamos variable booleana para controlar el bucle
        let exito = false;
        let end = false;
        //Iniciamos el array de las letras
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        //Iniciamos las variables en las que guardaremos los valores
        let num, letra;
        //Bucle en el que solicitamos los valores, si no son validos hacemos un alert y volvemos a intentarlo
        do{
            do{
                //Pedimos el número
                num = prompt("Introduce el número de tu dni");
                //Pedimos la letra y lo pasamos automáticamente a mayúscula
                letra = prompt("Introduce la letra en la que termina tu dni").toUpperCase();
                if(num < 0 || num > 99999999){
                    alert("El número no es válido, vuelve a intentarlo");
                }else{
                    exito = true;
                }
            }while(!exito)
            
            //Calculamos la letra que le corresponde al número que nos ha proporcionado
            let index = parseInt(num%23);
            //Comprobamos si coincide y mostraoms el resultado
            if(letras[index]==letra){
                p.innerHTML = "DNI CORRECTO";
                end = true;
            }else{
                alert("DNI INCORRECTO, VUELVE A INTENTARLO");
            }
        }while(!end);
        

        

        //Modificamos boton
        boton.value = "Ocultar resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}
