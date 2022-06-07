let campoInput = document.getElementById("inputAgregar");

function agregarPalabra(){

    
    if(!palabras.includes(campoInput.value.toUpperCase()) && !campoInput.value==""){
        palabras.push(campoInput.value.toUpperCase());
        ejecutaAlerta();
    }
    
}


function ejecutaAlerta() {   
    alert("palabra agregada");

//    setTimeout(function() {w.close();}, 2000);
    }