<?php
    //Comprobamos que el método de request sea POST y que los valores se han introducido todos de forma correcta
    if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["nombre"]) && isset($_POST["email"]) && isset($_POST["color"])){
        //Creamos la sesión y añadimos las credenciales
        session_start();
        $_SESSION["nombre"] = htmlspecialchars($_POST["nombre"]);
        $_SESSION["email"] = htmlspecialchars($_POST["email"]);
        $_SESSION["color"] = $_POST["color"];

        //Creamos la cookie con el nombre de usuario
        setcookie("nombre_usu",htmlspecialchars($_POST["nombre"]),(time() + (3600*24)), "/");
        //Redirigimos a la tercera página
        header("location:ej28_bienvenida.php");
    }
?>