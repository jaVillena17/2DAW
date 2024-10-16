function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario su sueldo (sin decimales) y los años de antigüedad.La aplicación mostrará en la parte destinada para tal efecto, el sueldo resultante:Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, triplicar el sueldo.Si el sueldo es inferior a 500, pero su antigüedad es menor a 10 años, doblar sueldo.Si el sueldo es mayor o igual a 500, mostrar sin cambios."

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
        //Pedimos al usuario que introduzca su sueldo sin decimales
        let sueldo = parseInt(prompt("Introduce tu sueldo, sin decimales"));
        let antiguedad = parseInt(prompt("Introduce los años que tienes de antiguedad"))

        //Si el sueldo es mayor que 500, mostramos el sueldo sin cambio
        if(sueldo >= 500){
            p.innerHTML = "" + sueldo;
        }//Si el sueldo es mejor que 500 y la antiguedad es mayor que 10, triplicamos
        else if(antiguedad >= 10){
            p.innerHTML = "" + sueldo*3;
        }//Si es menor, duplicamos
        else{
            p.innerHTML = "" + sueldo*2;
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
