<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!-- Array de numeros aleatorios con una tamaño de 20 numeros desde el 1 al 40. Una vez que están, mostrar los números que son divisibles entre 4
 Y a continuación, al array, pero los numeros divisibles entre 4 se multiplican por 2-->
 <?php 
    $numeros = [];
    //Rellenamos el array con numeros aleatorios
    for($i = 1; $i <= 20; $i++){
        $numeros[] = (int)rand(1, 40);
    }
    //Imprimimos el array
    echo "Array: <br>";
    foreach($numeros as $n){
        echo $n.", ";
    }
    echo "<br>";
    //Mostramos los números divisibles entre 4
    echo "Divisibles entre 4: <br>";
    foreach($numeros as $n){
        if($n%4==0) echo $n.", ";
    }
    echo "<br>";
    //Mostrar el array con los numeros divisibles entre 4 multiplicados por 2
    echo "Array completo con los números divisibles entre 4 multiplicados por 2: <br>";
    foreach($numeros as $n){
        if($n%4==0) echo $n*2 .", ";
        else echo $n.", ";
    }
 ?>
</body>
</html>