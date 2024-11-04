<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if(empty($_GET["num1"]) || empty($_GET["num2"])){
            echo "Error. Faltan parámetros";
        }elseif(!is_numeric($_GET["num1"]) || !is_numeric($_GET["num2"])){
            echo "Error, ambos números deben ser numéricos";
        }else{
            echo "El resultado de la suma es:  ".$_GET["num1"] + $_GET["num2"];
        }
    ?>
</body>
</html>