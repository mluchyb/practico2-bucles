/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

let textoCompleto = ""

do {
    let texto = (prompt('Ingresa texto'));

    if (textoCompleto.length === 0) {
        textoCompleto += texto;
    } else {
        textoCompleto += "-" + texto;
    }
} while (confirm("¿Querés ingresar más texto?"));

document.write (`<p>El texto completo es: ${textoCompleto}</p>`);