<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            border: 1px solid black;
            width: 400px;
            height: 240px;
            background-color: aquamarine;
            margin: 0 auto;
            border-radius: 10px;
            padding: 10px;
        }
        table{
            border-collapse: collapse;   
            margin: 0 auto;
            background-color: rgb(255, 194, 255);
        }
        td{
            border: 1px solid black;
            padding: 5px;
        }
    </style>
</head>
<body>
    <?php
        //Fecha del día metido por el usuario
        $fecha = strtotime($_POST["fecha"]);

        if(empty($_POST["consulname"])){
            echo "<b>Eror</b>. Debes introducir un tipo de consulta";
        }
        else if(empty($_POST["fecha"])){
            echo "<b>Error</b>, debes introducir una fecha";
        }
        else if(empty($_POST["hor"])){
            echo "<b>Error</b>, debes introducir un horario";
        }
        else if ($fecha > strtotime("-1 day") && $fecha < strtotime("+1 month") && is_numeric($_POST["SegSo"])){
            echo "<div><h3>Su cita:</h3><hr>";
            echo "<table>";
            echo "<tr><td><b>Paciente:</b></td><td>".htmlspecialchars($_POST["nombre"])."<br></td></tr> ";
            echo "<tr><td><b>Numero Seg.Social:</b></td><td>$_POST[SegSo]<br></td></tr> ";
            echo "<tr><td><b>Tipo de Consulta:</b></td><td>$_POST[consulname]<br></td></tr> ";
            echo "<tr><td><b>Fecha:</b></td><td>$_POST[fecha]<br></td></tr> ";
            echo "<tr><td><b>Horario:</b></td><td>$_POST[hor]<br></td></tr> ";
            echo "</table>";
            echo "</div>";
        }else{
            echo "<div><h3>Operación no completada</h3><hr>";
            echo "<p>Introduzca una fecha válida</p>";
        }
    ?>
</body>
</html>