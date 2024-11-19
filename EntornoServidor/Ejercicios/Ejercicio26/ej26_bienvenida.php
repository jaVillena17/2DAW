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
        a{
            display: block;
            border: 1px solid black;
            background-color: aquamarine;
            border-radius: 10px;
            margin: 0 auto;
            width: 70%;
            text-align: center;
            text-decoration: none;
            color: black;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>Ejercicio 26. Javier Villena Fernández</h1>
    <hr>
    <form action="Ejercicio26.php" method="POST" enctype="multipart/form-data">
        <fieldset>
            <legend>Hola!</legend>
            <?php
                session_start();
                echo "Bienvenido, <b>".$_SESSION["user"]."</b><hr>"
            ?>
            <a href="ej26_datos_personales.php">Datos Personales</a><br>
            <a href="ej26_pag_adicional">Página Adicional</a>
        </fieldset>
    </form>
</body>
</html>