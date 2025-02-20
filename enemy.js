const enemy = {
    posX: 0,
    posY: 0,
    size: 100,
    speedX: 0.4,
    speedY: 0.4,
    attacking: false,
    count: 0,
    angle: 0,
    colliderPause: 0,
    shown: false,

    show() {
        // Crear el div del enemigo
        let enemyElement = document.createElement("div");
        enemyElement.id = "enemy"; 
        enemyElement.className = "enemy";
        main.appendChild(enemyElement);

        // Posición inicial aleatoria
        enemy.posX = Math.floor(Math.random() * (display.width() - enemy.size)); 
        enemy.posY = Math.floor(Math.random() * (display.height() - enemy.size));
        
        // Actualizar el estilo del div
        enemyElement.style.left = enemy.posX + "px";
        enemyElement.style.top = enemy.posY + "px";
        
        enemy.attacking = true;
        enemy.shown=true;
    },

    move() {
        let rebote = false;

        enemy.posX += enemy.speedX;
        enemy.posY += enemy.speedY;

        // Invertir dirección si toca los bordes
        if (enemy.colliderPause <= 0) {
            if (enemy.posX <= 0 || enemy.posX >= display.width() - enemy.size) {
                enemy.speedX = -enemy.speedX;
                rebote = true;
            }

            if (enemy.posY <= 0 || enemy.posY >= display.height() - enemy.size) {
                enemy.speedY = -enemy.speedY;
                rebote = true;
            }
        } else {
            enemy.colliderPause--;
        }


        if (rebote) {
            enemy.colliderPause = 15;
            enemy.updateRotation();   
        }

        // Actualizar el estilo del div en la pantalla
        let enemyElement = document.getElementById("enemy");
        enemyElement.style.left = enemy.posX + "px";
        enemyElement.style.top = enemy.posY + "px";
        enemyElement.style.transform = `rotate(${enemy.angle}deg)`;

        enemy.checkCollisionWithCows();

        enemy.count++;
        if (enemy.count >= 500) {
            enemy.count = 0;
            enemy.randomize();
        }
    },

    checkCollisionWithCows() {
        let cows = document.getElementsByClassName("cow");
            
        for (let i = 0; i < cows.length; i++) {
            let cow = cows[i]; 
            
            let cowCenterX = cow.offsetLeft + cow.offsetWidth / 2;
            let cowCenterY = cow.offsetTop + cow.offsetHeight / 2;
    
            // Calculamos el centro del enemigo
            let enemyCenterX = enemy.posX + enemy.size / 2;
            let enemyCenterY = enemy.posY + enemy.size / 2;
    
            // Comprobamos si el centro del enemigo pasa por el centro de la vaca
            if (Math.abs(enemyCenterX - cowCenterX) < enemy.size / 2 && 
                Math.abs(enemyCenterY - cowCenterY) < enemy.size / 2) {

            let cowId = parseInt(cow.id.replace("cow", ""));
                if (cowsData[cowId].state == "default") {
                    cowsData[cowId].life = 0;
                    document.getElementById(`lifeBar${cowId}`).value = 0;
                    killCow(cowId);
                    game.cowsDie++;
                }     
        }
    }
},

    updateRotation() {
        enemy.angle = Math.atan2(enemy.speedY, enemy.speedX) * (180 / Math.PI) - 15;
    },

    randomize() {
        if (Math.random() < 0.8) {
            enemy.speedX = ((Math.random()*0.6)+0.3)*rngMathInvert()
            enemy.speedY = ((Math.random()*0.6)+0.3)*rngMathInvert()
            enemy.updateRotation();
        }
    },

    disable() {
        let enemyElement = document.createElement("div");
        enemyElement.remove();
    }
}
