<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Login</h2>
    <form action="login.php" method="POST">
        <label for="user">Usuario: </label>
        <input type="text" name="user" id="user" require><br><br>

        <label for="pass">Contraseña: </label>
        <input type="password" name="pass" id="pass" require><br><br>

        <button type="submit">Enviar</button>
    </form>

    <?php 

        if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["user"]) && isset($_POST["pass"])){
            if($_POST["user"] == "admin1" && $_POST["pass"] == "1234"){
                //Iniciamos la sesión
                session_start();
                $_SESSION["name"] = htmlspecialchars_decode($_POST["user"]);
                header("location: update.php");
                exit();
            }else{
                echo "Login incorrecto";
            }
        }

    ?>
</body>
</html>