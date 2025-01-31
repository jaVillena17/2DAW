let p_zamburinas = ["zamburiñas", 3.5]
let p_mejillones = ["mejillones", 3.5]
let p_gambas = ["gambas", 3.5]
let p_vinoBlanco = ["vino blanco", 3.5]
let p_cerveVictoria = ["cerveza Victoria", 3.5]


class Mesa{
    //Constructor de la clase mesa
    constructor(ubicacion){
        this._ubicacion = ubicacion;
        this._clientes = [];
    }
    //Métodos get y set para la ubicacion
    get ubicacion(){
        return this._ubicacion;
    } 
    set ubicacion(num){
        this._ubicacion = num;
    }
    //Métodos get y set para los clientes
    get clientes(){
        return this._clientes;
    }
    set clientes(num){
        this._clientes = num;
    }

    
    //Función que nos añade un producto al cliente correspondiente
    addProducto(nombreP, idCliente){
        //Creamos un nuevo array con la lista de los cliente
        let lista = this._clientes;
        //Buscamos la posicion del cliente con esa id dentro del array de clientes
        let indexCliente = lista.map(cliente => cliente.idCliente).indexOf(idCliente)
        //Sacamos la lista de productos de ese cliente
        let productosCliente = lista[indexCliente].productos;

        //Añadimos el producto a su array de productos, dependiendo de su nombre
        switch(nombreP){
            case "zamburiñas":
                productosCliente.push(p_zamburinas);
                break;
            case "mejillones":
                productosCliente.push(p_mejillones);
                break;
            case "gambas":
                productosCliente.push(p_gambas);
                break;
            case "vino blanco":
                productosCliente.push(p_vinoBlanco);
                break;
            case "cerveza Victoria":
                productosCliente.push(p_cerveVictoria);
                break;
            default:
                alert("Ese producto no existe, coño");
                return 0;
        }

        lista[indexCliente].productos = productosCliente;
        this._clientes = lista;
    }    
    //Para borrar la mesa reiniciamos el array de clientes a 0, para que no hay ningún cliente sentado
    borrarMesa(){
        this._clientes = []
    }

    //Función que calcula el importe a pagar por cliente
    dividirCliente(indiceCli) {
        //Sacamos el cliente de la lista con su indice
        let productos = this._clientes[indiceCli].productos;

        //Stream normalito
        let total = productos.map(producto => producto[1])
        .reduce((sumatoria, total) => sumatoria + total);

        //Retornamos el total
        return total;
    }
    //Función que me calcula el total del precio de los productos para actualizar la interfaz
    calcularTotalCuenta(){
        let clientes = this._clientes;
        //Stream guapísimo para sacar el total
        let total = clientes.map(cliente => cliente.productos)
        .map(productos => productos.map(producto => producto[1]))
        .map(precios => precios.reduce((sumatoria, total) => sumatoria + total))
        .reduce((sumatoria, num) => sumatoria + num);
        //Devolvermos el valor total
        return total;
    }
}



class Cliente{
    //Constructor de la clase cliente
    constructor(idCliente){
        this._idCliente = idCliente;
        this._productos = [["null", 0]];
    }

    get idCliente(){
        return this._idCliente;
    }

    get productos(){
        return this._productos
    }

    set productos(productos){
        this._productos = productos;
    }
}


//Función con el que vamos a transladar nuestas mesas del html a un array de objeto Mesa
function crearMesas(){
    let restaurante = [];
    let mesas = document.querySelectorAll(".com");
  
    for (const mesa of mesas){
      let clientes = [];
      
      let table = new Mesa(mesa.getAttribute("id"), clientes);
  
      restaurante.push(table);
    
    }
    return restaurante;
} 
  
//Función que nos añade los eventos a las mesas en el html
function addEvents(){
    //Sacamos todas las mesas
    let mesas = document.querySelectorAll(".com");
    //Recorremos la lista
    mesas.forEach(mesa =>{
        mesa.addEventListener("click", () => {
            //Imprimimos en las opciones el numero de la mesa
            let h1 = document.querySelector(".opciones h1")
            h1.innerHTML = `Mesa ${mesa.innerHTML}`;

            //Sacamos una lista con las opciones
            let opciones = document.querySelectorAll("div.op");
            //Recorremos la opciones y a cada opcion le damos la id de la mesa seleccionada
            opciones.forEach(op => {
                op.setAttribute("target", mesa.getAttribute("id"));
                console.log(op.getAttribute("target"))
            })
        })
    })
}

let restaurante = crearMesas();
console.log(restaurante)
addEvents();


function anadirProducto(producto){
    //Pedimos el id del cliente al que va asignado
    let idCliente = parseInt(prompt("id del cliente"));
    //Sacamos el número de la mesa
    let boton = document.querySelector(".addPro");
    let idMesa = boton.getAttribute("target");
    //Buscamos en qué indice de nuestro restaurante está la mesa con esa ubicación
    let indexMesa = restaurante.map(mesa => mesa.ubicacion).indexOf(idMesa);
    //Llamamos a la función y le metemos el producto
    restaurante[indexMesa].addProducto(producto, idCliente);
    let cuenta = document.querySelector(`#${idMesa} div.cuenta`)
    cuenta.innerHTML = restaurante[indexMesa].calcularTotalCuenta().toFixed(2) + "€";
    //Sacamos el output
    let output = document.querySelector("h2.output");
    output.innerHTML=`El cliente nº ${idCliente} de la mesa ${idMesa.substring(2)} ha pedido: ${producto}`;
    //Actualizamos la cuenta total de la mesa en el menú
    let h1 = document.querySelector(".opciones h1");
    let mesaHTHML = document.querySelector(`div#${idMesa}`);
    h1.innerHTML = `Mesa ${mesaHTHML.innerHTML}`
    //Ocultamos el menú de productos
    closeProductSelect();

}

function iniciarMesa(){
    //Sacamos la ubicación de la mesa
    let boton = document.querySelector(".start");
    let idMesa = boton.getAttribute("target");

    let mesaHTML = document.querySelector(`#${idMesa}`);

    if(mesaHTML.getAttribute("started") == "false"){
        //Pedimos el número de clientes que se sientan en la mesa
        let numClientes = parseInt(prompt("Introduce el número de clientes que se han sentado en la mesa"));


        //Si el número no es negativo o 0, ejecutamos el codigo
        if(numClientes > 0){
            //Mediante un bucle for, creamos tantos clientes como haya introducido y lo metemos en un array de clientes
            let listaClientes = [];
            for (let i = 0; i < numClientes; i++) {
                let clicli = new Cliente(i+1);
                listaClientes.push(clicli);
            }
            //Sacamos la posicion de la mesa en el array restaurante
            let indexMesa = restaurante.map(mesa => mesa.ubicacion).indexOf(idMesa);
            restaurante[indexMesa].clientes = listaClientes;
            console.log(restaurante);

            //Imprimimos el resultado
            let output = document.querySelector("h2.output");
            output.innerHTML=`Se han sentado ${numClientes} personas en la mesa ${idMesa.substring(2)}`
            mesaHTML.setAttribute("started","true")
        }else{
            //Imprimimos el resultado
            let output = document.querySelector("h2.output");
            output.innerHTML=`<b>Error</b>, no puedes sentar un número negativo de personas`;
        }
        
    }else{
        //Imprimimos el resultado
        let output = document.querySelector("h2.output");
        output.innerHTML=`<b>Error</b> ya hay gente en la mesa ${idMesa.substring(2)}`;
    }
}

function cerrarMesa(){
    //Sacamos la ubicación de la mesa
    let boton = document.querySelector(".borrar");
    let idMesa = boton.getAttribute("target");

    //Sacamos la etiqueta correspondiente a esa mesa
    let mesaHTML = document.querySelector(`#${idMesa}`);
    //Si la mesa ya está iniciada
    if(mesaHTML.getAttribute("started") == "true"){
        //Sacamos el indice de la mesa
        let indexMesa = restaurante.map(mesa => mesa.ubicacion).indexOf(idMesa);
        //Borramos la mesa
        restaurante[indexMesa].borrarMesa();
        //Le quitamos el atributo de que está iniciado
        mesaHTML.setAttribute("started", "false")
        //Reiniciamos la cuenta de esa mesa a 0
        let cuenta = document.querySelector(`div#${idMesa} div.cuenta`);
        cuenta.innerHTML = "0,00€"
        //Actualizamos la cuenta total de la mesa en el menú
        let h1 = document.querySelector(".opciones h1");
        let mesaHTHML = document.querySelector(`div#${idMesa}`);
        h1.innerHTML = `Mesa ${mesaHTHML.innerHTML}`
        //Imprimimos el output
        let output = document.querySelector("h2.output");
        output.innerHTML=`La mesa ${idMesa.substring(2)} se ha vaciado`;
    }//Si no está iniciada, lo imprimimos
    else{
        let output = document.querySelector("h2.output");
        output.innerHTML=`<b>Error</b> La mesa ${idMesa.substring(2)} está vacía`;
    }
}


function showProductSelect(){
    //Sacamos la mesa y boton
    let boton = document.querySelector(".addPro");
    let idMesa = boton.getAttribute("target");
    //Sacamos el elemento html con esa id de mesa
    let htmlMesa = document.querySelector(`div#${idMesa}`);
    //Sacamos el att started de la mesa, si es true ejecutamos el codigo, si es false, imprimimos el error
    let started = htmlMesa.getAttribute("started");

    if(started == "true"){
        //Sacamos el contenedor de los productos
        let wrapper = document.querySelector("div.productSelect");
        //Sacamos las listas de las clases
        let classList = wrapper.classList;
        //Le quitamos la clase hidden
        classList.remove("hidden");
        //Le ponemos un evento que si haces click en alguna mesa, se salga del menú de opciones
        let target = document.querySelector("div.restaurante")
        target.addEventListener("click", closeProductSelect)
        //Ocultamos las opciones
        let opciones = document.querySelectorAll("div.op");
        opciones.forEach(boton => boton.classList.add("hidden"));
        //Ocultamos el texto de las opciones
        let texto = document.querySelector(".opciones h1");
        texto.classList.add("hidden");
    }else{
        let output = document.querySelector("h2.output");
        output.innerHTML=`<b>Error</b> La mesa ${idMesa.substring(2)} está vacía`;
    }

    
}

function closeProductSelect(){
    console.log("asdf")
    //Sacamos el contenedor de los productos
    let wrapper = document.querySelector("div.productSelect");
    //Sacamos las listas de las clases
    let classList = wrapper.classList;
    //Le quitamos la clase hidden
    classList.add("hidden");
    //Le quitamos la clase hidden tambien a todos los botones
    let opciones = document.querySelectorAll("div.op");
    opciones.forEach(boton => boton.classList.remove("hidden"));
    //LE quitamos el hidden al texto
    let texto = document.querySelector(".opciones h1");
    texto.classList.remove("hidden");
}

function obtenerUbicacion(){
    //Sacamos el atributo target con el id de la mesa de la cual queremos obtener la ubicación
    let button = document.querySelector("div.get");
    let idMesa = button.getAttribute("target");
    //Sacamos la posicion de la mesa en el array restaurante
    let indexMesa = restaurante.map(mesa => mesa.ubicacion).indexOf(idMesa);
    //Usamos el get para obtener la ubicacion
    let ubicacion = restaurante[indexMesa].ubicacion;
    //Sacamos la salida de la mesa seleccionada
    let output = document.querySelector("h2.output");
    output.innerHTML=`Le mesa seleccionada se encuentra en la ubicacion ${ubicacion.substring(2)}`;
}

function moverMesa(){
    //Sacamos el atributo target con el id de la mesa de la cual queremos obtener la ubicación
    let button = document.querySelector("div.move");
    let idMesaOrigen = button.getAttribute("target");
    //Solicitamos a que mesa quiere cambiarse con un promt
    let idMesaDestino = parseInt(prompt("Escriba el número de mesa destino"));

    if(idMesaDestino >= 1 && idMesaDestino <= 15){
        idMesaDestino = "id" + idMesaDestino;
        //Sacamos los indices de ambas mesas en el array restaurante
        let indexOrigen = restaurante.map(mesa => mesa.ubicacion).indexOf(idMesaOrigen);
        let indexDestino = restaurante.map(mesa => mesa.ubicacion).indexOf(idMesaDestino);
        //Guardamos en una variable temporal la array de clientes de la mesa destino
        let tmp = restaurante[indexDestino].clientes;
        //Intercambiamos ambos arrays de productos
        restaurante[indexDestino].clientes = restaurante[indexOrigen].clientes
        restaurante[indexOrigen].clientes = tmp;
        //Actualizamos la interfaz
        let cuentaOrigen = document.querySelector(`div#${idMesaOrigen} div.cuenta`);
        let cuentaDestino = document.querySelector(`div#${idMesaDestino} div.cuenta`);
        tmp = cuentaOrigen.innerHTML;
        cuentaOrigen.innerHTML = cuentaDestino.innerHTML;
        cuentaDestino.innerHTML = tmp;
        //Cambiamos los estilos para las mesas iniciadas
        //Sacamos el aributo started de ambas mesas
        let htmlOrigen = document.querySelector(`div#${idMesaOrigen}`);
        let htmlDestino = document.querySelector(`div#${idMesaDestino}`);
        let startedOrigen = htmlOrigen.getAttribute("started");
        let startedDestino = htmlDestino.getAttribute("started");
        if(startedOrigen == "true" && startedDestino == "false"){
            htmlOrigen.setAttribute("started", "false");
            htmlDestino.setAttribute("started", "true");
        }else if(startedOrigen == "false" && startedDestino == "true"){
            htmlOrigen.setAttribute("started", "true");
            htmlDestino.setAttribute("started", "false");
        }

        //Sacamos la salida de información
        let output = document.querySelector("h2.output");
        output.innerHTML=`La mesa ${idMesaOrigen.substring(2)} y la mesa ${idMesaDestino.substring(2)} han sido movidas con éxito`;
    }else{
        //Sacamos la salida de información
        let output = document.querySelector("h2.output");
        output.innerHTML=`La mesa ${idMesaDestino.substring(2)} no existe, amigo. Espabila`;
    }
}

function verClientes(){
    //Sacamos los datos de la mesa otra vez
    let boton = document.querySelector("div.ver");
    let idMesa = boton.getAttribute("target");

    //Buscamos el indice de esa mesa en el array restaurante
    let indexMesa = restaurante.map(mesa => mesa.ubicacion).indexOf(idMesa);
    //Sacamos el tamaño del array de clientes
    let numClientes = restaurante[indexMesa].clientes.length;

    //Sacamos la salida de información
    let output = document.querySelector("h2.output");
    output.innerHTML=`En la mesa ${idMesa.substring(2)} hay un total de ${numClientes} clientes sentados`;
}

function imprimirComanda(){
    //Sacamos los datos de la mesa otra vez, otra vez
    let boton = document.querySelector("div.print");
    let idMesa = boton.getAttribute("target");

    //Buscamos el indice de esa mesa en el array restaurante
    let indexMesa = restaurante.map(mesa => mesa.ubicacion).indexOf(idMesa);

    //Sacamos la mesa en concreto
    let mesa = restaurante[indexMesa];
    let clientes = mesa.clientes;
    //A TOMAR POR CULO COÑO
    let cadena = `<p>Mesa ${idMesa.substring(2)}</p><table><tr><th>Producto</th><th></th><th>Precio/u</th></tr>`
    clientes.map(cliente => cliente.productos).forEach((productos) => {
        productos.forEach((producto) => {
            if(producto[0] != "null") cadena += `<tr><td class="nombre">${producto[0]}</td><td>${".".repeat(45)}</td><td>${producto[1].toFixed(2)}€</td></tr>`
        })
    })
    //Imprimos el total de la cuenta con IVA
    let total = restaurante[indexMesa].calcularTotalCuenta().toFixed(2);
    cadena += `<tr><td class="ta-right">Total s/iva</td><td>${".".repeat(45)}</td><td>${(total - (total*0.21)).toFixed(2)}€</td></tr>`
    cadena += `<tr><td>iva(21%)</td><td>${".".repeat(45)}</td><td>${(total*0.21).toFixed(2)}€</td></tr>`
    cadena += `<tr><td><b>Total</b></td><td>${".".repeat(45)}</td><td>${total}€</td></tr>`
    cadena += "</table><p class='foot'>Muchas Gracias por su visita<br>Ctra. el Morche, 43, 29793 El Morche, Málaga<br></p>";
    //Abrimos la nueva ventana
    let miVentana = window.open("cuenta.html", "","width=500, height=1000");
    miVentana.moveTo(150,150);
    miVentana.opener.cuenta = cadena;
}

function imprimirComandaCliente(){
    //Sacamos los datos de la mesa otra vez, otra vez
    let boton = document.querySelector("div.print");
    let idMesa = boton.getAttribute("target");

    //Buscamos el indice de esa mesa en el array restaurante
    let indexMesa = restaurante.map(mesa => mesa.ubicacion).indexOf(idMesa);

    //Sacamos la mesa en concreto
    let mesa = restaurante[indexMesa];

    //Preguntamos el cliente por el que dividir la comanda
    let indiceCliente = parseInt(prompt(`Introduzca el cliente del que quieres sacar la comanda. En la mesa actual hay sentados ${mesa.clientes.length} clientes`)) - 1;
    //Obtenemos el cliente
    let cliente = mesa.clientes[indiceCliente];

    if(indiceCliente >= 0  && indiceCliente <= mesa.clientes.length - 1){
        //Iniciamos la cadena
        let cadena = `<p>Mesa ${idMesa.substring(2)} Cliente ${indiceCliente+1}</p><table><tr><th>Producto</th><th></th><th>Precio/u</th></tr>`
        //Recorremos el array productos del cliente metiendo los valores en la cadena como una tabla
        cliente.productos.forEach(producto => {
            if(producto[0] != "null") cadena += `<tr><td class="nombre">${producto[0]}</td><td>${".".repeat(45)}</td><td>${producto[1].toFixed(2)}€</td></tr>`
        })
        //Terminamos la tabla con el total y el footer
        let total = mesa.dividirCliente(indiceCliente).toFixed(2);
        cadena += `<tr><td class="ta-right">Total s/iva</td><td>${".".repeat(45)}</td><td>${(total - (total*0.21)).toFixed(2)}€</td></tr>`
        cadena += `<tr><td>iva(21%)</td><td>${".".repeat(45)}</td><td>${(total*0.21).toFixed(2)}€</td></tr>`
        cadena += `<tr><td><b>Total</b></td><td>${".".repeat(45)}</td><td>${total}€</td></tr>`
        cadena += "</table><p class='foot'>Muchas Gracias por su visita<br>Ctra. el Morche, 43, 29793 El Morche, Málaga<br></p>";
        //Abrimos la nueva ventana
        let miVentana = window.open("cuenta.html", "","width=500, height=1000");
        miVentana.moveTo(150,150);
        miVentana.opener.cuenta = cadena;
    }else{
        //Sacamos la salida del error
        let output = document.querySelector("h2.output");
        output.innerHTML=`Error, no hay ${indiceCliente + 1} clientes en la mesa. Hay un total de ${mesa.clientes.length} clientes`;
    }
}