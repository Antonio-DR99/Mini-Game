// Almacenamiento con los elementos creados
const displayedEntities = {
    survivors: [],
    food: [],
    bases: []
}

// Información sobre la partida actual
const gameStats = {
    rescued: 0,
    dead: 0
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