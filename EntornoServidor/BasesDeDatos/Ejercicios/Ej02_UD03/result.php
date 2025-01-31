<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        session_start();
        if(isset($_POST["juego"]) && isset($_POST["del"])){
            //Guardamos los datos del post
            $juego = htmlspecialchars_decode($_POST["juego"]);
            $del = htmlspecialchars_decode($_POST["del"]);
            //Conexión a la base de datos
            $host = "localhost";
            $user = "root";
            $pass = "";
            $name_db = "Campeonatos";

        
            //Establecer Conexion
            $conexion = mysqli_connect($host, $user, $pass, $name_db);
            //Consulta
            $query = "UPDATE juegos
            SET delegado = '$del'
            where IdJuego = '$juego'";
            //Sacamos el resultado
            $resultado = mysqli_query($conexion, $query);
            //Si la consulta solo arroja 1 resultado, se ha realizado correctamente
            if(mysqli_affected_rows($conexion) == 1){
                echo "Se ha realizado la actualización de forma correcta<br>";
            }else{
                echo "Ha ocurrido un error. No se ha realizado la operación<br>";
            }

            echo "¿Quieres realizar más actualizaciones?<br>";
            
        }else{
            echo "error";
        }
    ?>

    <a href="update.php"><button>Si</button></a>

    <form action="update.php" method="post">
        <input type="checkbox" name="no" id="no" checked style="display: none;">
        <button type="submit">No</button>
    </form>

    
</body>
</html>