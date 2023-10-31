/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

let texto = prompt('Ingrese un texto: ');
let vocales = 0;

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase(); // Convertir a minúscula para la comparación

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        vocales++;
    }
}

document.write(`El texto tiene ${vocales} vocales.`);
