const main = document.querySelector('main');

// INFORMACIÓN SOBRE LA PANTALLA
const display = {
    width() { return main.clientWidth },
    height() { return main.clientHeight }
}

// INFORMACIÓN SOBRE EL JUEGO
const game = {
    started: false,
    survGene: 0,
    survResc: 0,
    survDead: 0,

    start() {
        if(game.started) return
        // graphics.render();
        document.querySelector('main h1').style.display = 'none';
        showHelicopter();
        showBases();
        foodGenerate();
        cloud.show();
        timer.enable();
        timer.tick();

        // Inicializar valores necesarios
        game.survGene = 0,
        game.survResc = 0,
        game.survDead = 0,
        game.started = true;
    },

    death() {
        alert('Game Over') // Solución temporal
        game.started = false;
    }
};

const ui = {
    updateScores() {
        document.getElementById('statAbd').textContent = game.survResc;
        document.getElementById('statDea').textContent = game.survDead;
    }
}

function bruteforceTest() {
    if(!confirm('This might take a while')) return;
    for(let i=0; i<100; i++){
        generateSurvivor();
    }
}

// Genera coordenadas válidas sin colisiones en las coordenadas del mapa.
function generateValidCoordsFor(entity) {

    let target;
    if (entity == 'survivor') target = info.survivors;
    if (entity == 'food') target = info.food;

    let valid, left, top;
    let attempts = 0;

    do {
        valid = true;
        left = Math.random() * display.width() - target.width;
        top = Math.random() * display.height() - target.height;

        // Collide with survivors
        for(i=0; i<displayedEntities.survivors.length; i++) {
            let deltaX = Math.abs(left - displayedEntities.survivors[i].posX);
            let deltaY = Math.abs(top - displayedEntities.survivors[i].posY);
            if(deltaX < info.survivors.width && deltaY < info.survivors.height) {
                valid = false;
            }
        }

        // Collide with food
        let food = document.querySelectorAll('.food');
        for(i=0; i<food.length; i++) {
            let deltaX = Math.abs(left - food[i].offsetLeft);
            let deltaY = Math.abs(top - food[i].offsetTop);
            if(deltaX < info.food.width && deltaY < info.food.width) {
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