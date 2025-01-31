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
        echo "Bienvenido $_SESSION[name]";

        if(isset($_POST["no"])){
            session_abort();
            session_destroy();

            header("location: login.php");
            exit();
        }
    ?>
    <form action="result.php" method="post">
        <label for="juego">Id del Juego: </label>
        <input type="text" name="juego" id="juego"><br><br>

        <label for="del">Nuevo Delegado</label>
        <input type="text" name="del" id="del"><br><br>

        <button type="submit">Enviar</button>
    </form>
</body>
</html>