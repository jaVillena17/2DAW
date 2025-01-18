function randomWebmail(){
    let opcion = azar();
        if(opcion == 0){
            alert("Opción 0. Login Hotmail")
            window.location.assign("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=170&ct=1737217734&rver=7.5.2211.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26cobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26RpsCsrfState%3de841f081-faf5-5929-3df8-a1dc08947211&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c");
            alert("Opción . Login Servicio de Hotmail")
        }else if(opcion == 1){
            alert("Opción 1. Login Gmail")
            window.location.assign("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=AVdkyDmTNMXnNxnfuG0FDhJTy28AFh6D6ithdbgdm3RB83sOzH26VX2e-o8A_YIokJf52VtYQsDYxQ&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1944368715%3A1737216439580186&ddm=1")
            alert("Opción 1. Login Gmail")
        }else{
            alert("Opción 2. Login Servicio de Correo")
            window.location.assign("https://serviciodecorreo.es/")
            alert("Opción 2. Login Servicio de Correo")
        }
}

function azar(){
    return Math.floor(Math.random() * 3)
}