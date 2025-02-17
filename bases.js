const basesGeneration = [
    [0.04 , 0.1],
    [0.2 , 0.8],
    [0.9 , 0.2],
    [0.8 , 0.7],
]

// Se cogen todas las bases y se muestran cuando se le da al boton start
function showBases() {
    for (let i = 0; i<4; i++){
        let base = document.createElement('div')
        base.className = 'base';
        base.id = 'base' + i;
        base.style.left = display.width() * basesGeneration[i][0] + 'px';
        base.style.top = display.height() * basesGeneration[i][1] + 'px';

        main.appendChild(base);
    }
}