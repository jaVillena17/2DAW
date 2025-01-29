function play(){
    //Sacamos el video y el boton
    let video = document.querySelector("video#video");
    let button = document.querySelector("button.play");
    //Dependiendo si el video está pausado o no, lo pausamos o reporducimos
    if(video.paused){
        video.play();
        button.innerHTML = "&#9208;"
    }else{
        video.pause();
        button.innerHTML = "&#9658;"
    }
}

function reset(){
    //Sacamos el video y el boton
    let video = document.querySelector("video#video");
    let button = document.querySelector("button.play");
    //Si el video no está al principio
    if(video.currentTime != 0){
        //Lo ponemos a 0
        video.currentTime = 0;
        //Le damos al play y cambiamos boton, por si acaso
        video.play();
        button.innerHTML = "&#9208;"
    }
}

function backward(){
    //Sacamos el video
    let video = document.querySelector("video#video");
    video.currentTime -= 5;
}

function forward(){
    //Sacamos el video
    let video = document.querySelector("video#video");
    video.currentTime += 5;
}

function mute(){
    //Sacamos el video y el bton
    let video = document.querySelector("video#video");
    let button = document.querySelector("button.mute");
    if(!video.muted){
        //Cambiamos muted a true
        video.muted = true;
        //Cambiamos el boton
        button.innerHTML = "Activar Audio"
    }else{
        //Cambiamos muted a false
        video.muted = false;
        //Cambiamos el boton
        button.innerHTML = "Silenciar Audio"
    }
}

function volumeDown(){
    //Sacamos boton y video
    let video = document.querySelector("video#video");
    let button = document.querySelector("button.volDown");
    let volumen = Math.round(video.volume*10);
    if(volumen == 10){
        volumen--;
        document.querySelector("button.volUp").setAttribute("disabled", "false")
    }else if(volumen > 1){
        volumen--;
    }else{
        volumen = 0;
        button.setAttribute("disabled", "true")
    }
    video.volume = volumen/10;
    console.log(video.volume)
}

function volumeUp(){
    //Sacamos boton y video
    let video = document.querySelector("video#video");
    let button = document.querySelector("button.volUp");
    console.log(video.volume)
    let volumen = Math.round(video.volume*10);
    if(volumen == 1){
        volumen++;
        document.querySelector("button.volDown").setAttribute("disabled", "false");
    }else if(volumen < 10){
        volumen++;
    }else{
        volumen = 10;
        button.setAttribute("disabled", "true");
        console.log(volumen)
    }
    video.volume = volumen/10;
    console.log(video.volume)
}
