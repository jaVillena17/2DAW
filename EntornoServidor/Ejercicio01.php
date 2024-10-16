<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="border : 1px solid black; padding : 0px 10px"><!--Div para poner el borde-->
        <h1>EJERCICIO 1 TEMA 2. Javier Villena Fernández</h1>
        <?php
        //Array indexado
        $vector1 = array("Almería", "Cádiz","Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla");
        //Array Asociativo
        $vector2 = array("art1" => "Impresora 3D", "art2" => "Monitor INVES", "art3" => "Teclado Logitech G", "art4" => "Impresora HP", "iva" => 0.28, "fra" => FALSE);
        
        //Monstrar contenido y tipo de vector 1 haciendo uso de la función var_dump
        var_dump($vector1);
        //Imprimimos las cadenas
        echo "<h3>La capital de Andalucía es ".$vector1[7]."</h3><br><br>";
        echo "Artículo 4: ".$vector2["art4"]."<br>";
        echo "El artíclo ".$vector2["art1"]." tiene asociado un impuesto del ".$vector2["iva"]*100 ."%<br><br>";

        //Mostramos el booleano, al ser false, para hacerlo haremos uso de la funcion json_encode()
        echo "<h4>Factura: ".json_encode($vector2["fra"])."</h4>"

        ?>
    </div>
</body>
</html>