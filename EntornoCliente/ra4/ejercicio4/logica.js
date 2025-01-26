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
    //Función que me calcula el total del precio de los productos para actualizar la interfaz
    calcularTotalCuenta(){
        let clientes = this._clientes;
        /*let total = clientes.map(cliente => cliente.productos).map(lista => lista.reduce(function (acumulado, valor, indice, vector){
            return acumulado + valor;
        })).reduce(function (acumulado, valor, indice, vector){
            return acumulado + valor
        });*/
        let total = clientes.map(cliente => cliente.productos).map(productos => productos.map(producto => producto[1])).map(precios => precios.reduce(function(sumatoria, total){
                return sumatoria + total
        })).reduce(function(sumatoria, num){
            return sumatoria + num;
        });
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
    output.innerHTML=`El cliente nº ${idCliente} de la mesa ${idMesa.substring(2)} ha pedido: ${producto}`
    //Ocultamos el menú de productos
    closeProductSelect()
}

function iniciarMesa(){
    //Sacamos la ubicación de la mesa
    let boton = document.querySelector(".start");
    let idMesa = boton.getAttribute("target");

    let mesaHTML = document.querySelector(`#${idMesa}`);

    if(mesaHTML.getAttribute("started") == "false"){
        //Pedimos el número de clientes que se sientan en la mesa
        let numClientes = parseInt(prompt("Introduce el número de clientes que se han sentado en la mesa"));

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
        restaurante[indexMesa].borrarMesa();
        mesaHTML.setAttribute("started", "false")
        console.log(restaurante);
    }//Si no está iniciada, lo imprimimos
    else{
        let output = document.querySelector("h2.output");
        output.innerHTML=`<b>Error</b> La mesa ${idMesa.substring(2)} está vacía`;
    }
}


function showProductSelect(){
    //Sacamos el contenedor de los productos
    let wrapper = document.querySelector("div.productSelect");
    //Sacamos las listas de las clases
    let classList = wrapper.classList;
    //Le quitamos la clase hidden
    classList.remove("hidden");
}

function closeProductSelect(){
    //Sacamos el contenedor de los productos
    let wrapper = document.querySelector("div.productSelect");
    //Sacamos las listas de las clases
    let classList = wrapper.classList;
    //Le quitamos la clase hidden
    classList.add("hidden");

}