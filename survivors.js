function demoSurvivors() {
    for (let i=0; i<2; i++) {
        let survivor = document.createElement('div');
        survivor.id="survivor";
        
        let position = generateValidCoordsFor('survivor');
        survivor.style.top = position[0] + 'px';
        survivor.style.left = position[1] + 'px';
        
        main.appendChild(survivor);
        displayedEntities.survivors.push(position);

        survivor.addEventListener('click', () => {
            moveHelicopter(survivor);  // Llamar a la función para mover el helicóptero
        });
    }
}