/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/


let numero = parseInt(prompt('Ingrese un número igual o menor a 50:'));

if (!isNaN(numero) && numero > 0 && numero <= 50) {
    for (let i = 1; i <= numero; i++) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        document.write(`${linea}</br>`);
    }
} else {
    alert('Ingrese un número válido, mayor que cero y no mayor de 50.');
}
