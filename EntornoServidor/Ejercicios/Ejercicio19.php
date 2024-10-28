<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        //Creamos el array de números aleatoros
        for ($i=0; $i < 20; $i++) { 
            $array[] = rand(1, 100);
        }
        //Imprimimos el array
        imprimir_array($array);
       
        echo "<br>";
        //LLamamos a la función limite y volvemos sa imprimir el array
        array_limite($array, 75);
        imprimir_array($array);

        //Función que imprime el array
        function imprimir_array ($lista){
            echo "<table><tr><th colspan=2>Array Original</th></tr>";
            foreach ($lista as $ind => $num){
                    echo "<tr><td>[".$ind."]</td><td>".$num."</td></tr>";
                }
                echo "</table>";
            }

        //Función limite
        function array_limite(&$lista, $limit){
            foreach ($lista as $ind => $num){
                if($num > $limit){
                    unset($lista[$ind]);
                }
            }
            return $lista;
        }
    ?>
</body>
</html>