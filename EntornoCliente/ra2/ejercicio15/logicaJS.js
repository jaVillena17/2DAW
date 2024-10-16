function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número. La aplicación mostrará en la parte destinada para tal efecto, su factorial.<br><br>Dado que solo se puede calcular el factorial de un número natural, si se introduce un número negativo mostrar un mensaje de error y volver a pedir el número al usuario.";

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
        //Solicitamos 
        let num = parseInt(prompt("Introduce el número del que deseas conocer el factorial. Debe ser un número natural"));
        //Creamos el acumulado en el que guardaremos la sumatoria
        let add = 1;
        //Si el número no es negativo
        if(num>=0){
            //Hacemos un bucle for hasta que llegue a 1, reduciendo el numero desde num
            for(let i=num; i>0; i--){
                //Multiplicamos
                add = add*i;
            }
            p.innerHTML = `El factorial de ${num} es ${add}`;
        }else{
            p.innerHTML = "<b>ERROR: </b>Debes introducir un número natural";
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
