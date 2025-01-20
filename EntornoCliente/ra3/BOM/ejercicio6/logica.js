function cambiarEstilo(){
    //Obtenemos la primera hoja de estilos
    let stylesheet = document.styleSheets[0];
    //Obtenemos las "reglas" o bloques de la hoja de estilo
    let rules = stylesheet.cssRules;
    //En la posicion 0 tenemos la primera y unica, a la que modificamos el color
    rules[0].style.color = "blue";
}