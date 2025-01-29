<?php
    /**
     * Clase que representa a un cliente del restaurante
     */
    class Cliente{
        private $nombre;
        private $telefono;

        /**
         * Constructor de la clase cliente
         * 
         * @param string $nombre
         * @param string $telefono
         */
        function __construct($nombre, $telefono){
            $this -> nombre = $nombre;
            $this -> telefono = $telefono;
        }
        /**
         * Funcion que devuelve una cadena con los datos
         * 
         * @return string
         */
        function __toString(){
            return "Nombre: $nombre, Teléfono: $telefono";
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