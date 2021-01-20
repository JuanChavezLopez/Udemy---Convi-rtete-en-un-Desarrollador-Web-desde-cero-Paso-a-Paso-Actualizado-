// POSICION DEL PUNTERO RESPECTO A LA VENTANA DEL NAVEGADOR


function muestraInfo(e){
    var coordenadaX = e.clientX;
    var coordenadaY = e.clientY;

    seccion.innerHTML +="<p> Has pulsado el raton en la posicion:"+ coordenadaX+ "," +coordenadaY+ "</p>";
}

document.onclick = muestraInfo;