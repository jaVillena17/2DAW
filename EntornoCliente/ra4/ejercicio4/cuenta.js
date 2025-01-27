var clientes = window.opener.cuenta;

var parrafo = document.querySelector(".cuenta");

console.log(window.opener.cuenta)

for (cliente in clientes){
    let productos = cliente.productos

    for (prod in productos){
        parrafo.innerHTML = `${prod[0]}...........${prod[1]}`
    }
}

