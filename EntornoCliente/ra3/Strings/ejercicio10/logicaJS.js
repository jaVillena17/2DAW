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

function verResultado(opcion){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("resolucionID");
    let boton = document.getElementById("botonRes");

    //Solicitamos que introduzca un código de cliente
    let cadena = prompt("Introduce la frase a codificar o descodificar");
    let code = pedirCodigo();

    p.innerHTML = (opcion == 0) ? codificar(cadena, code) : descodificar(cadena, code);    
}

function codificar(cadena, codigo){
    //Creamos una nueva cadena y un contador con el que iteraremos en el código
    let nueva = "";
    let contCode = 0;
    //Recorremos la cadena
    for (let i = 0; i < cadena.length; i++) {
        //Obtenemos el valor numérico unicode de la letra een esa oposición        
        let unicode = parseInt(cadena.charCodeAt(i));
        //Sumamos a la cadena que retornaremos la letra correspondiente al código unicode posterior que indiqu el código
        nueva += String.fromCharCode(unicode + parseInt(codigo.charAt(contCode)));
        //si hemos no hemos llegado al final de la clave, seguimos con la siguiente posicion, si hemos llegado, volvemos a la primera
        if(contCode < codigo.length -1){
            contCode++;
        }else{
            contCode = 0;
        }
    }
    return nueva;
}
//Igual que la función anterior pero restando al codigo unicode en lugar de sumando
function descodificar(cadena, codigo){
    let nueva = "";
    let contCode = 0;

    for (let i = 0; i < cadena.length; i++) {        
        let unicode = parseInt(cadena.charCodeAt(i));
        nueva += String.fromCharCode(unicode - parseInt(codigo.charAt(contCode)));
        if(contCode < codigo.length -1){
            contCode++;
        }else{
            contCode = 0;
        }
    }
    return nueva;
}

function pedirCodigo(){
    const regEx = /^[0-9]+$/
    let codigo = prompt("codigo");
    if(regEx.test(codigo)){
        return codigo;
    }else{
        return pedirCodigo()
    }
}