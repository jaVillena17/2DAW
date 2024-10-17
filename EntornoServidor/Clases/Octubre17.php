<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        //Creamos un array 
        $animal = [
            "ave" => ["paloma","águila","periquito"], 
            "reptil" => ["boa","culebra","salamanquesa", "lagarto"]
        ];

        echo var_export($animal)."br";
        $animal2 = [
            "ave" => ["paloma","águila","periquito"], 
            "reptil" => ["boa","culebra","salamanquesa", "lagarto"],
            "pez" => [
                "mamífero" => ["delfín", "ballena"],
                "otro" => ["boquerón", "sardina"]
            ]
        ];
        echo var_export($animal2)."br";

        //Si hacemos un count de estos arrays, nos va a mostar 2 y 3, el tamaño del primer array, pero no la cantidad todal de elementos del array
        echo "Contar el número de elementos de animal y animal2 <br>";
        echo count($animal)."<br>";
        echo count($animal2)."<br>";

        //Haciendo uso de count recursive podemos sacar el total de todos los elementos 
       echo count($animal, COUNT_RECURSIVE)."<br>";
       echo count($animal2, COUNT_RECURSIVE)."<br>";

       //Escribir: el numero de elementos del array animal es y solo los ultimos elementos, con un for
       echo "El número de elementos del array animal es <br>";
       echo count($animal)."<br>";
        foreach($animal as $a => $e){
            echo count($e)."<br>";
        }

       echo "El número de elementos del array animal es <br>";
       echo count($animal2)."<br>";
        foreach($animal2 as $a => $e){
            echo count($e)."<br>";
        }
        
    ?>
</body>
</html>