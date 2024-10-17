<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    const sueldoHora = 8.6;
    const sueldoExtra = sueldoHora + (sueldoHora*30/100);
    const maxExtras = 3; //Constante que define el numero maximo de horas extra pagadas
    $horasTrabajadas = 39;

    //Si trabaja menos de 37 horas, lo hacemos todo directo con el sueldo por hora normal
    if($horasTrabajadas<=37){
        echo "Número de horas trabajadas: $horasTrabajadas horas<br>";
        echo "Salario semanal: ".sueldoHora*$horasTrabajadas." €<br>";
        echo "Número de horas extras: 0<br>";
        echo "Salario total: ".sueldoHora*$horasTrabajadas." €";
        //Si trabaja entre 37 y 40, calculamos el numero de horas extra y lo sumamos al salario de las otras 37 horas
    }else if($horasTrabajadas>37 && $horasTrabajadas<=40){
        $diff = $horasTrabajadas - 37;
        $sueldoExtra = $diff * sueldoExtra;
        echo "Número de horas trabajadas: $horasTrabajadas horas<br>";
        echo "Salario semanal: ".sueldoHora*37 ." €<br>";
        echo "Número de horas extra: $diff horas <br>";
        echo "Salario total :".$sueldoExtra+sueldoHora*37 ." €<br>"; 
    }else{
        //Igual que el anterior, pero el calculo del pago de las horas extra lo hacemos con la constante que define el maximo de horas extra, no con las horas extra reales
        $diff = $horasTrabajadas - 37;
        $sueldoExtra = maxExtras * sueldoExtra;
        echo "Número de horas trabajadas: $horasTrabajadas horas. Esto es ilegal amigo, solo se pagan hasta 40<br>";
        echo "Salario semanal: ".sueldoHora*37 ." €<br>";
        echo "Número de horas extra: $diff horas <br>";
        echo "Salario total :".$sueldoExtra+sueldoHora*37 ." €<br>";
    }

    ?>
</body>
</html>