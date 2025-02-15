// Se cogen todas las bases y se muestran cuando se le da al boton start
function showBases() {
    var bases = document.getElementsByClassName("base"); 

    for (var i = 0; i < bases.length; i++) {
        bases[i].style.display = "block"; 
    }
}