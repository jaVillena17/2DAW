<!DOCTYPE html>
<html lang="en">
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
        input[type=text], input[type=email]{
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
    </style>
</head>
<body>
    <h1>Ejercicio 26. Javier Villena Fernández</h1>
    <hr>
    <form action="ej26_datos_personales.php" method="POST">
        <fieldset>
            <legend>Tu Cuenta</legend>
            <label for="nameID">Nombre:</label><br>
            <input type="text" name="nombre" id="nameID" required><br><br>

            <label for="apeID">Apellidos</label><br>
            <input type="text" name="ape" id="apeID" required><br><br>

            <label for="edadID">Edad</label><br>
            <input type="number" name="edad" id="edadID"><br><br>

            <label for="mailID">e-mail</label><br>
            <input type="email" name="email" id="mailID"><br><br>

            <label for="proID">Provincia</label><br>
            <input type="text" name="pro" id="proID"><br><br>

            <button type="submit">Enviar</button>
            <?php 
                session_start();
                if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["nombre"])){
                    $_SESSION["nombre"] = htmlspecialchars($_POST["nombre"]);
                    $_SESSION["apellido"] = htmlspecialchars($_POST["ape"]);
                    $_SESSION["edad"] = htmlspecialchars($_POST["edad"]);
                    $_SESSION["email"] = htmlspecialchars($_POST["email"]);
                    $_SESSION["provincia"] = htmlspecialchars($_POST["pro"]);
                    echo "<p style='text-align: center'>Datos subidos con éxito</p>";
                }

            ?>
        </fieldset>
    </form>
    <a href="ej26_bienvenida.php">Pagina Principal</a><br>
    <a href="ej26_pag_adicional.php">Página Adicional</a>
    <form action="ej26_login.php" method="POST">
        <input type="checkbox" name="close" id="closeid" value="cerrar" checked style="display: none">
        <button type="submit">Cerrar sesión</button>
    </form>
</body>
</html>