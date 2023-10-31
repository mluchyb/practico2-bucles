/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let edad1 = parseInt(prompt(`Ingrese la primera edad`))
let nombre1 = (prompt(`Ingrese el primer nombre`))
let edad2 = parseInt(prompt(`Ingrese la segunda edad`))
let nombre2 = (prompt(`Ingrese el segundo nombre`))
let edad3 = parseInt(prompt(`Ingrese la tercera edad`))
let nombre3 = (prompt(`Ingrese el tercer nombre`))

let mayor = Math.max(edad1, edad2, edad3)

if (mayor === edad1) {
    document.write(`El nombre del mayor es ${nombre1}`)
 } else if (mayor === edad2) {
    document.write(`El nombre del mayor es ${nombre2}`)
 } else if (mayor === edad3){
    document.write(`El nombre del mayor es ${nombre3}`)
 }
