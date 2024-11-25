<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ejercicio 28. Javier Villena Fernández</h1><hr>
    <?php
        session_start();
        if(isset($_SESSION["nombre"]) && isset($_SESSION["email"]) && isset($_COOKIE["nombre_usu"])){
            echo "<div style='background-color: $_SESSION[color]'>
            <h2>!Hola, $_COOKIE[nombre_usu]!</h2><br>
            Tu correo es: $_SESSION[email]<br><br>
            <form action='ej28_cerrar_sesion.php' method='POST'>
                <input type='checkbox' value='closeSession' name ='closeSession' checked style='display:none'>
                <button type='submit'>Cerrar sesión</button>
            </form></div>";
        }else{
            echo "<h2>!Hola, No has iniciado sesión!</h2><br>";
        }
        
    ?>
</body>
</html>