/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encript() {
    //const regex = /[aeiou]/g;
    
    let string = document.getElementById("textEncript").value.toLowerCase();
    //let nuevaString = string.match(regex).length;
    //console.log(nuevaString);

    let nuevaString = string.replace(/e/img, "enter");
    nuevaString = nuevaString.replace(/i/img, "imes");
    nuevaString = nuevaString.replace(/a/img, "ai");
    nuevaString = nuevaString.replace(/o/img, "ober");
    nuevaString = nuevaString.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = nuevaString;  

    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
    
    document.getElementById("textoDesencriptado").style.display = "show";
    document.getElementById("textoDesencriptado").style.display = "inherit";
    
    document.getElementsByClassName("ocultar").style.display = "none";
    document.getElementsByClassName("ocultar").style.display = "inherit";
    
}

function desencriptar() {
    let string = document.getElementById("textEncript").value.toLowerCase();
    //let nuevaString = string.match(regex).length;
    //console.log(nuevaString);

    let nuevaString = string.replace(/enter/img, "e");
    nuevaString = nuevaString.replace(/imes/img, "i");
    nuevaString = nuevaString.replace(/ai/img, "a");
    nuevaString = nuevaString.replace(/ober/img, "o");
    nuevaString = nuevaString.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = nuevaString;    

    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
    
}

function copy() {
    let contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}

//document.querySelector("#copy").addEventListener("click", copy);


