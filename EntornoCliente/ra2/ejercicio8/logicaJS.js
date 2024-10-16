function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos números X e Y. La aplicación mostrará en la parte destinada para tal efecto, la tabla de multiplicar del número X, hasta el valor Y, controlando las siguientes condiciones:<br> ● -50 <= X <= 50 <br>● 1 <= Y <= 20 <br> La tabla se mostrará con una entrada por línea y entre cada elemento habrá un único espacio de separación."

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
        //Solicitamos al usuario que introduzca los numero x e y
        let x = prompt("Introduce el primer número, el número que deseas multiplicar");
        let y = prompt("Introduce el número al que quieres llegar multiplicando");
        //Si el numero uno no está entre -50 y 50, lo mostramos como resultado
        if(x> 50 || x < -50) p.innerHTML = "Error: Introduce un valor para X entre -50 y 50.";
        //Si el número y no entra en el rango, tambien mostramos el mensaje
        else if(y<1 || y>20) p.innerHTML = "Error: Introduce un valor para Y entre -1 y 20.";
        //Si los dos valores son válidos
        else{
            //Mediante un bucle for, realizamos cada multiplicaciión y la añadimos al párrafo solución
            for (let i=1;i<=y; i++){
                p.innerHTML += `${x} x ${i} = `+x*+"<br>"; 
            }

        }

        //Modificamos boton
        boton.value = "Ocultar resultado"
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}
