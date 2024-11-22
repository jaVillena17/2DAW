<?php 
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        setcookie("idioma",$_POST["lan"],(time() + (3600*24*30)),"/");
        echo $_POST["lan"];
        header("location:ej27_web_idioma.php");
        exit();
    }
?>
