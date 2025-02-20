function generateCow() {
    let numId = game.cowsGen;
    let entity = document.createElement('div');
    entity.id = 'cow' + numId;
    entity.className = 'cow';

    let position = generateValidCoordsFor('cow')
    entity.style.left = position[0] + 'px';
    entity.style.top = position[1] + 'px';

    let rngLife = rngSeconds(20, 50)
    
    let progress = document.createElement('progress')
    progress.id = 'lifeBar' + numId;
    progress.className = 'lifeBar';
    progress.max = 100;
    progress.value = 100;

    cowsData.push({
        'posX': position[0],
        'posY': position[1],
        'life': rngLife,
        'maxLife': rngLife,
        'state': 'default',
    });

    entity.addEventListener('click', function() {
          cowAction(numId);
    });
    
    entity.appendChild(progress)
    main.appendChild(entity);
    game.cowsGen++;
}

function killCow(who, instant = false){
    cowsData[who].state = 'dead';
    let node = document.getElementById(`cow${who}`);
    node.classList.add('dead');
    if(!instant) setTimeout(hideCow, 6000, node)
    else hideCow(node);
}

function hideCow(node) {
    node.remove();
}


function cowAction(cowId) {
    
    if(!heliData.moving) moveHelicopter(cowId);
    else{
        if (heliData.moving && cowsData[cowId].state == 'default') {
            eatFood(cowId);
            return;
        } 
    }
}

function removeAllCows() {
    for (i=0; i<cowsData.length; i++){
        if(cowsData[i].state == 'default') killCow(i, true);
    }
}