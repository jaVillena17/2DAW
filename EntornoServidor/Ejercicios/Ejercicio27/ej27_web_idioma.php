<!DOCTYPE html>
<html lang=<?php
    //Definimos el idioma en la estructura html, comprobando antes que la cookie existe
    if(isset($_COOKIE["idioma"])) echo "$_COOKIE[idioma]";
    else echo "es";
?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ejercicio 27. Javier Villena Fernández</h1>
    <hr>

    <?php
        //Comprobamos y asignamos 
        if(isset($_COOKIE["idioma"])){
            if($_COOKIE["idioma"] == "es"){
                echo "<p>Hola, bienvenido a nuestra página web</p>";
                echo "<p>Página en español</p>";
            }elseif($_COOKIE["idioma"] == "en"){
                echo "<p>Hello, welcome to our website</p>";
                echo "<p>Page in English</p>";
            }
        }else{
            setcookie("idioma","es",(time() + (3600*24*30)),"/");
            echo "<p>Hola, bienvenido a nuestra página web</p>";
            echo "<p>Página en español</p>";
        }
        echo "<a href='ej27_idioma.html'><button>Cambiar idioma</button></a>";
    ?>
</body>
</html>