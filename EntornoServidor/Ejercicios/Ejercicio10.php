<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $num = [];
        $num_cuadrado = [];
        $num_cubo = [];

        for($i=1; $i <=15; $i++){
            $azar = rand(1, 50);
            $num[]= $azar;
            $num_cuadrado[] =$azar*$azar;
            $num_cubo[] = $azar*$azar*$azar;
        }
        echo "<table>";
        echo "<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
        for($i=0; $i <15; $i++){
            echo "<tr>";
            echo "<td>$num[$i]</td><td>$num_cuadrado[$i]</td><td>$num_cubo[$i]</td>";
            echo "</tr>";
        }
        echo "</table>";

    ?>
</body>
</html>