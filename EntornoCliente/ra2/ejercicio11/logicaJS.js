function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cantidad de dinero (controlar que sea múltiplo de 5) y tras ello desglose el cambio en billetes de 500,200,100,50,20,10,5 intentando dar el mínimo número de billetes. La aplicación mostrará en la parte destinada para tal efecto, el número mínimo de billetes.";

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
       //Solicitamos un número múltiplo de 5
       let cantidad = parseInt(prompt("Introduce una cantidad de dinero. Ten en cuenta que debe ser múltiplo de 5 "));
       //Comprobamos que es múltiplo de 5
       if(cantidad%5==0) {
        //Llamamos a la función recursiva que nos crea la cadena. Comentado
        //p.innerHTML = ""+cajero(num, 0);

        //Creamos un array donde tenemos los valores de los billetes y otro array donde vamos sumando contadores para cada valor de billete
        //La clave sería un mapa, pero no los hemos visto (creo)
        let billetes = [500,200,100,50,20,10,5];
        let contadores = [0,0,0,0,0,0,0];

        //creamos indice para los arrays
        let index = 0;

        //Creamos un bucle while en el que iremos restando la cantidad hasta que sea 0
        while (cantidad>0){
            //Si la cantidad es mayor que lo que le vamos a restar (valor de posición del array actual), lo restamos y sumamos contador
            if(cantidad>=billetes[index]){
                
                contadores[index]++;//Sumamos uno al cantidor de su posición
                cantidad -= billetes[index]//Restamos la cantidad
            }else{
                //Si es mas pequeño que el billete que tenemos seleccionado, sumamos 1 al index para pasar al siguiente billete
                index++;
            }
        }
        
        console.log(contadores);
        //Después con un bucle for, lo imprimimos si el numero de contadores es mayor que 0
        for (let i=0; i<7; i++){
            if (contadores[i]!=0){
                p.innerHTML += `${contadores[i]} billetes(s) de ${billetes[i]} euros<br>`
            }
        }


       }else p.innerHTML = "<b>Error: </b>Introduce una cantidad para dinero múltiplo de 5";

        //Modificamos boton
        boton.value = "Ocultar resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
}

//Lo comento porque no se puede usar recursividad, pero tampoco quiero borrar el trabajo hecho
//Función recursiva que nos crea la cadena con la cantidad de billetes. Cantidad será el total a dividir en la iteracion, index será el billete
function cajero(cantidad, index){
    //Creamos un array con las distintas sumas de billetes
    const numeros = [500, 200, 100, 50, 20, 10, 5];
    
    //Creamos la cadena en la que meteremos los resultados
    let cadena = "";
    //Si hemos llegado al ultimo billete, devolvemos la cadena
    if(index == 7) return cadena;
    //Si la cantidad es menor que el billete, pasamos al siguiente billete
    else if(cantidad/numeros[index]<1) return cadena = cadena + cajero((cantidad%numeros[index]),index+1);
    //Sumamos a la cadena la cantidad y suma del billete y volvemos a llamar a la función con la cantidad que reste y el billete siguiente
    else return cadena = cadena + "<br>"+Math.trunc(cantidad/numeros[index])+" billete(s) de " + numeros[index]+" euros"+cajero((cantidad%numeros[index]),index+1);
}
