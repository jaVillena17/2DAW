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
    <h1>Ejercicio 25v2. Javier Villena Fernández</h1>
    <hr>
    <form action="Ejercicio25v2.php" method="POST" enctype="multipart/form-data">
        <fieldset>
            <legend>Login</legend>
    <!-- Código php para que salga el nombre del usuario-->
            <?php
            echo "Bienvenido,<b> ".$_GET["user"]."</b><hr>";
            ?>
            <label for="imgID">Subir imagen:</label><br><br>
            <input type="file" name="imagen" id="imgID" required><br><br>
            <button type="submit">Enviar</button>
        </fieldset>
        
    </form>
</body>
</html>