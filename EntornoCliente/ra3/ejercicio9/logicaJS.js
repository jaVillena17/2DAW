function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se muestre un menú cuyas opciones sean las distintas operaciones a realizar sobre la cadena. A continuación, se solicitará por pantalla, mediante una ventana emergente, al usuario una opción. La aplicación mostrará en la parte destinada para tal efecto, la salida de la operación efectuada sobre la cadena.<br>Las operaciones a realizar son: <br>1.- Indica el número total de caracteres incluyendo los espacios en blanco.<br>2.- Obtén el carácter que ocupa la octava posición.<br>3.- Obtén el código Unicode del primer carácter.<br>4.- Concatena la cadena con la cadena“ ¿roto? … ¿o mejorado?”. ¿Se modifica la primera cadena? (Muestra la respuesta a la pregunta también).<br>5.- Comprueba si la cadena termina con los caracteres “aro”.<br>6.-Convierte el valor Unicode 65 a su carácter equivalente.<br>7.-Comprueba si la cadena contiene los caracteres “lanzar”.<br>8.-Indica la posición que ocupa el primer carácter “a” de la cadena.<br>9.- Indica la posición que ocupa el último carácter “a” de la cadena.<br>10.- Compara la cadena con la cadena “Consiste en lanzar aros”. ¿Cuál iría en primer lugar? (Muestra la respuesta a la pregunta justificando la respuesta)<br>11.- Obtén todas las coincidencias de la cadena con la expresión regular “/ar/g”<br>12.- Obtén una nueva cadena con 3 repeticiones de la cadena actual.<br>13.- Reemplaza los caracteres “lanzar” por “coger”.<br>14.- Busca los caracteres “ste” en la cadena indica su posición.<br>15.- Obtén de la cadena los caracteres del primero al quinto.<br>16.- Obtén un array con todas las palabras de la cadena.<br>17.- Comprueba si la cadena comienza con los caracteres “Consiste en”.<br>18.- Obtén siete caracteres de la cadena a partir del segundo carácter.<br>19.- Obtén todos los caracteres de la cadena a partir del cuarto carácter.<br>20.- Convierte todos los caracteres de la cadena a mayúsculas.<br>21.- Convierte todos los caracteres de la cadena a minúsculas.<br>22.- Muestra la cadena original, deja la cadena con un único espacio en blanco entre palabras y muestra la cadena modificada. Resolverlo sin usar expresiones regulares ni arrays, solo el objeto String."
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
        let cadena = "Consiste en lanzar    aros";

        let opt = parseInt(prompt("Introduzca el número de la opción"));

        switch(opt){
            case 1:
                p.innerHTML = `El número total de caractéres es: ${cadena.length}`;
                break
            case 2:
                p.innerHTML = `El carácter de la octava posición es: ${cadena.charAt(7)}`;
                break;
            case 3:
                p.innerHTML = `El código unicode del primer carácter es: ${cadena.charCodeAt(0)}`;
                break;
            case 4:
                cadena.concat("¿roto?...¿o mejorado?");
                p.innerHTML = `La cadena despues de concatenar es: ${cadena}`;
                //Sigue siendo igual, las cadenas son inmutables
                break;
            case 5:
                p.innerHTML = `¿La cadena termina en 'aro'?: ${cadena.endsWith("aro")}`;
                break;
            case 6:
                p.innerHTML = `El representación para el valor unicode '65' es: ${String.fromCharCode(65)}`;
                break;
            case 7:
                p.innerHTML = (cadena.toLowerCase().includes("lanzar")) ? "La cadena contiene los caracteres `lanzar`" : "La cadena no contiene los caracteres `lanzar`"
                break;
            case 8:
                //Si no hay a, devolvería -1
                p.innerHTML = `El índice del primer carácter 'a' es: ${cadena.indexOf("a")}`;
                break;
            case 9:
                //Si no hay a, devolvería -1
                p.innerHTML = `El índice del último carácter 'a' es: ${cadena.lastIndexOf("a")}`;
                break;
            case 10:
                p.innerHTML = `¿Es menor la cadena original que "Consiste en lanzar aros"? El resultado es ${cadena.localeCompare("Consiste en lanzar aros")}, ya que la cadena original tiene 4 espacios, cada uno con una valor ASCII de 32, haciendo que el valor total sea mayor`;
                break;
            case 11:
                p.innerHTML = `Las coincidencias con la expresión regural /ar/g son: ${cadena.match(/ar/g)}`;
                break;
            case 12:
                let newString = cadena.repeat(3);
                p.innerHTML = `La nueva cadena generada de repetir la cadena original tres veces es: ${newString}`;
                break;
            case 13:
                p.innerHTML = `La cadena resultante de sustituir 'lanzar' por 'coger' es: ${cadena.replace("lanzar", "coger")}`;
                break;
            case 14:
                //Si no hubiese coincidencia, devolvería -1
                p.innerHTML = `El índice de los caracteres 'ste' en la cadena es: ${cadena.search("ste")}`;
                break;
            case 15:
                p.innerHTML = `La cadena de caracteres del primero al quinto es: ${cadena.substring(0,5)}`;
                break;
            case 16:
                let array = cadena.split("  ");

                p.innerHTML = `El arra: ${cadena.lastIndexOf("a")}`;
                break;
            
        }

        

        //Cambiamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}
