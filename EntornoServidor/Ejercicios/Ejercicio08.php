<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        //Iniciamos arrays
        $array_numerico = array(11,20,7,2,35,12,51,1);
        $array_provincia = array("pr1" => "Almería", "pr2" => "Cádiz", "pr3" => "Córdoba", "pr4" => "Granada", "pr5" => "Huelva", "pr6" => "Jaén", "pr7" => "Málaga", "pr8" => "Sevilla");

        //Imprimimos array
        echo "El contenido del array numérico es;<br>";
        foreach($array_numerico as $n){
            echo "$n<br>";
        }
        //Imprimimos array
        echo "<br>El nombre del índice y el contenido de array provincia es:<br>";
        foreach($array_provincia as $i => $name){
            echo "$i: $name<br>";
        }
        //Si el número es impar, le sumamos uno y lo imprimimos
        echo "<br>Los números pares más cercanos al contenido inicial son:<br>";
        foreach($array_numerico as &$n){
            if($n%2!=0)  $n++;
            echo "$n<br>";
        }
        //Imprimimos con la cadena modificada
        echo "<br>El contenido modificado del array provincia es:<br>";
        foreach($array_provincia as $i => &$name){
            $name = "Provincia de ".$name;
            echo "$name<br>";
        }
    ?>
</body>
</html>