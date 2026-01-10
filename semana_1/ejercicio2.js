/*
Validación de acceso:
 Solicita usuario, contraseña y rol (admin, editor, visitante). Verifica si las credenciales
son válidas y muestra los permisos disponibles según el rol. Usa múltiples condicionales
y lógica anidada
*/

let usuario = prompt("Ingresa tu usuario:");
let contraseña = prompt("Ingresa tu contraseña:");
let rol = prompt("Ingresa tu rol (admin, editor, visitante):");

if (usuario === "admin" && contraseña === "1234") {
    if (rol === "admin") {
        alert("Acceso total: administrar usuarios, editar y eliminar contenido.");
    } else if (rol === "editor") {
        alert("Permisos: crear y editar contenido.");
    } else if (rol === "visitante") {
        alert("Permisos: solo lectura.");
    } else {
        alert("Rol no válido.");
    }
} else {
    alert("Credenciales incorrectas.");
}
