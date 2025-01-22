let nivel = document.querySelector("h2")
//El nivel acual será el tamaño del historial
let currentLevel = history.length;
const minLevel = 1;
const maxLevel = 5;
nivel.innerHTML +=  " " + currentLevel;
actualizarImagen()

//Funcnón que sube el currentLevel si es menor que 5
function levelUp(){
    if(currentLevel < 5){
        currentLevel++;
        //history.forward();
        nivel.innerHTML =  "Nivel " + currentLevel;
        actualizar();
        actualizarImagen();
    }
    
}

function levelDown(){
    if(currentLevel > 1){
        currentLevel--;
        //history.back();
        nivel.innerHTML =  "Nivel " + currentLevel;
        actualizar();
        actualizarImagen();
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
//Función que modifica la imagen dependiendo del current level
function actualizarImagen(){
    let image = document.querySelector("img");
    switch(currentLevel){
        case 1:
            image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/c/ca/Minesweeper_1.svg")
            break;
        case 2:
            image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/44/Minesweeper_2.svg")
            break;
        case 3:
            image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/0/08/Minesweeper_3.svg")
            break;
        case 4:
            image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/4f/Minesweeper_4.svg")
            break;
        case 5:
            image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/46/Minesweeper_5.svg")
            break;

    }
}
//Abrimos el buscaminas y lo metemos en el centro de la pantalla
function buscaminas(){
    console.log("asdf")
    //Al hacer el open, introducimos el nivel actual en la url para pasarsela al codigo del buscaminas como un "GET"
    let ventanaJuego =  window.open(`Bucaminas/index.html?level=${currentLevel}`, "", "height=600,width=500");
    ventanaJuego.moveTo(720, 250);
    
    
}