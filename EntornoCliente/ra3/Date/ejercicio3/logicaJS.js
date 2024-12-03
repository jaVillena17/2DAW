function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "RRealiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una fecha. Crea una función que reciba como argumento esa fecha y devuelva el número de días del mes introducido para ese año.";
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
        //Solicitamos las 2 fechas
        const date1 = askDate();
        alert(date1);
        
        
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
    
}

function askDate(){
    //Creamos la expresion regular con el formato de la fecha
    const regEx = /^[\w]{2}\/[\w]{2}\/[\w]{4}$/;
    //Pedimos la fecha
    let fecha = prompt("Introduce la fecha en formato DD/MM/YYYY");
    let date;

    //Comprobamos que es una fecha valida según el formato
    if(regEx.test(fecha)){
        //Creamos la cadena que le meteremos a la fecha
        let array = fecha.split("/");
        let ordenFecha = [];
        for (let i = array.length-1; i >= 0; i--) {
            ordenFecha.push(array[i])
        }
        fecha = ordenFecha.join("/");
        //Intentamos crear el objeto de la clase fecha con esa fecha
        date = new Date(fecha)
        //Comprobamos si al fecha se ha introducido bien o era una fecha incorrecta. Si es correcta devolvermos la fecha;
        if (date != "Invalid Date"){
            return date;
        }else{
            //Si es incorrecta, mostramos un alert y volvemos a llamar a la funcion
            alert("Esa fecha no existe. Introduzca una fecha válida");
            return askDate();
        }
        
    }else{
        //Si el patrón de la fecha no es correcto
        alert("Formato de fecha no válido, vuelva a intentarlo");
        return askDate()
    }
}
