
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
            speedX = -speedX;
        }

        if (cloudY <= 0 || cloudY >= areaHeight - cloudSize) {
            speedY = -speedY;
        }

        // Actualizar posición
        stormCloud.style.left = cloudX + "px";
        stormCloud.style.top = cloudY + "px";

        // Llamar a la función de nuevo, para que la nube se mueva
        setTimeout(moveCloud,20);
    }

    moveCloud(); // Iniciar el movimiento de la nube
};
