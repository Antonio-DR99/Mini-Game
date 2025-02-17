
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
        audio.pause();
    }else{
        value++
        progresLoad.value=value;
    }
}

function startBarra(){
    document.querySelector('button').style.display='none';
    document.querySelector('.barraCarga').style.display='block';

    value=0; 
    progresLoad.value=value;
    startMusica();
    interval=setInterval(updateLoad,80);
}


let dialogo=[
    "¡Atención, piloto! Los supervivientes están en posiciones aleatorias. ¡Prepárate para volar y rescatarlos!",
    "El reloj está corriendo, ten cuidado con el tiempo. Si no llegas a tiempo, los supervivientes no podrá ser rescatados.",
    "Recuerda, mientras estés en vuelo, no podrás realizar nuevas órdenes hasta que regreses a la base. ¡Haz cada movimiento contar!",
    "Los números en tu pantalla indican cuántos supervivientes has rescatado y cuántos han caído.",
    "¡Nuevo objetivo! Si un superviviente necesita comida, mueve el helicóptero hacia él. ¡Pero ten cuidado, el tiempo es limitado!",
    "¡Piloto, atención! Una tormenta se acerca. Si te cruzas con ella, el helicóptero podría quedar fuera de servicio. ¡Evítala a toda costa!",
];

let indice = 0; // Contador para seguir el orden de los mensajes

function mostrarDialogo() {
    let bocadillo = document.getElementById('bocadillo');
    
    // Mostrar el mensaje correspondiente
    bocadillo.innerHTML = `<p>${dialogo[indice]}</p>`;
    
    // Asegúrate de que el bocadillo esté visible
    bocadillo.style.display = 'block';
    
    // Incrementar el índice para el siguiente mensaje
    indice++;
    
    // Si hemos llegado al final del array, resetear el índice para repetir el bucle
    if (indice >= dialogo.length) {
        indice = 0;  // Resetear al primer mensaje
    }
}