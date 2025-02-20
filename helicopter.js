const helicopter = document.getElementById('helicopter')

const heliData = {
    moving: false,
    maxLife: 50,
    life: 50,
    maxFuel: 1600,
    fuel: 1600,
    repairing: false,
    currentSpeed: 6000,
    glory: 300,

    attack() {
        if(heliData.glory > 0) return;
        heliData.life -= 1.5;
        if(heliData.life <= 0){
            heliData.life = 0;
            game.death('life');
        }
    },
    repair() {
        heliData.life += 0.5;
        if(heliData.life >= heliData.maxLife){
            heliData.life = heliData.maxLife;
            heliData.repairing = false;
        }
    },
    fuelUpdate(){
        if(heliData.moving){
            heliData.fuel -= 1;
            if(heliData.fuel <= 0) {
                game.death('fuel');
            }
        } else {
            if(heliData.fuel < heliData.maxFuel) heliData.fuel += 5;
            else heliData.fuel = heliData.maxFuel;
        }
        document.getElementById('heliFuel').textContent = heliData.fuel;
    },
    startRepair(){
        if(!heliData.moving && heliData.fuel == heliData.maxFuel){
            heliData.repairing = true;
        }
    }
}

//-------------------------------------//

//Crear el heli en la pantalla 
function showHelicopter() {
    let hel = document.createElement('div'); 
    hel.id = "helicopter"; 

    let rng = Math.floor(Math.random()*4);
    let base = document.getElementById(`base${rng}`);
    hel.style.top= base.style.top;
    hel.style.left= base.style.left;

    main.appendChild(hel);
}

//Funcion para mover el heli hacia la vaca
function moveHelicopter(cowId){

    //solo recoger vacas en estado normal.
    if (cowsData[cowId].state != 'default') return;
    cowsData[cowId].state = 'rescued';

    // Cambiar el estado a miovimeinto
    heliData.moving = true; 
    heliData.repairing = false;
    let helicopter = document.getElementById("helicopter"); 
    let cow = document.getElementById(`cow${cowId}`);

    main.classList.add("HelicopterMoving");

    //resetear las animaciones
    helicopter.classList.remove("move","moveBack"); 

    //mover el heli hacia la vaca
    helicopter.style.left = cowsData[cowId].posX +'px';
    helicopter.style.top = cowsData[cowId].posY +'px';
    
    //agregamos la calse de animacion para el heli
    helicopter.classList.add("move");

    //Ocultar la vaca pasado 4s desde que llegue el heli
    setTimeout(function() {
        cow.style.visibility = 'hidden';// Ocultar la vaca después de que el helicóptero haya llegado
        moveHelicopterBack(cow); 
    }, heliData.currentSpeed);

    setTimeout(function() {
        cow.classList.add('abducing');
    }, heliData.currentSpeed - 1500);

    //Esperar 4s antes de llamar a la funcion de regreso
    
}

//Funcion para mover el heli de regreso a la base mas cercana
function moveHelicopterBack(cow){
    if (!game.started) return;
    let helicopter=document.getElementById("helicopter"); 

    let bases=document.querySelectorAll(".base");

    let baseClose=null; //almacenar la base mas cercana
    let minDistance=Infinity;

    //obetenemos la posicon del heli
    let heliTop=helicopter.offsetTop;
    let heliLeft=helicopter.offsetLeft;

    //Buscamos la base mas cercana
    for (let i=0; i<bases.length; i++){
        let base=bases[i]; 
        let baseTop=base.offsetTop; 
        let baseLeft=base.offsetLeft; 
        
        //almacenamos la distacia entre el heli y una base
        let distace=calculateDistance(heliLeft, heliTop, baseLeft, baseTop);

        if (distace<minDistance) {
            minDistance=distace; 
            baseClose=base;
        }
    }

    //quitar animacion anterior 
    helicopter.classList.remove("move","moveBack");

    //Coordenadas de destino
    let destinationTop=baseClose.offsetTop - 25; 
    let destinationLeft=baseClose.offsetLeft;
    
    //Mover el heli a la base de destino
    helicopter.style.top=destinationTop+'px';
    helicopter.style.left=destinationLeft+'px';

    //Activamos la animacion de regreso
    helicopter.classList.add("moveBack"); 

    //Hacer visible la vaca despues de 4 segundos de que el heli regrese
    setTimeout(function() {
        restoreCow(cow, destinationTop, destinationLeft);
    }, 4000);
}

//Funcion para mostrar la vaca en la base correspondiente
function restoreCow(cow,destinationTop,destinationLeft){
    cow.style.visibility="visible"; //mostramos la vacal
    
    //Mover la vaca a la base en las coordenadas de destino 
    cow.style.top=destinationTop+"px";
    cow.style.left=destinationLeft+"px";
    cow.classList.add('abduced');
    
    cow.style.pointerEvents="none";
    
    heliData.moving = false; //permitir de nuevo hacer clic al terminar el movimeinto
    main.classList.remove("HelicopterMoving");

    setTimeout(hideCow, 6000, cow);
    game.cowsAbd++;
    game.coins++;
    ui.updateHud();
}

//funcion para calcular la distancia entre 2 puntos
function calculateDistance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
}



//Funcion para eliminar el heli

function removeHelicopter(){
    let helicopter=document.getElementById('helicopter'); 

    if (helicopter) {
        helicopter.remove(); 
        heliData.moving=false; 
        heliData.life=50;
        heliData.life=heliData.maxLife; 
        heliData.maxFuel=1400;
        heliData.fuel=heliData.maxFuel; 
        heliData.repairing=false;
    }
}