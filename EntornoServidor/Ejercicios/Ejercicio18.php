<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $palabras = ["Radar", "Animal", "Periquito", "Reconocer", "Aula"];
        ej18($palabras);
        echo "<br><br>";
        ej181($palabras);
        //Función1 
        function ej181 ($lista){
            //Hacemos un foreach para cada palabra
            foreach ($lista as $palabra){
                //Imprimimos una cosa dependiendo de si es palíndromo o no
                $word = strtolower($palabra);
                if(strrev($word)==$word){
                    echo "¿Es ".$palabra." una palabra palíndromo? Si <br>";
                }else{
                    echo "¿Es ".$palabra." una palabra palíndromo? No <br>";
                }
            }
        }
        


        //Función que reciba un array con 5 palabras y compruebe que son palindromo
        function ej18 ($lista){
            //Hacemos un foreach para cada palabra
            foreach ($lista as $palabra){
                //Imprimimos una cosa dependiendo de si es palíndromo o no
                if(palindromo($palabra)){
                    echo "¿Es ".$palabra." una palabra palíndromo? Si <br>";
                }else{
                    echo "¿Es ".$palabra." una palabra palíndromo? No <br>";
                }
            }
        }


        //Función que comprueba si una palabra es palíndromo
        function palindromo($palabra){
            //Creamos una variable booleana donde definiremos si es palíndromo o no, la iniciamos como true
            $bool = true;
            //Pasamos la palabra a minúscula
            $word = strtolower($palabra);
            //Mediante un bucle for con 2 variables, comparamos la primera y la ultima, después la segunda y la penunltima, etc...
            for ($i=0, $j=strlen($word)-1; $i < $j; $i++, $j--) { 
                //Si son distintas, quiere decir que no es palíndromo
                if ($word[$i] != $word[$j]) $bool = false;
            }
            //Devolvemos la variable booleana
            return $bool;
        }
    ?>
</body>
</html>