
musicaReproducida=false;
let value=0; 
let progresLoad=document.getElementById('progress');
let interval; 

function startMusica() {
    let audio = document.getElementById('audio'); 

    // Si la música ya se está reproduciendo, la pausamos
    if (musicaReproducida) {
        audio.pause();  // Detiene la música
    } else {
        audio.play();   // Reproduce la música
    }
    // Cambiamos el estado de la variable
    musicaReproducida = !musicaReproducida; 

}

function updateLoad(){
    if (value>=100) {
        clearInterval(interval)
    }else{
        value++
        progresLoad.value=value;
    }
}

function startBarra(){
    value=0; 
    progresLoad.value=value;
    interval=setInterval(updateLoad,80);
}


