// Almacenamiento con los elementos creados
const displayedEntities = {
    survivors: [],          // posX, posY, state, life, maxLife
    food: [],
    bases: []
}

// Información del tamaño de los elementos
const info = {
    survivors: {
        width: 40,
        height: 60
    },
    food: {
        width: 40,
        height: 40
    },
    bases: {
        width: 90,
        height: 90
    }
}