let title = document.getElementById("title");
let subtitle = document.getElementById("nav");
let ubi = document.getElementById("location")

let nav = navigator.userAgentData.brands[2].brand;


let version = navigator.userAgentData.brands[2].version

title.innerHTML += nav;
subtitle.innerHTML = nav + " - Versión: " + version

function exito(position){
    ubi.innerHTML += `<label>Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}</label>`
}
function error(position){
    msgError = "No se pudo encontrar la localización"
}

navigator.geolocation.getCurrentPosition(exito, error);

let mobile = navigator.userAgentData.mobile;
if(mobile){
    let radio = document.getElementById("radio2");
    radio.setAttribute("checked","");
}else{
    let radio = document.getElementById("radio1");
    radio.setAttribute("checked","");
}
