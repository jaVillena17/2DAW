<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
    var_export($articulos);
    echo "<br>";
    //función agregar un valor a un array
    function add ($arr, $key, $value){
        $arr[] = [$key, $value];
        return $arr;
    }
    //Llamamos a la función
    $art2 = add($articulos, "Mesa", 200);

    //Función que imprime los artículos
    function printArray ($arr){
        echo "<table><tr><td colspan=2>ARTICULOS</td></tr>";
        foreach ($arr as $a){
            echo "<tr><td>".$a[0]."</td><td>".$a[1]."</td></tr>";
        }
        echo "</table>";
    }
    printArray($articulos);
    echo "<br>";
    printArray($art2);

    //Función que calcula la media de los precios
    function mean ($arr){
        $a = 0 ;
        foreach ($arr as $n){
            $a += $n[1];
        }
        return $a / count($arr);
    }
    echo "<br>";
    
    echo "La media del precio es ".mean($articulos)." euros";
    echo "<br><br>";
    //Función que elimina un artículo a partir de su nombre. NO ME FUNCIONA CON FOREACH
    function delete($arr, $key){
        /*foreach ($arr as $k){
            if ($k[0] == $key){
                echo $k[0];
                echo $key;
                
                unset($k);
                var_export($arr);
            }
        }*/
        for ($i=0; $i < count($arr); $i++) { 
            if ($arr[$i][0] == $key){
                unset($arr[$i]);
            }
        }
        return $arr;
    }
    
    $arr3 = delete($articulos, "Monitor");
    printArray($arr3);

    ?>
</body>
</html>