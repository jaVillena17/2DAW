<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["closeSession"])){
        session_unset();
        session_destroy();
        setcookie("nombre_usu", "nombre", time()-3600*24*7, "/");
        header("location:ej28_form_inicial.html");
    }
?>