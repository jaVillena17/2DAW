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
        let indexCliente = -1;
        //Bucle for para buscar el indice
        for (let i = 0; i < lista.length; i++) {
            if(lista[i].idCliente == idCliente){
                indexCliente = i;
                break
            }
        }
        //Sacamos la lista de productos de ese cliente
        let productosCliente = lista[i].productos;

        //Añadimos el producto a su array de productos, dependiendo de su nombre
        switch(nombreP){
            case "zamburiñas":
                productosCliente.push(p_zamburinas);
                break;
            case "mejillones":
                productosCliente.push(p_zamburinas);
                break;
            case "gambas":
                productosCliente.push(p_zamburinas);
                break;
            case "vino blanco":
                productosCliente.push(p_zamburinas);
                break;
            case "cerveza Victoria":
                productosCliente.push(p_zamburinas);
                break;
        }
    }    
}

class Cliente{
    //Constructor de la clase cliente
    constructor(idCliente){
        this._idCliente = idCliente;
        this._productos = [];
    }

    get idCliente(){
        return this._idCliente;
    }

    get productos(){
        return this._productos
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
            h1.innerHTML = "Mesa " + mesa.getAttribute("id");

            //Sacamos una lista con las opciones
            let opciones = document.querySelectorAll("div.op");
            //Recorremos la opciones y a cada opcion le damos la id de la mesa seleccionada
            opciones.forEach(op => {
                op.setAttribute("target", mesa.getAttribute("id"));
                console.log("target boton borrar mesa: "+op.getAttribute("target"));
            })
        })
    })
}

let restaurante = crearMesas();
console.log(restaurante)
addEvents();

