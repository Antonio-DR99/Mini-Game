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
        cloud.move();
        cloud.checkCollision();
        heliData.fuelUpdate();
        if(cloud.attacking) heliData.attack();
        if(heliData.repairing) heliData.repair();
        
        // Consola del desarrollador
        document.getElementById('debDelta').textContent = delta;

        // Relanzar función en el próximo fotograma
        requestAnimationFrame(timer.tick);
    },

    reduceLife(delta) {
        for(i=0; i<cowsData.length ; i++){
            if(cowsData[i].state == 'default'){
                cowsData[i].life -= delta;
                if(cowsData[i].life < 0){
                    killCow(i);
                    game.cowsDie++;
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