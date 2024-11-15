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
        input[type=text]{
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
    <h1>Ejercicio 25. Javier Villena Fernández</h1>
    <hr>
    <fieldset>
         <legend>Login</legend>    
        <?php
        if(!isset($_FILES["imagen"])){
            if(!isset($_POST["user"]) || !isset($_POST["pass"])){
                echo "<h2>Error</h2><hr>Faltan datos";
            }elseif($_POST["user"] != "user1"){
                echo "<h2>Error</h2><hr>El usuario no existe";
            }elseif($_POST["pass"] != "1234"){
                echo "<h2>Error</h2><hr>Contraseña incorrecta";
            }else{
                echo "<h4>Bienvenido, ".$_POST["user"]."</h4><hr>";
                
                echo "<form action='Ejercicio25.php' method='POST' enctype='multipart/form-data'>";
                echo "<label for='imgID'>Seleccione la imagen que desea subir</label><br>";
                echo "<input type='checkbox' checked style='display: none' name='user' value='$_POST[user]'>";
                echo "<input type='file' name='imagen'><button type='submit'>Enviar</button></form>";
            }
        }else{
            if($_FILES["imagen"]["type"] != "image/JPG" && $_FILES["imagen"]["type"] != "image/png"){
                echo "Formato de extensión no permitido";
            }elseif($_FILES["imagen"]["size"] > 1024*1024*2){
                echo "El tamaño del archivo supera el permitido";
            }else{
                if(move_uploaded_file($_FILES["imagen"]["tmp_name"], "image_up/archivo.png")){
                    echo "Usuario: ".$_POST["user"]."<hr>";
                    echo "<embed src='image_up/archivo.png' type='image/png'>";
                }
            }
        }
            
        ?>  
    </fieldset>
    
</body>
</html>