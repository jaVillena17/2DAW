<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Formulario de Compra</h1>
    <h3>Javier Villena Fernández</h3>
    <form action="formulario.php" method="POST">
        <label for="idProducto">Selecciona un producto</label>
        <select name="pro" id="idProducto" required>
            <option></option>
            <option value="Camiseta">Camiseta - 25€</option>
            <option value="Pantalon">Pantalón - 23€</option>
            <option value="Zapatos">Zapatos - 64€</option>
        </select>
        <br>
        <label for="idCantidad">Cantidad: </label>
        <input type="number" name="cantidad" id="idCantidad" required min="1">
        <br>
        <button type="submit">Agregar al carrito</button>
    </form>
    <hr>
    <a href="resultado.php">Ver Carrito</a>

    <?php
        //Iniciamos la sessión 
        session_start();

        //Comprobamos si se han introducido valores y que el método es post
        if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["pro"]) && isset($_POST["cantidad"])){
            //Guardamos en variables el nombre, la cantidad y el precio
            $nombre = $_POST["pro"];
            $cantidad = $_POST["cantidad"];
            $precio;
            //Hacemos un switch para asignar a cada producto su precio según el nombre
            switch($nombre){
                case "Camiseta":
                    $precio = 25;
                    break;
                case "Pantalon":
                    $precio = 23;
                    break;
                case "Zapatos":
                    $precio = 64;
                    break;
                //No necesitamos default ya que se controla en el formulario
            }
            //Comprobamos si el array está ya creado en la sesion o no
            if(isset($_SESSION["carrito"])){
                //Si está creado, intentamos añadir el producto al carrito, para ello primero debemos comprobar que si ese producto ya está en el carrito
                $carrito = $_SESSION["carrito"];
                //La funcion array_key_exist comprueba si un array tiene la clave especificada
                if(array_key_exists($nombre, $carrito)){
                    //Si ese producto ya está en el carrito, debemos sumar las cantidades
                    $carrito[$nombre][0] += $cantidad;
                    //Volvemos a guardar el array en la sesion
                    $_SESSION["carrito"] = $carrito;
                }else{
                    //Si no existe, creamos esa clave con los valores y volvemos a guardar el array en la sesión
                    $carrito[$nombre] = [$cantidad, $precio];
                    $_SESSION["carrito"] = $carrito;
                }

                
            }else{
                //Si no está creado lo creamos
                $carrito = [$nombre => [$cantidad, $precio]];
                //Añadimos el carrito a la sesion
                $_SESSION["carrito"] = $carrito;
            }
        }  
    ?>
</body>
</html>