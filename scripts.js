const oculto = document.getElementsByClassName("mensaje")[0];
const boton = document.getElementById("botonMensaje");
oculto.style.display = "none";


boton.addEventListener("click", function () {
    if(oculto.style.display === 'none'){
document.querySelector(".mensaje").style.display = "block"
}else {
    oculto.style.display = 'none'
}

  
});
