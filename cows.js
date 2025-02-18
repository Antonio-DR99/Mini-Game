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
        moveHelicopter(numId);  // Llamar a la función para mover el heli
    });
    
    entity.appendChild(progress)
    main.appendChild(entity);
    game.cowsGen++;
}

function killCow(who){
    cowsData[who].state = 'dead';
    let node = document.getElementById(`cow${who}`);
    node.classList.add('dead');
    setTimeout(hideCow, 6000, node)
}

function hideCow(node) {
    node.remove();
}