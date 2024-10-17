<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td{
            text-align: center;
        }
    </style>
</head>
<body>
    <?php
        //Creamos array aleatorio
        $array1 = [];
        for($i = 0; $i < 20; $i++){
            $array1[] = rand(1,50);
        }
        //Creamos un numero que empeieza por 40, ya que vamos a imprimir 40 numeros, 20 en cada linea
        $base = 40;
        //Ponemos titulo y creamos tabla
        echo "<b>Array Original</b><br><table>";
            echo "<tr>";
            for ($i=0; $i<40; $i++){
                //Imprimimos los indices en la primera fila
                if($i<19){
                    echo "<td>".$i."</td>";
                }
                //Cambiamaos de fila
                else if ($i==19){
                    echo "<td>".$i."</td></tr><tr>";
                }//Imprimimos los valores del array tal cual
                else{
                    echo "<td>".$array1[$i-20]."</td>";
                }
            }
            echo "</tr>";
        echo "</table>";

        //Creamos un indice, que corresponde con el ultimo indice del array
        $index = count($array1)-1;
        //Con un bucle for, recorremos el array hasta ese indice
        for ($i = 0; $i<=$index; $i++){
            //Si el numero que nos encontramos es impar
            if($array1[$i]%2!=0){
                //Guardamos el valor de posicion [index] el array, que empezará siendo la ultima, pero se irá reduciendo
                $temp = $array1[$index];
                //Sobreescribimos el ultimo valor con el numero impar que hemos encontrado
                $array1[$index] = $array1[$i];
                //Sustituimos la posicion en la que nos hemos encontrado el impar por el valor que cogimos de la "index" (mas o menos ultima) posicion
                $array1[$i] = $temp;
                //Reducimos index, en el momento que hemos pasado un impar al final no queremos volver a cogerlo
                $index--;
                //Reducimos i porque no sabemos si el numero que hemos metido en esta posicion es par o impar, solo sabemos que estaba al final
                $i--;
            }
        }
         //Ponemos titulo y creamos tabla
         echo "<b>Array Original</b><br><table>";
         echo "<tr>";
         for ($i=0; $i<40; $i++){
             //Imprimimos los indices en la primera fila
             if($i<19){
                 echo "<td>".$i."</td>";
             }
             //Cambiamaos de fila
             else if ($i==19){
                 echo "<td>".$i."</td></tr><tr>";
             }//Imprimimos los valores del array tal cual
             else{
                 echo "<td>".$array1[$i-20]."</td>";
             }
         }
         echo "</tr>";
        echo "</table>";
    ?>
</body>
</html>