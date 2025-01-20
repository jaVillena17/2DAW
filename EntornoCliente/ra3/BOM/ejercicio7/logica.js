let nivel = document.querySelector("h2")
//El nivel acual será el tamaño del historial
let currentLevel = history.length;
const minLevel = 1;
const maxLevel = 5;
nivel.innerHTML +=  " " + currentLevel;
//Funcnón que sube el currentLevel si es menor que 5
function levelUp(){
    if(currentLevel < 5){
        currentLevel++;
        //No funciona, si no abro una nueva pestaña no se puede, puedo intentar abrir la misma pero el historial no se actualiza
        //La unica forma de hacerlo (creo) con back y forward es literalmente crear 5 html distintos
        //history.forward();
        nivel.innerHTML =  "Nivel " + currentLevel;
        actualizar();
    }
    
}

function levelDown(){
    if(currentLevel > 1){
        currentLevel--;
        //history.back();
        nivel.innerHTML =  "Nivel " + currentLevel;
        actualizar();
    }
}
//Función que modifica los estilos de los botones cuando hemos llegado a 1 o 5 para desabilitarlos visualmente
function actualizar(){
    let leftButton = document.querySelector("button.left");
    let rightButton = document.querySelector("button.right");

    if(currentLevel == 1){
        leftButton.classList.add("disabled");
    }else if(currentLevel == 5){
        rightButton.classList.add("disabled");
    }else{
        leftButton.classList.remove("disabled");
        rightButton.classList.remove("disabled");
    }
}