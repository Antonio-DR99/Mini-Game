

function showHelicopter() {

    let hel=document.createElement('div'); 
    hel.id="helicopter"; 

    hel.style.top=`40px`//coordenada Y
    hel.style.left=`40px`//coordenada X

    main.appendChild(hel);
}


let helicopterMoving=false //Varible para saber si el heli esta en movimiento

function moveHelicopter(target){

    //si el heli esta en movimiento no hacer nada 
    if (helicopterMoving) {
        return;
    }

    let helicopter= document.getElementById("helicopter"); 
    let survivor=target; //Superviveinte seleccioando

    //coordenadas del superviviente
    let targetTop=target.offsetTop; 
    let targetLeft=target.offsetLeft; 

    // Cambiar el estado a miovimeinto
    helicopterMoving=true; 


    //mover el heli hacia el superviviente
    helicopter.style.top=targetTop+'px';
    helicopter.style.left=targetLeft+'px';
    
    //agregamos la calse de animacion para el heli
    helicopter.classList.add("move");

    setTimeout(function() {
        // Ocultar al superviviente después de que el helicóptero haya llegado
        survivor.style.visibility = 'hidden';
    }, 4000);


    //Esperar 3s antes de llamar a la funcion de regreso
    setTimeout(moveHelicopterBack,4000,survivor); 
}

function moveHelicopterBack(survivor){
    let helicopter=document.getElementById("helicopter"); 

    //Coordenadas de destino
    let destinationTop=50; 
    let destinationLeft=50;
    
    //Mover el heli a la base de destino
    helicopter.style.top=destinationTop+'px';
    helicopter.style.left=destinationLeft+'px';

    //Activamos la animacion de regreso
    helicopter.classList.add("moveBack"); 

    //Hacer visible el superviviente despues de 3 segundos de que el heli regrese
    setTimeout(function() {
        restoreSurvivor(survivor, destinationTop, destinationLeft);
    }, 4000);
}

function restoreSurvivor(survivor,destinationTop,destinationLeft){
    survivor.style.visibility="visible"; //mostramos al superviviente

    survivor.style.top=destinationTop+"px";
    survivor.style.left=destinationLeft+"px";

    helicopterMoving=false; //permitir de nuevo hacer clic

}
