function generateCow() {
    let numId = game.cowsGen;
    let entity = document.createElement('div');
    entity.id = 'cow' + numId;
    entity.className = 'cow';

    let position = generateValidCoordsFor('cow')
    entity.style.left = position[0] + 'px';
    entity.style.top = position[1] + 'px';

    let rngLife = rngSeconds(90, 120)

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
    
    main.appendChild(entity);
    game.cowsGen++;
}

function killCow(who){
    cowsData[who].state = 'dead';
    console.log('survivor' + who + ' ha muerto.')
    // display kill state
}