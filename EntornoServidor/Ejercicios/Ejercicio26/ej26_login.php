<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        fieldset{
            width: 250px;
            margin: 0 auto;
            padding: 10px;
            border-radius: 10px;
            background-color: rgb(215, 216, 216);
        }
        input[type=text], input[type=password]{
            width: 95%;
        }
        button{
            display: block;
            margin: 0 auto;
            background-color: rgb(143, 238, 180);
            width: 80%;
            border: 1px solid black;
        }

    </style>
</head>
<body>
    <h1>Ejercicio 26. Javier Villena Fernández</h1>
    <hr>
    <?php 
        //Comprobamos que se ha hecho post
        if($_SERVER["REQUEST_METHOD"] === "POST"){
            if(isset($_POST["close"])){
                session_start();
                session_destroy();
                session_unset();
                echo "Sesión cerrada con éxito";
            }
            //Si verificamos que usuario y contraseña son correctos
            elseif($_POST["user"] == "user1" && $_POST["pass"] == "1234"){
                //Iniciamos la sesión
                session_start();
                $_SESSION["user"] = $_POST["user"];
                //Enviamos a la web de bienvenida
                header("location:ej26_bienvenida.php");
            }
        }
    ?>
    <form action="ej26_login.php" method="POST">
        <fieldset>
            <legend>Login</legend>
            <label for="userID">Usuario</label><br>
            <input type="text" name="user" id="userID" required><br><br>

            <label for="passID">Contraseña</label><br>
            <input type="password" name="pass" id="passID" required><br><br>
            <button type="submit">Enviar</button>
        </fieldset>
    </form>
</body>
</html>
</body>
</html>