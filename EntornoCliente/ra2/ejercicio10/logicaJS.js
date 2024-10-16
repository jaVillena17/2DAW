function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número. La aplicación mostrará en la parte destinada para tal efecto, \"SI\", si el número es primo, \"NO\" en caso contrario. El número puede tomar los valores 1 <= número <= 10000.";
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
        //Solicitamos al usuario que introduzca un número para comprobar si es primo o no
        let num = prompt("Introduce el número que deseas comprobar si es primo");
        //Iniciamos una variable booleana en la que guardaremos si encontramos un número por el que se pueda dividir
        let primo=true;
        //Controlamos entrada
        if(num < 1 || num > 10000) p.innerHTML = "<b>Error:</b> Introduce un valor para número entre 1 y 100000";
        //Si el número es 2, automáticamente es primo
        else if (num==2) p.innerHTML = "SI";
        //Si el número es par, o 1 automáticamente no es primo
        else if(num%2==0 || num == 1) p.innerHTML = "NO";
        else{
            //Realizamos un bucle for que cominece en 3 y sume de 2 en 2 para solo dividir por números primos, mientras i sea menor a la mitad del número
            for (let i = 3; i < num/2; i+=2){
                //Si el resto de dividir el número entre i llega a ser 0, esto quiere decir que el número no es primo
                if (num%i==0) primo = false;
            }
            //Completamos el párrafo con la solución
            if (primo) p.innerHTML = "SI";
            else p.innerHTML="NO";
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
