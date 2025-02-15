function demoSurvivors() {
    for (let i=0; i<2; i++) {
        let survivor = document.createElement('div');
        survivor.style.width = '40px';
        survivor.style.height = '60px';
        survivor.style.position = 'absolute';
        survivor.style.backgroundColor = 'red';
        
        let position = generateValidCoordsFor('survivor');
        survivor.style.top = position[0] + 'px';
        survivor.style.left = position[1] + 'px';
        
        main.appendChild(survivor);
        displayedEntities.survivors.push(position);
    }
}