    function min_max(){
        //Sacamos la altura y anchura de la ventana
        let width = window.innerWidth;
        let height = window.innerHeight;
        //Boton
        let boton = document.getElementById("butID");        

        //Si es diferente a la anchura y altura de la pantalla, cambiamos el tamaño y cambiamos el boton
        if(width != screen.availWidth && height != screen.availHeight){
            //Modificamos el tamaño haciendo uso de window.resize
            window.resizeTo(screen.availWidth, screen.availHeight);
            console.log(height);
            console.log(screen.availHeight);
            //Cambiamos el contenido del boton
            boton.innerHTML = "Minimizar";
        }else{
            window.resizeBy(-200, -200)
            window.moveBy(50,50)
            boton.innerHTML = "Maximizar";
        }
        
    }