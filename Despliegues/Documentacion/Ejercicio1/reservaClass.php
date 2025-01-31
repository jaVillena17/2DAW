<?php
    /**
     * Clase que representa una reserva
     */
    class Reserva{
        private $cliente;
        private $mesa;
        private $fechaHora;
        /**
         * Constructor de la clase reserva
         * 
         * @param obj Cliente $cliente
         * @param Mesa $mesa
         * @param DateTime $fechaHora
         */
        function __construct(Cliente $cliente, Mesa $mesa, DateTime $fechaHora){
            $this -> cliente = $cliente;
            $this -> mesa = $mesa;
            $this -> fechaHora = $fechaHora;
        }

        /**
         * Función que devuelve los detalles de la reserva
         * 
         * @return string
         */
        function __toString(){
            return "Cliente: $cliente, Mesa: $mesa, Fecha y hora: $fechaHora";
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