//Genera la comida en una posición aleatoria
function foodGenerate() {

    for (let i=0; i<3; i++) {
    let food = document.createElement('div');
    food.id="food";

    let foodPosition = generateValidCoordsFor('food');
    food.style.top = foodPosition[0] + 'px';
    food.style.left = foodPosition[1] + 'px';

    main.appendChild(food);
    displayedEntities.food.push(food);
    }
    
    foodRot(food);
}

//Hace desaparecer la comida
function foodRot(food){
    let desaparicion = Math.random() * (10000 - 6000) + 6000;

    setTimeout(function () {
        
        for (let i = 0; i < displayedEntities.food.length; i++) {
            displayedEntities.food[i].remove(); 
        }
        
        displayedEntities.food = [];
    }, desaparicion);
}

//Despues de un tiempo vuelve a generar comida
let aparicion = Math.random() * (16000 - 12000) + 12000;
setTimeout(foodGenerate, aparicion);