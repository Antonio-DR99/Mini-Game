const timer = {
    ticking: false,
    lastTime: null, 
    genTicks: 1,

    tick() {
        // Credit for the ticking implementation: https://codepen.io/samanime/pen/LYjOvpd
        if(!timer.ticking) return;
        const now = Date.now();
        const delta = now - timer.lastTime;
        timer.lastTime = now;
        timer.timer -= delta;
        
        // Funciones dependientes del tiempo
        timer.reduceLife(delta);
        timer.rotFood();
        timer.generation();
        cloud.move();
        cloud.checkCollision();
        heliData.fuelUpdate();
        ui.updateHud();
        if(cloud.attacking) heliData.attack();
        if(heliData.repairing) heliData.repair();   
        if(enemy.shown)enemy.move();
        if(heliData.glory > 0) heliData.glory--;
        
        // Relanzar función en el próximo fotograma
        requestAnimationFrame(timer.tick);
    },

    generation(){
        if(timer.genTicks == 1){
            for(let i=0; i<5; i++){
                generateCow();
            }
        }
        if(timer.genTicks % 400 == 0){
            if(Math.random() < 0.65){
                generateCow();
                if(Math.random() < 0.15){
                    generateCow();
                }
            }
        }
        if(timer.genTicks % 300 == 0 && Math.random() < 0.65) foodGenerate();
        timer.genTicks++;
    },

    reduceLife(delta) {
        for(i=0; i<cowsData.length ; i++){
            if(cowsData[i].state == 'default'){
                cowsData[i].life -= delta;
                document.getElementById(`lifeBar${i}`).value = (cowsData[i].life * 100)/cowsData[i].maxLife;
                if(cowsData[i].life < 0){
                    killCow(i);
                    game.cowsDie++;
                    ui.updateHud();
                }
            }
        }
    },

    rotFood() {
        for(let i=0;i<foods.length;i++){
            if(foods[i].status == 'normal'){
                if (foods[i].life > 0){
                    foods[i].life -= 1 ;
                }else{
                    foodDelete(i)
                }
            }
        }
    },

    disable() { timer.ticking = false; timer.paused = false; },
    enable() { timer.ticking = true; },
    pause() { timer.paused = true; },
    resume() { timer.paused = false; },
}