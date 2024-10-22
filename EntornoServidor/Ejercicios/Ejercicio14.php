<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table{
            text-align: center;
        }
        td{
            width: 200px;
        }
    </style>
</head>
<body>
    <?php 
        //Creamos el array
        $articulos = [
            ["Teclado", 58],
            ["Ratón", 32],
            ["Impresora", 185],
            ["Altavoz", 62],
            ["Auriculares", 36],
            ["Monitor", 102],
            ["Webcam", 47]
        ];
        $menos50 = [];
        //Imprimimos las datos
        var_export($articulos);
        //Con un for each imprimimos la tabla
        echo "<h3>Todos los artículos</h3><table><tr><th>Artículo</th><th>Precio (€)</th></tr>";
        foreach($articulos as $art){
            echo "<tr><td>".$art[0]."</td><td>".$art[1]."</td></tr>";
        }
        echo "</table><br>";

        //Copiamos el contenido del array en otro nuevo usando array_slice
        $art_original = array_slice($articulos, 0);

        //Recorremos (for each) el array artículos y eliminamos los elementos cuyo valor sea menor de 50.
        $len = count($articulos);
        for ($i=0; $i < $len; $i++) { 
            if ($articulos[$i][1]<50){
                $menos50[] = $articulos[$i];
                unset($articulos[$i]);
            }
        }

        //Volvemos a imprimir
        echo "<h3>Artículos con precio mayores a 50€</h3><table><tr><th>Artículo</th><th>Precio (€)</th></tr>";
        foreach($articulos as $art){
            echo "<tr><td>".$art[0]."</td><td>".$art[1]."</td></tr>";
        }
        echo "</table><br>";

        //Imprimimos los extraidos
        echo "<h3>Artículos con precio menores a 50€</h3><table><tr><th>Artículo</th><th>Precio (€)</th></tr>";
        foreach($menos50 as $art){
            echo "<tr><td>".$art[0]."</td><td>".$art[1]."</td></tr>";
        }
        echo "</table><br>";

        //Aumenta un 15% el pricio a dicho articulos (los que valen menos de 50?)
        foreach($menos50 as &$art){
            $art[1] += ($art[1] * 15  /100);
        }
        //var_export($menos50);
        //Imprimimos los extraidos
        echo "<h3>Artículos con precios actualizados</h3><table><tr><th>Artículo</th><th>Precio (€)</th></tr>";
        for ($i=0; $i < count($menos50); $i++) { 
            echo "<tr><td>".$menos50[$i][0]."</td><td>".$menos50[$i][1]."</td></tr>";
       }
       echo "</table>";
       //Este es el foreach comentado, si se descomenta altera la estructura del array
       //var_export($menos50);
       //echo "</table><br>";
       //echo "<h3>Artículos con precios actualizados</h3><table><tr><th>Artículo</th><th>Precio (€)</th></tr>";
       //foreach($menos50 as $art){
         //echo "<tr><td>".$art[0]."</td><td>".$art[1]."</td></tr>";
        //}
        
        //echo "</table><br>";
        //var_export($menos50);
        //Unimos los dos arrays
        $precio_act = array_merge($articulos, $menos50);
        //Imprimimos los extraidos
        echo "<h3>Lista de artículos completa con los artículos actualizados</h3><table><tr><th>Artículo</th><th>Precio (€)</th></tr>";
        for ($i=0; $i < count($precio_act); $i++) { 
            echo "<tr><td>".$precio_act[$i][0]."</td><td>".$precio_act[$i][1]."</td></tr>";
        }
        echo "</table><br>";
    ?>
</body>
</html>