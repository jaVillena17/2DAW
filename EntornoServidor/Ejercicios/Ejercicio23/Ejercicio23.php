<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .amenaza{
            color: red;
        }
        button{
            width: 680px;
            background-color: red;
            color: yellow;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <?php 
        //Imprimimos nombre y lenguaje
        echo "<h1>Hola $_POST[nombre]!</h1><br><br>";
        echo "Tu lenguaje elegido es $_POST[leng]<br><br>";
        //Si no ha seleccionado un nivel de experiencia
        if("$_POST[exp]"!="empty"){
            echo "Tu nivel de experiencia es: $_POST[exp]<br><br>";
        }
        //Imprimimos texto en funcion del lenguaje que recibamos
        switch ($_POST["leng"]){
            case "PHP":
                echo "PHP es el mejor lenguaje del mundo. Me encanta PHP por favor Noemi no me suspendas no he hecho nada<br><br>";
                break;
            case "JavaScript":
                echo "JavaScript es el lenguaje perfecto para el desarrollo web en entorno cliente<br><br>"; 
                break;
            case "Python":
                echo "Python es perfecto para el aprendizaje rápido y aplicaciones diversas. Soy muy original, si<br><br>";
                break;
            case "JAVA":
                echo "Uff, Java. Que quieres que te diga de Java, difícil de aprender pero muy cómodo una vez lo dominas<br><br>";
                break;   
        }
        //Si no ha marcado el checkbox de publi, le hacemos sentir mal
        if(empty($_POST["publi"])){
            echo "No has solicitado información adicional. Te he dicho que aceptes las cookies. <b class=\"amenaza\">ACEPTA LAS COOKIES</b><br>";
            echo "<button>ACEPTAR COOKIES</button>";
        }else{//Si lo ha marcado, le hacemos saber que ha perdido
            echo "Has vendido tu alma al boletín de noticias";
        }


    ?>  
</body>
</html>