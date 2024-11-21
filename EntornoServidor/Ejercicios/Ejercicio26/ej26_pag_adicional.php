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
        table{
            margin: 0 auto;
        }
    </style>
    </style>
</head>
<body>
    <?php session_start() ?>
    <h1>Ejercicio 26. Javier Villena Fernández</h1>
    <hr>
    <form action="ej26_datos_personales.php" method="POST">
        <fieldset>
            <legend>Tu Cuenta</legend>
            <table>
                <tr>
                    <th colspan="2"><b>Datos personales</b></th>
                </tr>
                <tr>
                    <td><b>Nombre</b></td>
                    <td><?php  if(isset($_SESSION["nombre"]))echo $_SESSION["nombre"]?></td>
                </tr>
                <tr>
                    <td><b>Apellido</b></td>
                    <td><?php if(isset($_SESSION["apellido"])) echo $_SESSION["apellido"]?></td>
                </tr>
                <tr>
                    <td><b>Edad</b></td>
                    <td><?php if(isset($_SESSION["edad"])) echo $_SESSION["edad"]?></td>
                </tr>
                <tr>
                    <td><b>Email</b></td>
                    <td><?php if(isset($_SESSION["email"])) echo $_SESSION["email"]?></td>
                </tr>
                <tr>
                    <td><b>Provincia</b></td>
                    <td><?php if(isset($_SESSION["provincia"])) echo $_SESSION["provincia"]?></td>
                </tr>
            </table>
        </fieldset>
    </form>

    <a href="ej26_bienvenida.php">Pagina Principal</a><br>
    <a href="ej26_datos_personales.php">Datos Personales</a>
    <form action="ej26_login.php" method="POST">
        <input type="checkbox" name="close" id="closeid" value="cerrar" checked style="display: none">
        <button type="submit">Cerrar sesión</button>
    </form>

</body>
</html>