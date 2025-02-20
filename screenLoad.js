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
    "¡Hola! Soy Kael Draven, explorador de tierras olvidadas. ¡Necesito tu ayuda! Algo oscuro está despertando y no puedo enfrentarlo solo.",
    "Para salvar a las vacas, haz clic sobre ellas. Mientras la nave esté en movimiento, sigue haciendo clic para guiarlas hacia la comida y evitar que mueran de hambre.",
    "Cuidado con el monstruo que ronda el mapa. Se mueve aleatoriamente y, si toca a una vaca, la eliminará. Mantén a las vacas a salvo guiándolas lejos de él.",
    "La nave usa gasolina, así que ten cuidado de no quedarte sin ella. Para recargar, ve a una de las bases y espera a que el tanque se llene.",
    "Si la nave está dañada, puedes repararla en una de las bases. Solo colócate sobre el botón con el símbolo de un martillo para arreglarla.", 
    "Puedes obtener bonificaciones para mejorar tu nave. Usa tu dinero para aumentar la capacidad de gasolina, la vida de la nave y su velocidad.",
    "Por cada vaca que rescates, recibirás 1 moneda. Usa tus monedas para conseguir mejoras y fortalecer tu nave.",

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

    mostrarDialogo();
};