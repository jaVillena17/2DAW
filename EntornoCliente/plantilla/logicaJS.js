function verEnunciado(){
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    if(p.innerHTML.length==0){
        p.innerHTML = "Realiza la lógica de programación para que el usuario introduzca tres valores por teclado. Si al menos uno de ellos es mayor de 10, mostrar en una ventana emergente \"Alguno mayor que 10\". En caso contrario mostrar \"Ninguno es mayor que 10'\"";
        console.log("Mensaje de prueba en consola")
        boton.value = "Ocultar Enunciado"
    }
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado"
    }
}

function verResultado(){
    let resolucion = ("Código con la resolución")
}
