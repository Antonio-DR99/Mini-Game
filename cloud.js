let cloudX, cloudY;
let cloudSize = 70;
let speedX = 2;
let speedY = 2; 

// Función para crear la nube
function showCloud() {
    let stormCloud = document.createElement("div");
    stormCloud.id = "stormCloud"; 
    main.appendChild(stormCloud);

    // Posición inicial aleatoria
    cloudX = Math.floor(Math.random() * (display.width() - cloudSize)); 
    cloudY = Math.floor(Math.random() * (display.height() - cloudSize));

    moveCloud(); // Iniciar el movimiento de la nube
};

function moveCloud() {
    cloudX += speedX;
    cloudY += speedY;

    // Invertir dirección si toca los bordes
    if (cloudX <= 0 || cloudX >= display.width() - cloudSize) {
        speedX = -speedX; // Cambiar la dirección
    }

    if (cloudY <= 0 || cloudY >= display.height() - cloudSize) {
        speedY = -speedY;
    }

    // Actualizar posición
    stormCloud.style.left = cloudX + "px";
    stormCloud.style.top = cloudY + "px";
}

// Función para verificar si la nube colisiona con el helicóptero
function checkCloudCollision() {
    let helicopter = document.getElementById("helicopter");
    let heliX = helicopter.offsetLeft;
    let heliY = helicopter.offsetTop;

    let cloudSize = 35; 
    let heliSize = 25;

    // Verificar si las coordenadas se superponen
    if (cloudX < heliX + heliSize &&    // Verifica si el borde derecho de la nube está a la izquierda del borde derecho del helicóptero
        cloudX + cloudSize > heliX &&   // Verifica si el borde izquierdo de la nube está a la derecha del borde izquierdo del helicóptero
        cloudY < heliY + heliSize &&    // Verifica si el borde inferior de la nube está arriba del borde inferior del helicóptero
        cloudY + cloudSize > heliY)     // Verifica si el borde superior de la nube está debajo del borde superior del helicóptero
        {  
        game.death();
    }
}
