<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $array1 =["perro", "gato", "musarala","cocodrilo","loro","periquito"];
        //Función list. Solo se puede usar con array indexados
        list($var1,$var2,,,$var3)= $array1;
        echo $var3;
        echo "<br>";
        //Función range
        $array2 = range(10, 50,2);
        var_export($array2);
        echo "<br>";
        //Función in_array
        echo json_encode(in_array("periquito",$array1));
        echo "<br>";
        //Función unset. Elimina uno o varios elementos del array
        unset($array1[5]);
        var_export($array1);
        echo "<br>";
        //Introducimos otra vez a periquito
        $array1[] = "periquito";
        var_export($array1);
        for ($i=0; $i < count($array1); $i++){
            echo $array1[$i]."<br>";
        }
        $array1[5] = $array1[6];
        unset($array1[6]);
        var_export($array1);
        echo "<br>";
        //Función shuffle
        shuffle($array2);
        var_export($array2);
    ?> 
</body>
</html>