<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $nota = 9;

        if($nota < 0 || $nota > 10){
            echo ("$nota : Eso no es posible, la nota debe ser un valor entre 0 y 10");
        }elseif($nota<5){
            echo("$nota : Suspenso");
        }elseif($nota<7){
            echo("$nota : Aprobado");
        }
        elseif($nota<9){
            echo("$nota : Notable");
        }else{
            echo("$nota: Sobresaliente");
        }
        
        echo("<br>");

        switch ($nota){
            case ($nota < 0 || $nota > 10):
                echo ("$nota : Eso no es posible, la nota debe ser un valor entre 0 y 10");
                break;
            case ($nota<5):
                echo("$nota : Suspenso");
                break;
            case ($nota<7):
                echo("$nota : Aprobado");
                break;
            case ($nota<9):
                echo("$nota : Notable");
                break;
            default:
                echo("$nota: Sobresaliente");
                break;
        }
    ?>
</body>
</html>