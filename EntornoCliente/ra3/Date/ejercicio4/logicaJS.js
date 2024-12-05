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
        //Solicitamos una fecha
        const date = askDate();
        //Imprimimos el resultado
        p.innerHTML= getWeek(date);
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
    
}
function getWeek(date){
    //Creamos una fecha con el dia 1 del año
    let firstDay = new Date(date); 
    firstDay.setDate(1);
    firstDay.setMonth(0);
    //Creamos un array con las posiciones de los dias en los que emepezaría la primera semana del año
    const weekStart = [1,2,3,4]
    //Si el primer dia del año es uno de esos dias, calculamos la distancia entre la fecha introducida y el primer dia
    if(weekStart.includes(firstDay.getDay())){
        let diff = Math.abs(date - firstDay);
        const week = 1000 * 60 * 60 * 24 * 7;
        return `El número de semana para la fecha introducida es ${Math.floor(diff / week)+1}`;
    }else{
        //Si no, tenemos que valorar si el dia es antes o despues del primer dia en el que empezaria el año
        //Si es antes, lo contamos como una semana del año anterior
        if(getFirstDayOfWeekYear(date) > date.getDate()){
            firstDay.setFullYear(firstDay.getFullYear()-1);
            let diff = Math.abs(date - firstDay);
            const week = 1000 * 60 * 60 * 24 * 7;
            return `El número de semana para la fecha introducida es ${Math.floor(diff / week)+1} (ya que corresponde al año anterior)`;
        }
        //Si es el mismo dia o posterior, comenzamos la semana hay y calculamos
        else{
            firstDay.setDate(getFirstDayOfWeekYear(firstDay));
            let diff = Math.abs(date - firstDay);
            const week = 1000 * 60 * 60 * 24 * 7;
            return `El número de semana para la fecha introducida es ${Math.floor(diff / week)+1} (ya que corresponde al año anterior)`;
        }   
    }
}
//Obtenemos el que seria el primer dia de la semana a partir de una fecha que es el primer dia del año
function getFirstDayOfWeekYear(date){
    const weekStart = [1,2,3,4];
    const day = date.getDay();
        switch(day){
            case 0: 
                return date.getDate() + 1;
                break;
            case 1,2,3,4:
                return day;
                break;
            case 5:
                return date.getDate()+3
                break;
            case 6:
                return date.getDate()+2
                break;
            default:
                return "error";
                break;
        }
}


function askDate(){
    //Creamos la expresion regular con el formato de la fecha
    const regEx = /^[\d]{2}\/[\d]{2}\/[\d]{4}$/;
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

function bisiesto(fecha){
    //Sacamos el año de la fecha
    let year = fecha.getFullYear();
    
    //Comprobamos si es divisible entre 4
    if(year%4 == 0){
        //Comprobamos si estamos en el primer año de un siglo mayor que 1000
        //Si el año es menor que 1000 y divisible entre 4, es bisiesto
        if(year%100 != 0){
            return true
            //Si es mayor que 1000 y divisible entre 400, es bisiesto
        }else if(year%400 == 0){
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }
}
