function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario el número de horas trabajadas.La aplicación mostrará en la parte destinada para tal efecto, el salario neto semanal de un trabajador en función del número de horas trabajadas y la tasa de impuestos de acuerdo a las siguientes reglas: Las primeras 35 horas se pagan a tarifa normal. Las horas que pasen de 35 se pagan a 1.5 veces la tarifa normal. Al sueldo bruto se le aplicarán las siguientes tasas de impuestos: Los primeros 500 euros son libres de impuestos. Los siguientes 400 tienen un 25% de impuestos. Los restantes un 45% de impuestos."

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
        //Solicitamos al usuario que introduzca el número de horas trabajadas
        let horasTrabajadas = parseInt(prompt("Introduce el número de horas que has trabajado"));
        //Solicitamos al usuario que introduzca el número de horas trabajadas
        let precioHora = parseInt(prompt("Introduce el salario que percibes por hora"));
        let salBruto, salNeto;

        //Calculamos el salario bruto, teniendo en cuenta las horas extras: No controlamos el error de introducir números negativos
        if(horasTrabajadas <= 35){
            //Si son hasta 35 horas, hacemos el calculo tal cual
            salBruto = precioHora * horasTrabajadas;
        }else{
            //Si son mas, calculamos el salario  correspondiente a las horas extra y los sumamos
            let diff = horasTrabajadas - 35;
            let salExtra = diff * (precioHora * 1.5);
            salBruto = (precioHora * 35) + salExtra;
        }

        //En base al salario bruto, calculamos el salario neto
        if(salBruto <= 500){
            //Si es menor de 500, el importe es integro
            p.innerHTML = salBruto;
        }else if(salBruto <= 900){
            //Si está entre 500 y 900, caculamos la diferencia de salario bruto, calculamos porcentaje y se lo sumamos a los 500 euros base
            let diff = salBruto - 500;
            let segundoTramo = diff - (diff*25/100);
            p.innerHTML = 500+segundoTramo;
        }else{
            //Si es mayor de 900, le aplicamos el 45% al restante y se lo sumamos a la base y al segundo tramo completo
            let diff = salBruto - 900;
            let segundoTramo = 400 - (400*25/100);
            let tercerTramo = diff - (diff*45/100);
            p.innerHTML = 500+segundoTramo+tercerTramo;
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
