<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        //Creamos el array
        $numColor = [];
        //Con un bucle for lo rellenamos con numeros aleatorios
        for ($i=0; $i < 15; $i++) { 
            $num = rand(1, 20);
            //Si al número no está en el array, lo metemos
            if (!in_array($num, $numColor)){
                $numColor[] = $num;
            }else{//Si no, reducimos i para que vuelva a sacar número
                $i--;
            }
        }
        echo "<table style=\"text-align: center\"><tr>";
        for ($i=0; $i < 30; $i++) { 
            if($i<14){
                echo "<td>".$i."</td>";
            }elseif($i==14){
                echo "<td>".$i."</td></tr><tr>";
            }else{
                if($numColor[$i-15]%2==0){
                    echo "<td style=\"color:red\">".$numColor[$i-15]."</td>";
                }else{
                    echo "<td style=\"color:blue\">".$numColor[$i-15]."</td>";
                }
            }
        }
        echo "</tr></table>";
    ?>
</body>
</html>