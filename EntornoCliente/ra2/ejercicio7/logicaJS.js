function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un número N. La aplicación mostrará en la parte destinadapara tal efecto, todos los impares desde N (inclusive) hasta 1, con las siguientes condiciones: <br> ● Cada número se mostrará en una línea distinta. <br> ● Controlar que N siempre será mayor o igual a 1. En caso contrario, mostrar advertencia y volver a solicitar N."

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
        //Creamos un un bucle en el que le pedimos un número hasta que meta un input correcto
        let num = 0;
        do{
            //Pedimos que meta el valor
            num = prompt("Introduce un número. Debe ser mayor o igual que 1");
            //Si es menor que 2, mostramos alert y seguimos pidiendo numeros
            if (num<1) alert("Debes introducir un número mayor o igual a 1");
        }while(num<1)
        //Una vez salgamos del bucle, ya tenemos el número mayor que 2
        for(let i=1; i<=num; i++){
            if(i%2!=0) p.innerHTML += i+"<br>";
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
