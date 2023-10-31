/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let todosLosNumeros = 0;

do {
    let numeros = parseInt(prompt('Ingrese un número:'));

    if (!isNaN(numeros)) {
        todosLosNumeros += numeros;
    } else if (isNaN(numeros) && numeros !== 0) {
        alert('Ingrese un número válido');
    }
} while (confirm("¿Querés ingresar otro número?"));

document.write(`<p>La suma de los números es: ${todosLosNumeros}</p>`);
