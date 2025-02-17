let fruitCount=0;

//Genera la comida en una posición aleatoria
function foodGenerate() {
    let food = document.createElement('div');
    food.id="food" + fruitCount;
    food.classList.add("foodDiv")
    fruitCount++;

    let foodPosition = generateValidCoordsFor('food');
    food.style.top = foodPosition[1] + 'px';
    food.style.left = foodPosition[0] + 'px';

    main.appendChild(food);
    displayedEntities.food.push(food);

    setTimeout(foodGenerate,rngSeconds(1, 3));
}
