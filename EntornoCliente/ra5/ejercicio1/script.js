window.onload = iniciar;

function iniciar() {
    document.querySelector("button[type = 'submit']").addEventListener('click', validar, false);
}

function validar(e){
    //Borramos los errores
    borrarErrores();
    //Sacamos todos los inputs
    let inputs = document.querySelectorAll("input");
    //Para cada input

    for (let i = 0; i < inputs.length; i++) {
        //Llamamos a la función error en el caso de que no se cumpla una condición
        if(!inputs[i].checkValidity()){
            if(inputs[i].validity.valueMissing){
                error(inputs[i], "El campo es requerido", e);
                return false;
            }else if(inputs[i].validity.tooLong){
                error(inputs[i], "Ha excedido el número máximo de caractéres", e);
                return false;
            }else if(inputs[i].validity.tooShort){
                error(inputs[i], "No ha llegado al número mínimo de caractéres", e);
                return false;
            }else if(inputs[i].validity.patternMismatch){
                error(inputs[i], "Error, el formato no es correcto. Pruebe de nuevo", e);
                return false;
            }else{
                return false;
            }
        }

    }
    return true;
}
//Función de error
function error(input, msgError, e){
    //Imprimimos el mensaje del error
    let parrafoError = document.querySelector("p#msgError");
    parrafoError.innerHTML = msgError;

    //Añadimos la clase error al elemento
    input.classList.add("error")

    //Llevamos el foco al elemento
    input.focus();

    //Evitamos el comportamiento de submit del button
    e.preventDefault();
}

function borrarErrores(){
    //Sacamos todos los elementos con clase error
    let errores = document.querySelectorAll(".error");

    errores.forEach((elemento) => {
        //Le quitamos la clase error
        elemento.classList.remove("error");
    })

    //Quitamos el texto informativo
    let parrafoError = document.querySelector("p#msgError");
    parrafoError.innerHTML = "";
}

//Segunda parte, promt de login
let nombre = prompt("Hola! Introduce tu nombre");

let parrafo = document.getElementById("modP");
//Si hay información con ese nombre ponemos un texto, y si no, pues no pero guardamos el nombre
if(window.localStorage.getItem(nombre)){
    parrafo.innerHTML = `¡Bienvenido <b>${nombre}</b>, que delicatessen deseas probar hoy!`
}else{
    window.localStorage.setItem(nombre, 1);
    parrafo.innerHTML = `¡Bienvenido de nuevo <b>${nombre}</b>!, ¿repetimos?`
}

//Añadimos los eventos a los botones de compra
let botonesProducto = document.querySelectorAll("button.buy-button")

botonesProducto.forEach(boton => {
    boton.addEventListener('click', addProduct)
})

//Función que nos añade los productos y el precio al resumen
function addProduct(e){
    let producto = e.target.parentNode;
    console.log(producto)
}