console.log(document.getElementById("p2").innerHTML+" Obtenido con document.getElementById");
console.log(document.getElementsByTagName("p")[1].innerHTML+" Obtenido con document.getElementsByTagName");
console.log(document.getElementsByClassName("p2")[0].innerHTML + " Obtenido con document.getElementsByClassName");
console.log(document.querySelector(".p2").innerHTML + " Obtenido con document.querySelector");

function modificarParrafos(){
    let parrafos = document.querySelectorAll("p");

    parrafos[1].innerHTML = "Éste es el nuevo contenido del segundo párrafo"
    parrafos[2].innerHTML = "Éste es el nuevo contenido del <strong>tercer párrafo</strong>"
}

function eliminarParrafo(){
    let parrafos = document.querySelectorAll("p");

    parrafos[3].outerHTML = "";
}

function crearParrafo(){
    let container = document.querySelector(".parrafos");
    
    let nuevoP = document.createElement("p")
    nuevoP.innerHTML = "Nuevo párrafo creado mediante botón"

    let explicacion = document.createElement("p")
    explicacion.innerHTML = "La La diferencia entre innerHTML y textContent es <strong>Que innerHTML afecta al todo el contenido de dentro de las etiquetas del elemento, incluyendo otras etiquetas que puedan haber dentro, mientras que textContent solo afecta al texto plano</strong>"

    container.append(nuevoP);
    let parrafos = container.children

    container.insertBefore(explicacion, parrafos[2])

}

function modificarImagen(){
    let img = document.querySelector("img");

    
    if(img.getAttribute("src") == "https://upload.wikimedia.org/wikipedia/commons/8/84/Mozilla_Firefox_3.5_logo.png"){
        img.setAttribute("src", "../ejercicio3/chrome.svg");
    }else{
        img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/8/84/Mozilla_Firefox_3.5_logo.png");
    }
}

function modificarForm(){
    let label = document.querySelector("label");

    label.innerHTML = "Año de nacimiento"
}

function documentWrite(){
    document.write("Esto es lo que ocurre cuando se usa documentWrite con la página ya cargada");
}