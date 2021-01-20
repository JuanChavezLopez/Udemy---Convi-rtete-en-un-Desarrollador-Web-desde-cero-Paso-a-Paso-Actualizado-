
var seccion = document.getElementById("seccion");

function muestraInfo(elEvento){
    var e = window.event || elEvento;
    // var info = "Tipo de evento: " +e.type+ "<br>"+
    // "Propiedad KeyCode: "+ e.keyCode + "<br>"+
    // "Propiedad charCode: "+ e.charCode +"<br>"+
    // "Caracter pulsado: " + String.fromCharCode(e.charCode);

    // seccion.innerHTML += "<p>" + info +"</p>------------";

    if(e.altKey){
        alert("La tecla ALT fue pulsada.");
    }else if(e.ctrlKey){
        alert("La tecla control fue pulsada.");
    }else if (e.shiftKey){
        alert("La tecla SHIFT fue pulsaa.")
    }


    if(e.ctlKey && String.fromCharCode(e.fromCharCode) == 's'){
        // PUEDE HACER CUALQUIER ACCION

    }
}

window.onload = function(){
    document.onkeyup = muestraInfo;
    document.onkeypress = muestraInfo;
    document.onkeydown = muestraInfo;
}