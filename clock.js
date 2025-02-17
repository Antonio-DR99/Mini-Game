const timer = {
    ticking: false,
    paused: false,
    lastTime: null, 

    tick() {
        // Credit for the ticking implementation: https://codepen.io/samanime/pen/LYjOvpd
        if(!timer.ticking) return;
        const now = Date.now();
        const delta = now - timer.lastTime;
        timer.lastTime = now;
        if (!timer.paused) { timer.timer -= delta; }

        // Funciones dependientes del tiempo
        timer.reduceLife(delta);
        timer.rotFood(delta);
        moveCloud();
        checkCloudCollision();

        // Consola del desarrollador
        document.getElementById('debTimer').textContent = now;
        document.getElementById('debDelta').textContent = delta;

        // Relanzar función en el próximo fotograma
        requestAnimationFrame(timer.tick);
    },

    reduceLife(delta) {
        for(i=0; i<displayedEntities.survivors.length ; i++){
            if(displayedEntities.survivors[i].state == 'default'){
                displayedEntities.survivors[i].life -= delta;
                if(displayedEntities.survivors[i].life < 0){
                    killSurvivor(i);
                    game.survDead++;
                    ui.updateScores();
                }
            }
        }
    },

    rotFood(delta) {

    },

    disable() { timer.ticking = false; timer.paused = false; },
    enable() { timer.ticking = true; },
    pause() { timer.paused = true; },
    resume() { timer.paused = false; },
}