<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $ordenadores = ["Portátil"=>[
                            ["marca"=> "HP", "procesador"=>"INTEL i5", "precio"=>623],
                            ["marca"=> "LENOVO", "procesador"=>"INTEL i7", "precio"=>925]],
                        "Sobremesa"=>[
                            ["marca"=> "HP", "procesador"=>"AMD RYZEN 5","monitor"=>"LG 23.8","precio"=>623],
                            ["marca"=> "ACER", "procesador"=>"INTEL i7","monitor"=>"MSI 27`p","precio"=>925]]
                        ];
        var_export($ordenadores);

        foreach($ordenadores as $pc => $tipo){
            echo "<h3>".$pc."</h3>"."<br>";
            foreach($tipo as $pc2){
                    echo "Marca: ".$pc2["marca"]."<br>";
                    echo "Procesador: ".$pc2["procesador"]."<br>";
                    if (count($pc2)==4)  echo "Monitor: ".$pc2["monitor"]."<br>";
                    echo "Precio: ".$pc2["precio"]."<br>";
                    echo "<hr>";
 
            }
        }
        echo "<hr><hr>";
        $ordenadores["Portátil"][]=["marca"=> "LENOVO", "procesador"=>"INTEL i5", "precio"=>503];
        $ordenadores["Sobremesa"][]=["marca"=> "LENOVO", "procesador"=>"INTEL i5", "monitor"=> "ASUS 28.3p", "precio"=>740];
    
        foreach($ordenadores as $pc => $tipo){
            echo "<h3>".$pc."</h3>"."<br>";
            foreach($tipo as $pc2){
                    echo "Marca: ".$pc2["marca"]."<br>";
                    echo "Procesador: ".$pc2["procesador"]."<br>";
                    if (count($pc2)==4)  echo "Monitor: ".$pc2["monitor"]."<br>";
                    echo "Precio: ".$pc2["precio"]."<br>";
                    echo "<hr>";
 
            }
        }
    ?>
</body>
</html>