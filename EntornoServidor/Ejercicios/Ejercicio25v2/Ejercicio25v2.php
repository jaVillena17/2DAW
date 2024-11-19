<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //Comprobamos que se ha hecho post
        if($_SERVER["REQUEST_METHOD"] === "POST"){
            //Si no hay imagen es porque estams en el formulario de acceso de usuario
            if(!isset($_FILES["imagen"])){
                $nombre = $_POST["user"];
                //Si verificamos que usuario y contraseña son correctos
                if($_POST["user"] == "user1" && $_POST["pass"] == "1234"){
                    session_start();
                    $_SESSION["user"] = $_POST["user"];
                    header("Location:form_bienve25.php");
                    //header("Location:form_bienve25.php?user=$nombre");
                }
            }else{
                //Si no, estamos en el segundo formulario, en el de subida de imagen
                if($_FILES["imagen"]["type"] != "image/jpg" && $_FILES["imagen"]["type"] != "image/png" &&$_FILES["imagen"]["type"] != "image/jpeg"){
                    echo "Formato no permitido";
                }elseif($_FILES["imagen"]["size"] > 1024*1024*2){
                    echo "El tamaño del archivo supera el permitido";
                }else{
                    if(move_uploaded_file($_FILES["imagen"]["tmp_name"], "image_up/archivo.png")){
                        echo "<embed src='image_up/archivo.png' type='image/png'>";
                    }
                }
    
            }
        }
    ?>
</body>
</html>