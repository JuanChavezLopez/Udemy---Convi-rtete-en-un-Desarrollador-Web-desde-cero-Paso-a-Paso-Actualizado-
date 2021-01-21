var seccion, div, boton; 
seccion = document.getElementsByTagName('section')[0];
div = document.getElementsByTagName('div')[0];
boton = document.getElementsByTagName('button')[0];
boton2 = document.getElementsByTagName('button')[1];

// !---------1ER EJEMPLO------------------------

function lanzador(){
    
    function soySeccion (){
        alert("Soy la etiqueta Seccion.");
    }

    function soyDiv (){
        alert("Soy la etiqueta Div.");
    }

    function soyBoton (){
        alert("Soy la etiqueta Button.");
    }

    seccion.addEventListener('click', soySeccion, false);
    div.addEventListener('click', soyDiv, false);
    boton.addEventListener('click', soyBoton, false);

    function lanzar (){
        alert('Me has presionado por primera y unica vez!!');
        boton2.removeEventListener('click', lanzar, false);
    }
    
    boton2.addEventListener('click', lanzar, false);
}

window.addEventListener('load', lanzador, false);

// !------------2DO EJEMPLO------------------
// boton.addEventListener('click', function(){
//     alert("Me has presionado.")
// }, false);

// !------------ REMOVER EL EVENTO---------------------



