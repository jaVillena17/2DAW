<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if(!isset($_GET["num1"]) || !isset($_GET["num2"])){
            echo "Error. Faltan parámetros";
        }elseif(!is_numeric($_GET["num1"]) || !is_numeric($_GET["num2"])){
            echo "Error, ambos números deben ser numéricos";
        }else{
            echo "El resultado de la suma es:  ".$_GET["num1"] + $_GET["num2"]."<br>";
            echo "El resultado de la resta es:  ".$_GET["num1"] - $_GET["num2"]."<br>";
            echo "El resultado de la multiplicación es:  ".$_GET["num1"] * $_GET["num2"]."<br>";
            if ($_GET["num2"] == 0){
                echo "No se puede dividir entre 0";
            }else{
                echo "El resultado de la división es:  ".$_GET["num1"] / $_GET["num2"]."<br>";
            }
        }
    ?>
</body>
</html>