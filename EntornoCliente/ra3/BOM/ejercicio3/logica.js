//Obtenemos el botón
let but = document.getElementById("butID");
//Le introducimos el sistema operativo
but.innerHTML += " " + navigator.userAgentData.platform;