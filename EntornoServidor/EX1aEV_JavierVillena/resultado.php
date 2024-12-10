<?php
    //Iniciamos la sesión
    session_start();
    //Si el carrito no está definido o su tamaño es 0, paramos la ejecución
    if(!isset($_SESSION["carrito"]) || count($_SESSION["carrito"]) == 0){
        echo "El carrito está vacio";
        exit();
    }
?>
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
    <?php
        //Función que calcula el total con el iva
        function TotalConImpuestos($lista){
            $cantidad = 0;
            //Mediante un for ach sacamos el array con el precio y la cantidad ($att)
            foreach($lista as $nombre => $att){
                //Sumamos en la variable $cantidad la multiplicacion de estos valores
                $cantidad += $att[0]*$att[1];
            }
            //Aplicamos el 21% de iva
            $cantidad = $cantidad * (1.21);
            //Devolvemos la cantidad
            return $cantidad;
        }
        
        //Si el método es post, esto significa que le hemos dado a vaciar carrito
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            //Vaciamos el carrito igualandolo a un array vacio
            $_SESSION["carrito"] = [];
        }
        //Guardamos el carrito de la sesion en la variable $carrito
        $carrito = $_SESSION["carrito"];

        //Imprimimos el carrito en una tabla mediante un for each
        echo "<table><tr><th>Producto</th><th>Precio Unitario(€)</th><th>Cantidad</th><th>Subtotal(€)</th></tr>";
        foreach($carrito as $nombre => $att){
            echo "<tr>";
            //En este caso $nombre sería la key
            echo "<td>".$nombre."</td>";
            //%att serían los valores del array, en la posicion 1 está el precio y en la 0 las cantidads
            echo "<td>".number_format($att[1],2)."</td>";
            echo "<td>".$att[0]."</td>";
            echo "<td>".$att[0]*$att[1]."</td>";
            echo "</tr>";
        }
        echo "</table>";
        //Imprimimos el total con impuestos llamando a la funcion TotalConImpuuestos y pasándole el carrito por parámetros
        echo "<b>Total con impuestos (21% IVA): ".number_format(TotalConImpuestos($carrito),2)."</b>"
    ?>
    <hr>
    <!--Formulario de vaciado de carrito-->
    <form action="resultado.php" method="POST">
        <button type="submit">Vaciar el carrito</button>
    </form>
    <hr>
    <a href="formulario.php">Volver al formulario</a>
</body>
</html>