<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    //Creamos la tabla
    echo "<table border=1>";
    //Iniciamos variable donde meteremos el acumulado
    $sum = 0;
    //Primer for, con el que crearemos cada una de las filas
    for ($i = 1; $i <= 10; $i++){
        //Abrimos fila
        echo "<tr>"; 
        //Nuevo bucle for para crear 10 celdas dentro de cada fila, sumando 10 a cada valor
        for ($x = 1; $x <= 10; $x++){
            //Sumamos 10 al acumulado
            $sum += 10;
            //Creamos y cerramos celda
            echo "<td>$sum</td>";
        }
        //Cerramos fila
        echo "</tr>";
    }
    //Cerramos tabla
    echo "</table>";
    ?>
</body>
</html>