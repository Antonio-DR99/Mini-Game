let fruitCount=0;
let foods = []

//Genera la comida en una posición aleatoria
function foodGenerate() {
    let food = document.createElement('div');
    food.id="food" + fruitCount;
    food.classList.add("food")
    
    let foodType = Math.floor(Math.random()*3)
    food.classList.add("type" + foodType)

    foods.push({
        'id': fruitCount,
        'life': 900,
        'status': 'normal'
    })

    fruitCount++;

    let foodPosition = generateValidCoordsFor('food');
    food.style.top = foodPosition[1] + 'px';
    food.style.left = foodPosition[0] + 'px';

    main.appendChild(food);
    setTimeout(foodGenerate,rngSeconds(3, 6));
}


function foodDelete(id){
    let food =document.getElementById('food'+id)
    food.remove()
    foods[id].status='invisible'
}


function eatFood(cowId){

        let cow = document.getElementById('cow'+cowId);
        
        let foodElements = document.querySelectorAll('.food');

        let foodClose = null;
        let minDistance=Infinity;

        //obetenemos la posicon de la vaca
        let cowTop=cow.offsetTop;
        let cowLeft=cow.offsetLeft;

        //Buscamos la comida mas cercana
        for (let i=0; i<foodElements.length; i++){
            let foodElement=foodElements[i]; 
            let foodTop=foodElement.offsetTop; 
            let foodLeft=foodElement.offsetLeft; 
            
            //almacenamos la distacia entre la vaca y la comida
            let distace=calculateDistance(cowLeft, cowTop, foodLeft, foodTop);

            if (distace<minDistance) {
                minDistance=distace; 
                foodClose=foodElement;
            }
        }
        
        //Mover el vaca a la fruta
        cow.style.top = foodClose.offsetTop + 'px';
        cow.style.left = foodClose.offsetLeft + 'px';

         // Actualizar las coordenadas de la vaca en cowsData
        cowsData[cowId].posX = foodClose.offsetLeft;
        cowsData[cowId].posY = foodClose.offsetTop;

        setTimeout(function() {
            foodClose.style.visibility = 'hidden';
            cowsData[cowId].life+=40;
        }, 4000);

        

}
