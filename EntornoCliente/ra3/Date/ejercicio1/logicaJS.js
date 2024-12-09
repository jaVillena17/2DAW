function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se muestre en la parte destinada para tal efecto la siguiente cadena de caracteres en función de la hora y el día.“Buenos días, que tenga un feliz <diaSemana>” : de 6 de la mañana a las 12 del mediodía.“Buenas tardes, disfrute de su tarde del <diaSemana>” : de las 12 del mediodía hasta las 20h.“Buenas noches, le deseamos lo mejor para el <diaSemana> próximo” : de las 20h hasta las 6 de la madrugada.";
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
        //Sacamos la hora de la fecha actual actual
        const fecha = new Date();
        //Sacamos la hora
        const hora = fecha.getHours();
        //Sacamo el día de la semana, con un array de nombres y sacamos su indice
        const semana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sábado",]
        const dia = semana[fecha.getDay()];
        if(hora >= 6 && hora <12){
            p.innerHTML = `Buenos dias, que tenga un feliz ${dia}`;
        }else if(hora >= 12 && hora < 20){
            p.innerHTML = `Buenas tardes, que tenga un feliz ${dia}`;
        }else if(hora >= 20 && hora < 24){
            p.innerHTML = `Buenas noches, le deseamos lo mejor para el ${semana[fecha.getDay()+1]} próximo`;
        }else{
            p.innerHTML = `Buenas noches, le deseamos lo mejor para el ${dia} próximo`;
        }
        //Cambioamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
    
}
