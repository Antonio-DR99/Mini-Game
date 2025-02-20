const audio = document.getElementById('audio'); 
const progressLoad=document.getElementById('progress');
let musicaReproducida=false;
let value=0; 
let interval; 
let indice = 0; // Contador para seguir el orden de los mensajes


function updateLoad(){
    if (value>=100) {
        clearInterval(interval)
        audio.pause();
        document.querySelector('.pantallaCarga').style.display = 'none';
        document.getElementById("statsView").style.display = "flex";
        document.getElementById("buttonsView").style.display = "block";
        document.querySelector("main").style.display = "block";

        game.start();
    }else{
        value++
        progressLoad.value=value;
    }
}

function startBarra(){
    document.querySelector('button').style.display='none';
    document.querySelector('.menu').style.display='none';
    document.querySelector('.barraCarga').style.display='block';

    value=0; 
    progressLoad.value=value;
    audio.play();  
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

window.onload = function() {
    document.getElementById("statsView").style.display = "none";
    document.getElementById("buttonsView").style.display = "none";
    // document.querySelector("main").style.display = "none";
};