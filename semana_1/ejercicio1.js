/*
sistema de calificacion de rendimiento:
solicita al usuario su nota (0-20) y su asistencia (%). si la nota es mayor o igual a 11 y 
la asistencia es mayor o igual al 70%, se aprueba. de lo contrario, se desaprobara.
ademas, otorga menciones especiales para notas mayores a 17 con asistencia completa.
*/
let nota = 18;
let asistencia =100;

if (nota > 11 || asistencia >= 70) {
    console.log("Aprobado");
    if (nota > 17 && asistencia == 100) {
        console.log("Mención honorable");
    }
} else {
    console.log("Desaprobado");
}