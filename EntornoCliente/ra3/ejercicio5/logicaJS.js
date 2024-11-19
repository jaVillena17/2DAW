function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un código de cliente. <br>Dicho código contiene tres partes separadas por un guión:<br>- Dos caracteres:  CP: cliente particular, CE: empresa <br>- Dos dígitos: 10 Local, 11 Autonómico, 12 Nacional, 20 Internacional<br>- Una cifra que indica el número de años de antigüedad del cliente.<br> Crea una función que decodifique dicho código de cliente. Adicionalmente, si el código es erróneo la función deberá informar del tipo de error o errores."
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
        //Solicitamos que introduzca un código de cliente
        let cod = prompt("Introduce código de cliente. Recuerda que debe introducir los datos separados por guiones");

        p.innerHTML = decode(cod);

        //Cambiamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}

function decode(cadena){
    //Creamos la expresión regular que comprueba que es válido
    const regEx = /^C[PE]-10-\d|(C[PE]-11-\d)|(C[PE]-12-\d)|(C[PE]-20-\d)$/;
    //Si no es válido, comprobamos por qué
    if(!regEx.test(cadena)){
        if(cadena.charAt(1) != "P" && cadena.charAt(1) != "E") return "<b>Error: </b>El tipo de cliente introducido no es correcto"
        else if(cadena.charAt(2) != "-" || cadena.charAt(5) != "-") return "<b>Error: </b>Introduce el código separado por guiones"
    }else{
        //Si lo es, sacamos el tipo de cliente
        let cliente = (cadena.charAt(1) == "P") ? " cliente particular" : "empresa"
        //El origen
        let origen = "";
        let tmp = cadena.substring(3,5);
        switch(tmp){
            case "10":
                origen = "local";
                break;
            case "11":
                origen = "autonómico";
                break;
            case "12":
                origen = "nacional";
                break;
            case "20":
                origen = "internacional"
                break;
       }
       //Devolvemos la cadena resultado
        return `El código introducido pertenece a un ${cliente} de origen ${origen} con ${cadena.charAt(6)} años de antiguedad`
    }

}