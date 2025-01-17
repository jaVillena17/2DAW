<?php 
    $host = "localhost";
    $user = "root";
    $pass = "";
    $name_db = "Campeonatos";

    //Establecer Conexion
    $conexion = mysqli_connect($host, $user, $pass, $name_db);

    //Crear y ejecutar consulta
    $query1 = "SELECT * FROM JUEGOS";
    $resultado = mysqli_query($conexion, $query1);
    //Obtener resultados
    while($registro = mysqli_fetch_assoc($resultado)){
        echo "El código del juego es: $registro[IdJuego], Nombre de juego: $registro[nombreJuego], el delegado es: $registro[delegado]<br>";
    }
?>