<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        if(empty($_GET["nombre"]) || empty($_GET["apellido"])){
            echo "Faltan datos";
        }else{
            echo "Hola ".$_GET["nombre"]." ".$_GET["apellido"];
        }
    ?>
</body>
</html>