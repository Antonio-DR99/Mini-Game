
// Función para crear la nube
    function showCloud() {
    let stormCloud = document.createElement("div");
    stormCloud.id = "stormCloud"; 
    main.appendChild(stormCloud);

    // Tamaño del área de juego
    let areaWidth = main.clientWidth; 
    let areaHeight = main.clientHeight;

    let cloudSize = 70; // Tamaño de la nube

    // Posición inicial aleatoria
    let cloudX = Math.floor(Math.random() * (areaWidth - cloudSize)); 
    let cloudY = Math.floor(Math.random() * (areaHeight - cloudSize));

    // Velocidad de la nube 
    let speedX = 2; // La nube se moverá 2px en el eje X
    let speedY = 2;

    function moveCloud() {
        cloudX += speedX;
        cloudY += speedY;

        // Invertir dirección si toca los bordes
        if (cloudX <= 0 || cloudX >= areaWidth - cloudSize) {
            speedX = -speedX; // Cambiar la dirección
        }

        if (cloudY <= 0 || cloudY >= areaHeight - cloudSize) {
            speedY = -speedY;
        }

        // Actualizar posición
        stormCloud.style.left = cloudX + "px";
        stormCloud.style.top = cloudY + "px";

        // Verificar si la nube colisiona con el helicóptero
        checkCollision();

        // Llamar a la función de nuevo, para que la nube se mueva
        setTimeout(moveCloud,20);
    }

    moveCloud(); // Iniciar el movimiento de la nube
};

// Función para verificar si la nube colisiona con el helicóptero
function checkCollision() {
    let stormCloud = document.getElementById("stormCloud");
    let helicopter = document.getElementById("helicopter");

    // Obtener las coordenadas de la nube y el helicóptero
    let cloudX = stormCloud.offsetLeft; // Coordenadas esquina superior izquierda
    let cloudY = stormCloud.offsetTop; 

    let cloudSize = 35; 
    let heliSize = 25;

    let heliX = helicopter.offsetLeft;
    let heliY = helicopter.offsetTop;

    // Verificar si las coordenadas se superponen
    if (cloudX < heliX + heliSize &&    // Verifica si el borde derecho de la nube está a la izquierda del borde derecho del helicóptero
        cloudX + cloudSize > heliX &&  // Verifica si el borde izquierdo de la nube está a la derecha del borde izquierdo del helicóptero
        cloudY < heliY + heliSize &&  // Verifica si el borde inferior de la nube está arriba del borde inferior del helicóptero
        cloudY + cloudSize > heliY)  // Verifica si el borde superior de la nube está debajo del borde superior del helicóptero
        {  
        endgame();
    }
}
