/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5            Output: Suficiente
Input: 50           Output: Número erróneo
Input: hola10       Output: Introduce un número válido
*/

const nota = prompt(`Ingrese una nota del 1 al 10`);

switch (nota) {
    case `0`:
        document.write('Muy deficiente');
        break;
    case `1`:
        document.write('Muy deficiente');
        break;
    case `2`:
        document.write('Muy deficiente');
        break;
    case `3`:
        document.write('Insuficiente');
        break;
    case `4`:
        document.write('Insuficiente');
        break;
    case `5`:
        document.write('Suficiente');
        break;
    case `6`:
        document.write('Suficiente');
        break;
    case `7`:
        document.write('Bien');
        break;
    case `8`:
        document.write('Notable');
        break;
    case `9`:
        document.write('Notable');
        break;
    case `10`:
        document.write('Sobresaliente');
        break;

    default:
        if (isNaN(nota)) {
            document.write('Ingrese un número válido');
        } else {
            document.write('Número erróneo')
        }
}