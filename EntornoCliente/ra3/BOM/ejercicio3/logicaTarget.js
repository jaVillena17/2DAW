//Obtenemos los 3 párrafos a modiciar con la información
let title = document.getElementById("title");
let subtitle = document.getElementById("nav");
let ubi = document.getElementById("location")

//Sacamos el navegador y su version
let nav = navigator.userAgentData.brands[2].brand;
let version = navigator.userAgentData.brands[2].version
//Los metemos en el contenido
title.innerHTML += nav;
subtitle.innerHTML = nav + " - Versión: " + version

//Fuciones de exito y error para getCurrentPosition()
function exito(position){
    //Si funciona, imprimimos las coordenadas
    ubi.innerHTML += `<label>Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}</label>`
}
function error(position){
    msgError = "No se pudo encontrar la localización"
}
//Ejecutamos la funcionm
navigator.geolocation.getCurrentPosition(exito, error);
//Esto nos devuelve true si estamos en un dispositivo movil y false si no
let mobile = navigator.userAgentData.mobile;
//Dependiendo de esto, hacemos que el radio correspondiente esté ya marcado
if(mobile){
    let radio = document.getElementById("radio2");
    radio.setAttribute("checked","");
}else{
    let radio = document.getElementById("radio1");
    radio.setAttribute("checked","");
}
