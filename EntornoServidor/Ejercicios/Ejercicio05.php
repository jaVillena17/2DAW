<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $name = "Laura";
    $pass = "aa12";
    switch (TRUE){
        case ($name=="Julia" && $pass == "aa11"):
            echo "Usuario autorizado. Hola, $name";
            break;
        case ($name=="Laura" && $pass == "aa12"):
            echo "Usuario autorizado. Hola, $name";
            break;
        case ($name=="Pedro" && $pass == "aa13"):
            echo "Usuario autorizado. Hola, $name";
            break;
        case ($name=="Carlos" && $pass == "aa14"):
            echo "Usuario autorizado. Hola, $name";
            break;
        default:
            echo ("Usuario no autorizado");
            break;
    }

    ?>
</body>
</html>