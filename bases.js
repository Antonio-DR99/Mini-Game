const basesGeneration = [
    [0.08 , 0.1],
    [0.15 , 0.75],
    [0.92 , 0.18],
    [0.65 , 0.8],
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