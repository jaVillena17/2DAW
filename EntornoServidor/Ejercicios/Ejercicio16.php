<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        //Función que crea el array con numeros aleatorios
        function arrayAleatorio ($tam, $menor,  $mayor){
            for ($i=0; $i <$tam ; $i++) { 
                $lista[] = rand($menor, $mayor);
            }
            return $lista;
        }

        //Función que lo modifica
        function arrayEj16($arr){
            foreach ($arr as &$a){
                if ($a%2==0){
                    $a *= 2;
                }else{
                    $a += 1;
                }
                unset($a);
            }
            return $arr;
        }

        $lista = arrayAleatorio(8,1,20);

        //Imprimir tabla
        echo "<table><tr><th colspan=2>Array original:</th></tr>";
        foreach ($lista as $n){
            echo "<tr><td>[".array_search($n, $lista)."]</td><td>".$n."</td></tr>";
        }
        echo "</table>";

        //Impirmir tabla
        echo "<table><tr><th colspan=2>Array modificado:</th></tr>";
        foreach (arrayEj16($lista) as $n){
            echo "<tr><td>[".array_search($n, arrayEj16($lista))."]</td><td>".$n."</td></tr>";
        }
        echo "</table>";

    ?>
</body>
</html>