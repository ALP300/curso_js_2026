/*
Verificación de año bisiesto y edad legal:
 Pide el año de nacimiento y determina si es bisiesto. Luego calcula la edad del usuario
y verifica si es mayor de edad (18+).
*/

let nacimiento = Number(prompt("Ingresa tu año de nacimiento:"));
let añoActual = new Date().getFullYear();
let edad = añoActual - nacimiento;

// Verificar si el año es bisiesto
if ((nacimiento % 4 === 0 && nacimiento % 100 !== 0) || nacimiento % 400 === 0) {
    alert("Tu año de nacimiento es bisiesto.");
} else {
    alert("Tu año de nacimiento no es bisiesto.");
}

// Verificar si es mayor de edad
if (edad >= 18) {
    alert("Eres mayor de edad (" + edad + " años).");
} else {
    alert("Eres menor de edad (" + edad + " años).");
}
