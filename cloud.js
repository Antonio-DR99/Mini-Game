const cloud = {
    posX: 0,
    posY: 0,
    size: 110,
    speedX: 2,
    speedY: 2,
    attacking: false,
    count: 0,

    show() {
        let stormCloud = document.createElement("div");
        stormCloud.id = "stormCloud"; 
        main.appendChild(stormCloud);
    
        // Posición inicial aleatoria
        cloud.posX = Math.floor(Math.random() * (display.width() - cloud.size)); 
        cloud.posY = Math.floor(Math.random() * (display.height() - cloud.size));
    
    },

    move() {
        cloud.posX += cloud.speedX;
        cloud.posY += cloud.speedY;
        
        // Invertir dirección si toca los bordes
        if (cloud.posX <= 0 || cloud.posX >= display.width() - cloud.size) {
            cloud.speedX = -cloud.speedX; // Cambiar la dirección
        }
    
        if (cloud.posY <= 0 || cloud.posY >= display.height() - cloud.size) {
            cloud.speedY = -cloud.speedY;
        }
    
        // Actualizar posición
        stormCloud.style.left = cloud.posX + "px";
        stormCloud.style.top = cloud.posY + "px";

        cloud.count++
        if(cloud.count >= 500){
            cloud.count = 0
            cloud.randomize()
        }
    },

    checkCollision() {
        let helicopter = document.getElementById("helicopter");
        let heliX = helicopter.offsetLeft;
        let heliY = helicopter.offsetTop;
        let heliSize = 50;

        let deltaX = Math.abs(cloud.posX - heliX);
        let deltaY = Math.abs(cloud.posY - heliY);
        if( deltaX < heliSize && deltaY < heliSize ) cloud.attacking = true;
        else cloud.attacking = false;
    },

    randomize(){
        if(Math.random() < 0.6){
            cloud.speedX = ((Math.random()*3)+1)*rngMathInvert()
            cloud.speedY = ((Math.random()*3)+1)*rngMathInvert()
        }
    }
}

    
    
