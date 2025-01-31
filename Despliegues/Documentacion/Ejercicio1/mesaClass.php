<?php 
/**
 * Clase que representa una mesa del restaurante
 */
class Mesa{
    private $numero;
    private $capacidad;
    private $disponible;
    /**
     * Constructor de la clase Mesa
     * 
     * @param int $numero
     * @param int $capacidad
     * @param boolean $disponible
     */
    function __construct ($numero, $capacidad, $disponible){
        $this -> numero = $numero;
        $this -> capacidad = $capacidad;
        $this -> disponible = $disponible;
    }
    /**
     * Función para reservar mesa
     * 
     * Al reservar la mesa el parámetro displonible pasa a ser FALSE
     * @return void
     */
    function reservar(){
        $this -> disponible = FALSE;
    }

    /**
     * Función para liberar mesa
     * 
     * Al reservar la mesa el parámetro displonible pasa a ser TRUE
     * @return void
     */
    function liberar(){
        $this -> disponible = TRUE;
    }
    /**
     * Funcion para comprobar si una mesa está disponible
     * 
     * @return boolean
     */
    function estaDisponible(){
        return $this -> disponible;
    }

    //Get and set
    public function __get($propiedad) {
        return isset($this->$propiedad) ? $this->$propiedad : null;
    }

    public function __set($propiedad, $valor) {
        $this->$propiedad = $valor;
    }
    
}
?>