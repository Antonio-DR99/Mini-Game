
//Variables Globales: 
let helicopterMoving=false //Varible para saber si el heli esta en movimiento

//-------------------------------------//

//Crear el heli en la pantalla 
function showHelicopter() {
    let hel=document.createElement('div'); 
    hel.id="helicopter"; 

    hel.style.top=`40px`
    hel.style.left=`40px`

    main.appendChild(hel);
}

//Funcion para mover el heli hacia el superviviente
function moveHelicopter(target){

    //si el heli esta en movimiento no hacer nada 
    if (helicopterMoving) {
        return;
    }

    let helicopter= document.getElementById("helicopter"); 
    let survivor=target; //Superviveinte seleccioando

    //resetear las animaciones
    helicopter.classList.remove("move","moveBack"); 

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

    //Ocultar al superviviente pasado 4s desde que llegue el heli
    setTimeout(function() {
        survivor.style.visibility = 'hidden';// Ocultar al superviviente después de que el helicóptero haya llegado
    }, 4000);

    //Esperar 4s antes de llamar a la funcion de regreso
    setTimeout(moveHelicopterBack,4000,survivor); 
}

//Funcion para mover el heli de regreso a la base mas cercana
function moveHelicopterBack(survivor){
    let helicopter=document.getElementById("helicopter"); 

    let bases=document.querySelectorAll(".base1, .base2, .base3, .base4");


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
    let destinationTop=baseClose.offsetTop; 
    let destinationLeft=baseClose.offsetLeft;
    
    //Mover el heli a la base de destino
    helicopter.style.top=destinationTop+'px';
    helicopter.style.left=destinationLeft+'px';

    //Activamos la animacion de regreso
    helicopter.classList.add("moveBack"); 

    //Hacer visible el superviviente despues de 4 segundos de que el heli regrese
    setTimeout(function() {
        restoreSurvivor(survivor, destinationTop, destinationLeft);
    }, 4000);
}

//Funcion para mostrar al superviviente en la base correspondiente
function restoreSurvivor(survivor,destinationTop,destinationLeft){
    survivor.style.visibility="visible"; //mostramos al superviviente

    //Mover al superviviente a la base en las coordenadas de destino 
    survivor.style.top=destinationTop+"px";
    survivor.style.left=destinationLeft+"px";

    helicopterMoving=false; //permitir de nuevo hacer clic al terminar el movimeinto

}

//funcion para calcular la distancia entre 2 puntos
function calculateDistance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
}