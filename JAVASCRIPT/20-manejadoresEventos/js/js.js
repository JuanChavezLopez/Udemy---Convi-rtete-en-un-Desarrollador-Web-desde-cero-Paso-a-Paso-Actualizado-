
// MANEJADORES DE EVENTOS SEMANTICOS
window.onload = function (){
    
    function mostrarMensaje(){
        console.log("Se esta ejecutando...");
        // document.write("Me has presionado.");
    }
    
    document.getElementById('presioname').onclick = mostrarMensaje;
    // mensaje.addEventListener('click', mostrarMensaje);

}
