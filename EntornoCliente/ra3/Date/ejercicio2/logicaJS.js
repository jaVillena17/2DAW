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
        //Solicitamos las 2 fechas
        const date1 = askDate();
        const date2 = askDate();
        
        //Calculamos la diferencia absoluta de las dos fechas. Esto nos retorna los milisegundos de diferencia
        let diff = Math.abs(date1 - date2);
        //Iniciamos variables con los milisegundos que hay en un dia, una hora y en un minuto
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = minute * 60 * 24;
        //Hacemos la division sin resto de la cantidad de milisegundos total entre los dias y minutos para calcular la diferencia
        p.innerHTML = `Entre ambas fechas han transcurrido ${Math.floor(diff/day)} dias,`;
        //Restamos los dias al total
        diff =  diff - Math.floor(diff/day) * day;
        p.innerHTML += `${Math.floor(diff/hour)} horas y `;
        //Restamos los minutos
        diff -= Math.floor(diff/hour) * hour;
        p.innerHTML += `${Math.floor(diff/minute)} minutos.`;
        
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
    
}

function askDate(){
    //Creamos la expresion regular con el formato de la fecha
    const regEx = /^[\w]{4}\/[\w]{2}\/[\w]{2}\s[\w]{2}:[\w]{2}:[\w]{2}$/;
    //Pedimos la fecha
    let fecha = prompt("Introduce la fecha en formato XXXX/YY/ZZ HH:MM:SS");
    let date;
    //Comprobamos que es una fecha valida según el formato
    if(regEx.test(fecha)){
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
