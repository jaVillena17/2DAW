<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        table{
            text-align: center;
        }
        td{
            width: 200px;
        }
    </style><title>Document</title>
</head>
<body>
    <?php 
        //Creamos el array
        $articulos = [
            ["Teclado", 58],
            ["Ratón", 32],
            ["Impresora", 185],
            ["Altavoz", 62],
            ["Auriculares", 36],
            ["Monitor", 102],
            ["Webcam", 47]
        ];

        $num = 2;
        //Función que devuelva el contenido de el array en el indice que le pasamos por parámetro
        function ejercicio15($index){
            //Declaramos la variable global articulos
            global $articulos;
            //Guardamos en un array las claves
            $indices = array_keys($articulos);
            //Buscamos el indice que nos ha pedido en el array con las claves, si no está (es null), decimos que ese elemento no exite
            if (array_search($index, $indices)==null && $index!=0 && $index >= count($articulos)){
                return "Ese elemento no existe.";
            }else{
                return "<table><tr><th>Artículo</th><th>Precio</th></tr><tr><td>".$articulos[$index][0]."</td><td>".$articulos[$index][1]."</td></tr></table>";
            }
        }
        echo ejercicio15($num);
    ?>
</body>
</html>