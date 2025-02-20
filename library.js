const main = document.querySelector('main');

// INFORMACIÓN SOBRE LA PANTALLA
const display = {
    width() { return main.clientWidth - 6},
    height() { return main.clientHeight - 12}
}

// INFORMACIÓN SOBRE EL JUEGO
const game = {
    started: false,
    cowsGen: 0,
    cowsAbd: 0,
    cowsDie: 0,
    coins: 0,

    start() {
        if(game.started) return
        
        // Inicializar valores necesarios
        game.started = true;
        
        showBases();
        showHelicopter();
        cloud.show();
        timer.enable();
        timer.tick();

    },

    death(reason) {
        game.started = false;
        ui.showDeath(reason);

        clearInterval(addCow)
        removeHelicopter();
        removeAllCows();
        timer.disable();
        cloud.disable();
        removeFood();
        enemy.disable();
    },

    restart() {
        if(game.started) return
        
        document.getElementById('deathView').style.display = 'none';
        clearInterval(addCow)

        game.cowsGen = 0;
        game.cowsAbd = 0;
        game.cowsDie = 0;
        game.coins = 0;
        game.started = true;
        timer.genTicks = 1;
        heliData.life = 50;
        heliData.maxLife = 50;
        heliData.fuel = 1600;
        heliData.maxFuel = 1600;
        heliData.currentSpeed = 6000;
        heliData.glory = 150;
        heliData.moving = false;
        upgrades.priceHealth = 3;
        upgrades.priceFuel = 5;
        upgrades.priceSpeed = 10;
        ui.upgradeSpeed.parentElement.style.display = 'flex';

        document.getElementById('costHealth').textContent = upgrades.priceHealth;
        document.getElementById('costFuel').textContent = upgrades.priceFuel;
        document.getElementById('costSpeed').textContent = upgrades.priceSpeed;

        fruitCount = 0;
        foods = [];
        cowsData = [];
        
        showHelicopter();
        cloud.show();
        timer.enable();
        timer.tick();
    }

};


// Genera coordenadas válidas sin colisiones en las coordenadas del mapa.
function generateValidCoordsFor(entity) {

    let target;
    if (entity == 'cow') target = info.cows;
    if (entity == 'food') target = info.food;

    let valid, left, top;
    let attempts = 0;

    do {
        valid = true;
        left = Math.random() * (display.width() - target.width);
        top = Math.random() * (display.height() - target.height) + 15;

        // Collide with cows
        for(i=0; i<cowsData.length; i++) {
            let deltaX = Math.abs(left - cowsData[i].posX);
            let deltaY = Math.abs(top - cowsData[i].posY);
            if(deltaX < info.cows.width && deltaY < info.cows.height) {
                valid = false;
            }
        }

        // Collide with food
        let food = document.querySelectorAll('.food');
        for(i=0; i<food.length; i++) {
            let deltaX = Math.abs(left - food[i].offsetLeft);
            let deltaY = Math.abs(top - food[i].offsetTop);
            if(deltaX < info.cows.width && deltaY < info.cows.width) {
                valid = false;
            }
        }

        // Collide with bases
        let bases = document.querySelectorAll('.base')
        for(i=0; i<bases.length; i++) {
            let deltaX = Math.abs(left - bases[i].offsetLeft);
            let deltaY = Math.abs(top - bases[i].offsetTop);
            if(deltaX < info.bases.width && deltaY < info.bases.width) {
                valid = false;
            }
        }

        attempts++;

    } while (!valid && attempts < 100);

    return [left, top];
}

function rngSeconds(min, max) {
    return Math.random() * (max*1000-min*1000) + max*1000;
}

function rngMathInvert() {
    if(Math.random() < 0.5) return 1;
    else return -1;
}