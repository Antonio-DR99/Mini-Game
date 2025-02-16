function generateSurvivor() {
    let numId = game.survGene;
    let entity = document.createElement('div');
    entity.id = 'survivor' + numId;
    entity.className = 'survivor';

    let position = generateValidCoordsFor('survivor')
    entity.style.left = position[0] + 'px';
    entity.style.top = position[1] + 'px';

    let rngLife = rngWithin(10000, 15000)

    displayedEntities.survivors.push({
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
    game.survGene++;
}

function killSurvivor(who){
    displayedEntities.survivors[who].state = 'dead';
    console.log('survivor' + who + ' ha muerto.')
    // display kill state
}

/* DEPRECATED FUNCTION
function demoSurvivors() {
    for (let i=0; i<2; i++) {
        let survivor = document.createElement('div');
        survivor.id="survivor";
        
        let position = generateValidCoordsFor('survivor');
        survivor.style.top = position[0] + 'px';
        survivor.style.left = position[1] + 'px';
        
        main.appendChild(survivor);
        displayedEntities.survivors.push(position);

        survivor.addEventListener('click', function() {
            moveHelicopter(survivor);  // Llamar a la función para mover el heli
        });
    }
} */