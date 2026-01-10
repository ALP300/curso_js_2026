/*
clasificaón de productos:
pide nombre, precio y categoria (tecnologia, alimentos, ropa). dependiendo de la
categoria y precio, aplica diferentes tipos de impuestos y clasificacion (lujos, basicos,
etc.).
*/
let nombre= prompt("Nombre del producto")
let precio= Number(prompt("Ingresar el precio del producto: "))
let categoria= prompt("Ingresa la categoria del producto (tecnologia/alimentos/ropa): ")

let impuestos=0
let clasificacion=""

if(categoria=="tecnologia"){
    impuestos=0.20
    clasificaciones= precio>4000?"Lujo":"Basico"
} else if (categoria== "ropa"){
    impuestos= 0.5
    clasificaciones= precio>500?"Lujo":"Basico"
} else if (categoria== "ropa"){
    impuestos= 0.3
    clasificaciones= precio>700?"lujo":"Basico"
} else{
    clasificaciones="Sin Categoria"
}
let precioFinal= precio+(precio*impuestos)

console.log("Productos: ", nombre)
console.log("Categoría: ", categoria)
console.log("Precio: ",precioFinal)