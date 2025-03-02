window.onload = iniciar;

function cleanInputs(){
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    })
}

function iniciar() {
    document.querySelector("button[type = 'submit']").addEventListener('click', validar, false);
    cleanInputs();
    //Boton de borrado de pedidos
    document.getElementById("delete").addEventListener(`click`, deletePedido, false)

    //Evento de scroll al resumen del pedido
    document.querySelector(".primary-button").addEventListener('click', function(){
        document.getElementById("resumen").scrollIntoView();
    })
}

function validar(e){
    //Borramos los errores
    borrarErrores();
    //Sacamos todos los inputs
    let inputs = document.querySelectorAll("form#form1 input");
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
    //Pasamos estos datos la formulario de resumen por session storage
    e.preventDefault();
    if(nombre == ""){
        alert("Debes registrate antes de realizar un pedido")
    }
    else if(window.confirm("Deseas mandar estos datos?")){
        let nombreCompleto = `${inputs[0].value} ${inputs[1].value} ${inputs[2].value}`

        //Lo Guardamos en LocalStorage, ya que los datos del usuario persisten
        window.localStorage.setItem(`nombre${nombre}`, nombreCompleto)

        window.localStorage.setItem(`add${nombre}`, inputs[5].value)

        window.localStorage.setItem(`tlf${nombre}`, inputs[3].value)

        document.getElementById("fullName").value = nombreCompleto;
        document.getElementById("dire").value = inputs[5].value;
        document.getElementById("telefono").value = inputs[3].value;
    }
    
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
let nombre ="";
function login(e){
    //Segunda parte, promt de login
    nombre = prompt("Hola! Introduce tu nombre");

    let parrafo = document.getElementById("modP");
    //Si hay información con ese nombre ponemos un texto, y si no, pues no pero guardamos el nombre
    if(window.localStorage.getItem(nombre)){
        parrafo.innerHTML = `¡Bienvenido de nuevo <b>${nombre}</b>!, ¿repetimos?`;
    }else{
        window.localStorage.setItem(nombre, 1);
        parrafo.innerHTML = `¡Bienvenido <b>${nombre}</b>, que delicatessen deseas probar hoy!`;
    }
    
    //Cambiamos el boton a logOut
    let logOutButton = document.querySelector(".secondary-button");
    logOutButton.classList.add("logout");
    logOutButton.innerHTML = "Cerrar Sesión"
    logOutButton.setAttribute("onClick", "logOut()")

    //Buscamos los datos de usuario en local storage y los imprimimos en el resumen
    document.getElementById("fullName").value = (window.localStorage.getItem(`nombre${nombre}`)) ? window.localStorage.getItem(`nombre${nombre}`) :  "Actualmente no hay datos de contacto";
    document.getElementById("dire").value = (window.localStorage.getItem(`add${nombre}`)) ? window.localStorage.getItem(`add${nombre}`):  "Actualmente no hay datos de contacto";
    document.getElementById("telefono").value = (window.localStorage.getItem(`tlf${nombre}`)) ? window.localStorage.getItem(`tlf${nombre}`):  "Actualmente no hay datos de contacto";

    //Hacemos lo mismo con el session storage
    document.getElementById("productos").value = (window.sessionStorage.getItem(`productos${nombre}`)) ? window.sessionStorage.getItem(`productos${nombre}`):  "Actualmente no hay ningún pedido";
    document.getElementById("precio").value = (window.sessionStorage.getItem(`precio${nombre}`)) ? window.sessionStorage.getItem(`precio${nombre}`):  "Actualmente no hay ningún pedido";
}

function logOut(e){
    //Borramos todos los datos del usuario de local storage
    window.localStorage.removeItem(`${nombre}`);
    window.localStorage.removeItem(`nombre${nombre}`);
    window.localStorage.removeItem(`add${nombre}`);
    window.localStorage.removeItem(`tlf${nombre}`);

    //Y de session storage, por si acaso
    sessionStorage.removeItem(`productos${nombre}`);
    sessionStorage.removeItem(`precio${nombre}`);

    //Cambiamos el boton a logIn
    let logOutButton = document.querySelector(".secondary-button");
    logOutButton.classList.remove("logout");
    logOutButton.innerHTML = "Registrarse"
    logOutButton.setAttribute("onClick", "login()")

    //Limpiarmos los inputs
    cleanInputs();
}




//Añadimos los eventos a los botones de compra
let botonesProducto = document.querySelectorAll("button.buy-button")

botonesProducto.forEach(boton => {
    boton.addEventListener('click', addProduct)
})



//Función que nos añade los productos y el precio al resumen
function addProduct(e){
    let producto = e.target.parentNode.childNodes;
    
    let nombrePro = producto[3].innerHTML;
    let precio = parseFloat(producto[7].innerHTML.substring(0, 4).replace(",", "."));

    //Sacamos el input de los productos 
    let resumenProductos = document.getElementById("productos");
    let currentProductos = (resumenProductos.value == "Actualmente no hay ningún pedido") ? "" : resumenProductos.value;
    currentProductos += ` - ${nombrePro}`

    sessionStorage.setItem(`productos${nombre}`, currentProductos);

    resumenProductos.value = currentProductos

    //Hacemos los mismo con el input del precio
    let resumenPrecio = document.getElementById("precio")

    let currentPrecio = (resumenPrecio.value == "Actualmente no hay ningún pedido" || resumenPrecio.value == "") ?  0 : parseFloat(resumenPrecio.value);
    currentPrecio += precio

    sessionStorage.setItem(`precio${nombre}`, currentPrecio);

    resumenPrecio.value = currentPrecio;
}

function deletePedido(e){

}