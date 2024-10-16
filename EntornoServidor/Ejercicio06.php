<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $num = 4;
    $sum = 1;

    if (is_int($num) && $num >= 1){
        for ($i = 1; $i <= $num; $i++){
            $sum = $sum * $i;
        }
        echo "El factorial de $num es $sum";
    }else{
        echo "No existe el factorial";
    }

    ?>
</body>
</html>