/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:

Input: Hola mundo          Output: la vocal ‘o’ está en la posición 1
*/

let texto = prompt('Ingrese un texto: ').toLowerCase();

let posicionPrimeraVocal = -1;

for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        posicionPrimeraVocal = i;
        break;
    }
}

if (posicionPrimeraVocal !== -1) {
    let vocalEncontrada = texto[posicionPrimeraVocal];
    document.write(`La vocal '${vocalEncontrada}' está en la posición ${posicionPrimeraVocal}`);
}
