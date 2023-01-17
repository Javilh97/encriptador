/*
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let texto = "escuela";

for (let i = 0; i <= texto.length; i++) {
    if (texto[i] === "e" ) {
        texto[i].replace("enter");
        console.log(texto[i]);
    }
}

console.log(texto);
console.log("Hola mundo");