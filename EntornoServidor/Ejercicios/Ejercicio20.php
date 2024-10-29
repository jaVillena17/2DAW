<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $texto = "Todos los dias de la semana voy al IES Jorge Guillén porque estoy en segundo curso del ciclo formativo DAW";
        $palabra = "DaW";
        $palProhibidas = ["daw", "segundo"];

        func_texto($texto, $palabra, $palProhibidas);


        function func_texto($text, $word, $prohibidas){
            //Longitud del textp
            echo "Longitud de texto: ". strlen($text)."<br>";
            //Número de palabras
            echo "Cantidad de palabras: ". str_word_count($text)."<br>";
            //NUmero de veces que se repite una palabra
            echo "La palabra ".$word." aparece ". contarPalabra($text, $word)."vez/veces<br>"; 
            //Palabra prohibida
            //$tes2 = "";
            foreach ($prohibidas as $paProhibida){
                $text = str_ireplace($paProhibida, censoreship($paProhibida), $text);
            }
            echo "Texto con palabras prohibidas reemplazadas por asteriscos: ". $text;
        }

        //Función que cuenta cuantas veces se repite una palabra en un texto. Lo pasamos a mayusculas
        function contarPalabra($text , $word){
            return substr_count(strtolower($text), strtolower($word));
        }

        //Función que cambia una palabra por asteriscos del mismo tamaño
        function censoreship ($word){
            $cad = "";
            for ($i=0; $i < strlen($word); $i++) { 
                $cad = $cad."*";
            }
            return $cad;
        }

    ?>
</body>
</html>