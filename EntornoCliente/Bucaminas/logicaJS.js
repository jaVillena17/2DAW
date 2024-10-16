/*let matriz = new Array;
let p = document.getElementById("cosa");
console.log("parrafo");

for (let i = 0; i < 3; i++) {
    let nuevo =  [0,0,0];
    matriz[i]=nuevo;
}
console.log(matriz);
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        p.innerHTML += matriz[i][j]
    }
    p.innerHTML += "<br>"
}*/

let matriz = [[0,0,0],
            [0,1,0],
            [0,0,0]];

let wrapper = document.getElementById("wrapper");

//Imprimimos la matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        wrapper.innerHTML += '<div class="cell">aasdf</div>'
    }
}
