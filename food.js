let fruitCount=0;

//Genera la comida en una posición aleatoria
function foodGenerate() {
    let food = document.createElement('div');
    food.id="food" + fruitCount;
    food.classList.add("food")

    fruitCount++;

    let foodType = Math.floor(Math.random()*3)
    food.classList.add("type" + foodType)

    let foodPosition = generateValidCoordsFor('food');
    food.style.top = foodPosition[1] + 'px';
    food.style.left = foodPosition[0] + 'px';

    main.appendChild(food);

    setTimeout(foodGenerate,rngSeconds(3, 6));
}

