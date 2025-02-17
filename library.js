const main = document.querySelector('main');

// INFORMACIÓN SOBRE LA PANTALLA
const display = {
    width() { return main.clientWidth; },
    height() { return main.clientHeight; }
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

// Genera coordenadas válidas sin colisiones en las coordenadas del mapa.
function generateValidCoordsFor(entity) {

    let target;
    if (entity = 'survivor') target = info.survivors;
    if (entity = 'food') target = info.food;

    let valid = true;
    let left, top;
    let attempts = 0;

    do {
        valid = true;
        left = Math.random() * display.width() - target.width;
        top = Math.random() * display.height() - target.height;

        // Collide with survivors
        for(i=0; i<displayedEntities.survivors.length; i++) {
            let deltaX = left - displayedEntities.survivors[i][0];
            let deltaY = top - displayedEntities.survivors[i][1];
            if(deltaX < info.survivors.width && deltaX > - info.survivors.width) {
                if(deltaY < info.survivors.height && deltaY > - info.survivors.height){
                    valid = false;
                }
            }
        }

        // Collide with food
        for(i=0; i<displayedEntities.food.length; i++) {
            let deltaX = left - displayedEntities.food[i][0];
            let deltaY = top - displayedEntities.food[i][1];
            if(deltaX < info.food.width && deltaX > - info.food.width) {
                if(deltaY < info.food.height && deltaY > - info.food.height){
                    valid = false;
                }
            }
        }

        // Collide with bases
        for(i=0; i<displayedEntities.bases.length; i++) {
            let deltaX = left - displayedEntities.bases[i][0];
            let deltaY = top - displayedEntities.bases[i][1];
            if(deltaX < info.bases.width && deltaX > - info.bases.width) {
                if(deltaY < info.bases.height && deltaY > - info.bases.height){
                    valid = false;
                }
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
    if(Math.random < 0.5) return 1;
    else return -1;
}