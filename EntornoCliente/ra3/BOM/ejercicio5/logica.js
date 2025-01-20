//Primera parte del ejercicio, haciendo console.log de los diferente metodos
console.log(document.getElementById("p2").innerHTML+" Obtenido con document.getElementById");
console.log(document.getElementsByTagName("p")[1].innerHTML+" Obtenido con document.getElementsByTagName");
console.log(document.getElementsByClassName("p2")[0].innerHTML + " Obtenido con document.getElementsByClassName");
console.log(document.querySelector(".p2").innerHTML + " Obtenido con document.querySelector");

//Función que modifica el 2 y 3 párrafo
function modificarParrafos(){
    //Obtenemos un array con los párrafos
    let parrafos = document.querySelectorAll("p");
    //Modificamos los de las segunda y tercera posicion
    parrafos[1].innerHTML = "Éste es el nuevo contenido del segundo párrafo"
    parrafos[2].innerHTML = "Éste es el nuevo contenido del <strong>tercer párrafo</strong>"
}
//Función que elimina el cuarto párrafo
function eliminarParrafo(){
    //Obtenemos un array con los párrafos
    let parrafos = document.querySelectorAll("p");
    //Con outerHTML borramos el contenido y las propias etiquetas
    parrafos[3].outerHTML = "";
}
//Función que crea un párrafo
function crearParrafo(){
    //Obtenemos con querySelector el div contenedor de todos los p
    let container = document.querySelector(".parrafos");
    //Con createElement creamos un p y le damos el contenido
    let nuevoP = document.createElement("p")
    nuevoP.innerHTML = "Nuevo párrafo creado mediante botón"
    //Volvemos a hacerlo con la explicación
    let explicacion = document.createElement("p")
    explicacion.innerHTML = "La La diferencia entre innerHTML y textContent es <strong>Que innerHTML afecta al todo el contenido de dentro de las etiquetas del elemento, incluyendo otras etiquetas que puedan haber dentro, mientras que textContent solo afecta al texto plano</strong>"

    //Con append, insertamos el parrafo en la ultima posiocion
    container.append(nuevoP);

    //Obtenemos la lista de los parrafos hijos del contenedor
    let parrafos = container.children

    //Con insert before, insertamos en poarrafo en la posicion que deseamos
    container.insertBefore(explicacion, parrafos[2])

}
//Función que modifica la url del src de una imagen
function modificarImagen(){
    //obtenemois la imagen
    let img = document.querySelector("img");

    //Modificamos el atributo src con setAttribute
    if(img.getAttribute("src") == "https://upload.wikimedia.org/wikipedia/commons/8/84/Mozilla_Firefox_3.5_logo.png"){
        img.setAttribute("src", "../ejercicio3/chrome.svg");
    }else{
        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/8/84/Mozilla_Firefox_3.5_logo.png");
    }
}

//Funcion que obtiene y modifica el label de un formulario
function modificarForm(){
    let label = document.querySelector("label");

    label.innerHTML = "Año de nacimiento"
}
//Prueba document.write
function documentWrite(){
    document.write("Esto es lo que ocurre cuando se usa documentWrite con la página ya cargada");
}