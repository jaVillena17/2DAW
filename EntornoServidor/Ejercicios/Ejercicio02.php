<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //Variable precio
    $precio = 820;
    //Creamos un array que contenga la info de un pago del artículo con tarjeta
    $pago1 = array("Producto"=> "Artículo", "Precio" => 820, "Tarjeta" => TRUE);
    //Y otro haciendo un pago con efectivo
    $pago2 = array("Producto"=> "Artículo", "Precio" => 820, "Tarjeta" => FALSE);

    //Imprimimos el precio
    echo "<p>Precio del artículo: $precio euros</p>";
    //Creamos un if y un else al que tu le metes un un articulo y dependiendo del pago te imprime una cosa
    if($pago1["Tarjeta"]){
        $precioFinal = $pago1["Precio"] - ($pago1["Precio"]*15/100);
        echo "<p>El precio pagando con tarjeta es $precioFinal euros</p>";
    }else{
        $precioFinal = $pago1["Precio"] - ($pago1["Precio"]*25/100);
        echo "<p>El precio pagando con tarjeta es $precioFinal euros</p>";
    }
    //Aqui se comprueba la misma función si el pago es en efecetivo con el array pago2
    if($pago2["Tarjeta"]){
        $precioFinal = $pago2["Precio"] - ($pago2["Precio"]*15/100);
        echo "<p>El precio pagando con tarjeta es $precioFinal euros</p>";
    }else{
        $precioFinal = $pago2["Precio"] - ($pago2["Precio"]*25/100);
        echo "<p>El precio pagando con tarjeta es $precioFinal euros</p>";
    }

    ?>
</body>
</html>