function verEnunciado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("enunciadoID");
    let boton = document.getElementById("botonEnun");
    //Si es parrafo está vacio, imprimos el enunciado y cambiamos que el boton muestre Ocultar Resultado
    if(p.innerHTML.length==0){
        p.innerHTML = "Creación de usuario";
        console.log("Mensaje de prueba en consola")
        boton.value = "Ocultar Enunciado"
    }
    //En el caso de que el parrafo tenga algo, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado"
    }
}

function verResultado(){
    //Creamos una variable donde señalamos el parrafo y el boton que modificaremos
    let p = document.getElementById("resolucionID");
    let boton = document.getElementById("botonRes");
    //Si el parrafo está vacio, realizamos el ejercicio
    if(p.innerHTML.length==0){
        //Pedimos usuario y contraseña
        let user = userCreation();
        let pass = passCreation();

        if(pass == 0){
            p.innerHTML = "La contraseña no coincide, vuelva a intentarlo"
        }else{
            p.innerHTML = `Usuario: ${user} <br>\nContraseña: ${pass}`;
        }
        

        //Cambioamos el texto que muestra el boton
        boton.value = "Ocultar Resultado";
    }
    //Si el ejercicio ya está resuelto y en pantalla, lo reiniciamos
    else{
        p.innerHTML="";
        boton.value = "Ver Enunciado";
    }
    
}

function userCreation(){
    const userRegex = /^\w*\.?-?\w*\.?-?\w*@\w*-?\w*((.com)|(.com.es)|(.site))?$/;
    let user = "";
    while(!userRegex.test(user)){
        user = prompt("Introduzca su email");
        if(!userRegex.test(user)){
            alert("Formato de e-mail inválido, vuelva a intentarlo o pruebe con otra dirección de correo")
        }
    }
    return user;
}

function userValidator(email){
    let test = prompt("Vuelva a introducir su dirección de correo");
    return (test == email)
}

function passCreation(){
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#$@!%&?])(?!.*? ).{8,16}$/;
    let pass = "";
    while(!passRegex.test(pass)){
        pass = prompt("Introduzca su contraseña");
        if(!passRegex.test(pass)){
            alert("Formato de contraseña incorrecta, vuelva a intentarlo")
        }
    }
    let pass2 = prompt("Vuelva a introducir la contraseña0");
    if (pass == pass2) return pass
    else return 0;
}