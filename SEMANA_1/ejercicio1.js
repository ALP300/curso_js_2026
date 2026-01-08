/*
Sistema de clasificación de rendimiento: 
Solicita al usuario su nota (0-20) y su asistencia (%). Si la nota es mayor o igual a 11 y 
la asistencia es mayor o igual al 70%, se aprueba. De lo contrario, se desaprueba. 
Además, otorga menciones especiales para notas mayores a 17 con asistencia completa.
*/
let nota = 18;
let asistencias = 100;

if (nota > 11 && asistencias >= 70) {
  console.log("Aprobado");
  if (nota > 17 && asistencias == 100) {
    console.log("Mención honorable");
  }
} else {
  console.log("Desaprobado");
}
