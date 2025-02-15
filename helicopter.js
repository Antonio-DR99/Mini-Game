

function showHelicopter() {

    let hel=document.createElement('div'); 
    hel.id="helicopter"; 

    hel.style.top=`40px`//coordenada Y
    hel.style.left=`40px`//coordenada X



    main.appendChild(hel);
    
}

function moveHelicopter(target){
    let helicopter= document.getElementById("helicopter"); 

    let targetTop=target.offsetTop; 
    let targetLeft=target.offsetLeft; 

    helicopter.style.top=targetTop+'px';
    helicopter.style.left=targetLeft+'px';
    
    helicopter.classList.add("move");
}

