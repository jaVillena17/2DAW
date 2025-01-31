<?php
    /**
     * CLase que representa el restaurante
     * 
     * Contiene arrays tanto de mesas como de reservas, 
     * además de los métodos necesarios para gestionar
     * los distintas mesas y reservas
     */
    class Restaurante{
        private $nombre;
        private $mesas;
        private $reservas;

        /**
         * Constructor de la clase restaurante
         * 
         * 
         * Solo recibe el parámetro nombre, tanto mesas como reservas
         * se inician como arrays vacíos
         * @param string $nombre
         */
        function __construct($nombre){
            $this -> nombre = $nombre;
            $this -> mesas = [];
            $this -> reservas = [];
        }

        /**
         * Función que añade una mesa a la lista
         * 
         * @param Mesa mesa a agregar
         */
        function agregarMesa(Mesa $mesa){
            array_push($this -> mesas, $mesa);
        }

        /**
         * Función que muestra las mesas disponible
         * 
         * Recorremos el array de mesas con un foreach e 
         * imprimimos las que tengan el parametro disponible
         * como true
         * 
         * 
         * @return void
         */
        function mostrarMesasDisponibles(){
            foreach ($mesas as $mesa) {
                if($mesa -> disponible = TRUE){
                    echo $mesa -> toString();
                }
            }
        }
        /**
         * Funcion que asigna una reserva a un cliente
         * 
         * Recorremos el array de mesas buscando una mesa con capacidad
         * suficiente, si la encontramos creamos el objeto reserva, la metemos
         * en el array y retornamos true, si no, retornamos false
         * 
         * @param Cliente $cliente Cliente que realiza la reserva 
         * @param int $capacidadRequerida Tamaño de la mesa (mesa.capacidad)
         * @param DateTime Fecha de la reserva
         * @return boolean
         * @author Javier Villena Fernández
         */
        function hacerReserva(Cliente $cliente, $capacidadRequerida, DateTime $fechaHora){
            foreach($mesas as $mesa){
                if($mesa -> capacidad >= $capacidadRequerida){
                    $reserva = new Reserva($cliente, $mesa, $fechaHora);
                    array_push($reservas, $reserva);
                    return TRUE;
                }
            }
            return FALSE;
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