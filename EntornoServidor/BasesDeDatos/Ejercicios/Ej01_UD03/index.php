<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label for="pro">Introduzca el nombre de la provincia</label>
        <input type="text" name="provincia" id="pro">
        <button type="submit">Enviar</button>
    </form>

    <?php
        if($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["provincia"])){
            $host = "localhost";
            $user = "root";
            $pass = "";
            $name_db = "Campeonatos";


            $provincia = $_POST["provincia"];
    
            //Establecer Conexion
            $conexion = mysqli_connect($host, $user, $pass, $name_db);
            //Consulta
            $query = "select NombreCiudad, Provincia, NumHab
            from ciudades
            where Provincia = '$provincia';";

            $resultado = mysqli_query($conexion, $query);

            echo "<table><tr><th>Nombre Ciudad</th><th>Provincia</th><th>Número de Habitantes</th></tr>";

            if(mysqli_num_rows($resultado) == 0){
                echo "En la provincia de $provincia no se ha celebrado ninguna competición";
            }else{
                while($registro = mysqli_fetch_assoc($resultado)){
                    echo "<tr><td>$registro[NombreCiudad]</td><td>$registro[Provincia]</td><td>$registro[NumHab]</td></tr>";
                }
            }
            echo "</table>";
        }        
    ?>
</body>
</html>