/* 
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

let edad = parseInt(prompt(`Ingrese su edad`))

if (edad >= 18) {
    alert(`Ya es mayor de edad y puede conducir`)
} else if (isNaN(edad)) {
    parseInt(prompt(`Ingrese un número válido`))
} else {
    alert(`No puede conducir`)
}
