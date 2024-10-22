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

        //Array_push   array_push($nombrearray, valor1, valor2) Nos sirve para meter varios valores del tiron

        //array_shift Inserta en el primer elemento del array

        //Array_pop    array_pop($nombreArray) Esto extrae el último elemento del array. Un unset del ultimo elemento

        //array_merge  Fusiona arrays arrayDestino = array_merge($array1, $array2)

        //array_slice corta el array por el indice que le digas hasta donde le digas array_slice($nombreArrau, indiceCOminedzo, [longitud], [preserve_keys])

        //unshift añade en la primera posicion

        //array_reverse le da la vuelta a un array

        //array_unique($nombreArray) Este quita del array los elementos que sean iguales
        $num = ["4",7,2,4,5,6,8,9,7,6,4,1,2,5,7,8,10];
        var_export($num);
        $num2 = array_unique($num);
        echo "<br>";
        var_export($num2);

        //array_search(valorBuscado, array) Devuelve el indice

        //array_keys(array), devuelve un array con las claves de un array asociativo

        //array_values(array), devuelve un array con los valores de un array asociativo

    ?> 
</body>
</html>