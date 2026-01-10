/*
Clasificación de productos: 
Pide nombre, precio y categoría (tecnología, alimentos, ropa). Dependiendo de la 
categoría y precio, aplica diferentes tipos de impuestos y clasificaciones (lujo, básico, 
etc.). 
*/
let nombre= prompt("Nombre del producto: ")
let precio= Number(prompt("Ingresa el precio del producto: "))
let categoria= prompt("Ingresa la categoría del producto (tecnología/alimentos/ropa): ")

let impuestos=0
let clasificaciones=""

if(categoria=="tecnología"){
    impuestos=0.20
    clasificaciones= precio>4000?"Lujo":"Básico"
} else if (categoria=="alimentos"){
    impuestos= 0.05
    clasificaciones= precio>500?"Lujo":"Básico"
}else if (categoria=="ropa"){
    impuestos= 0.3
    clasificaciones= precio>700?"Lujo":"Básico"
}else{
    clasificaciones="Sin Categoría"
}
let precioFinal=  precio+(precio*impuestos) 

console.log("Producto: ", nombre)
console.log("Categoría: ", categoria)
console.log("Precio: ",precioFinal)