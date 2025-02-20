const audio = document.getElementById('audio'); 
const progressLoad=document.getElementById('progress');
let musicaReproducida=false;
let value=0; 
let interval; 
let indice = 0; // Contador para seguir el orden de los mensajes


function updateLoad(){
    if (value>=100) {
        clearInterval(interval)
        document.querySelector('.pantallaCarga').style.display = 'none';
        document.getElementById("statsView").style.display = "flex";
        document.getElementById("buttonsView").style.display = "flex";
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
    interval=setInterval(updateLoad,1); // default is 80!
}


let dialogo=[
    "¡Atención! Las vacas están en posiciones aleatorias. ¡Prepárate para volar y abducirlas!",
    "El reloj está corriendo, ten cuidado con el tiempo. Si no llegas a tiempo, las vacas no podrán ser abducidas.",
    "Recuerda, mientras estés en vuelo, no podrás realizar nuevas órdenes con tu ovni hasta que regreses a la base. ¡Haz cada movimiento contar!",
    "Los números en tu pantalla indican cuántas vacas has abducido y cuántas han caído.",
    "¡Nuevo objetivo! Si una vaca necesita comida, clica sobre ella mientas el ovni esté en vuelo. ¡Pero ten cuidado, el tiempo es limitado!",
    "¡Atención! Un meteorito se acerca. Si te cruzas con el, el ovni podría quedar fuera de servicio. ¡Evítalo a toda costa!",
    "Si la nave se ha dañado, puedes repararla en las bases. Pero solo cuando hayas repostado por completo.",
    "Cuantas más vacas consigas, más puntos obtendrás. ¿Sabes que puedes hacer con ellos? ¡Exacto! Comprar mejoras."
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
    document.querySelector("main").style.display = "none";
};