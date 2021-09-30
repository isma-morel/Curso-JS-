//
//
//
//
//
//
//
//
//
/******************************
 *    ARRAY
 ****************************/
//
/*               0         1        2    3    4      5                  6                           7
let lista = ["Persona", "Mascota", 28, 1000, true, false, { nombre: "julian", apellido: "fuoco" },
    [1, 2]
]
//length es un metodo que me devuelve la cantidad de elementos de mi lista
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}
let ferreteria = ["Tornillos", "Madera"]
let superMercado = ["Pera", "Manzana", "Jamon", "Queso", "Cerveza", "Vino", "Agua", "Leche"]
console.log(superMercado);
//push()
superMercado.push("Kilo de pan")
console.log(superMercado);
superMercado.push("Galletitas")
console.log(superMercado);
superMercado.unshift("Tomate")
console.log(superMercado);
superMercado[3] = "Panceta"
console.log(superMercado);
superMercado.sort()
console.log(superMercado);
let listaDefinitiva = superMercado.concat(ferreteria)
console.log(listaDefinitiva);
let listaReducida = listaDefinitiva.slice(2, 8)
console.log(listaReducida);
let lista1 = listaDefinitiva.slice(0, 3)
let lista2 = listaDefinitiva.slice(8, listaDefinitiva.length)
let lista3 = lista1.concat(lista2)
console.log(lista3.join("***"));
*/
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
let listaSupermercado = [];
listaSupermercado.push(new Producto("Tornillo", 1300))
listaSupermercado.push(new Producto("Pera", 200))
listaSupermercado.push(new Producto("Banana", 130))
listaSupermercado.push(new Producto("Jamon", 150))
listaSupermercado.push(new Producto("Jamon", 150))
listaSupermercado.push(new Producto("Jamon", 150))
listaSupermercado.push(new Producto("Queso", 800))
listaSupermercado.push(new Producto("Auto", 1300000))
listaSupermercado.push(new Producto("Moto", 800000))
const agregarProductosALaLista = () => {
    let nombre = prompt("Nombre del producto");
    let precio = Number(prompt("Precio del producto"));
    let producto = new Producto(nombre, precio)
    listaSupermercado.push(producto)
}
listaSupermercado.sort((a, b) => {
    if (a.precio > b.precio) {
        return -1
    }
    if (a.precio < b.precio) {
        return 1
    }
    return 0
})
listaSupermercado.toString()
console.log(listaSupermercado);
/**********************************************
 *  METODOS PARA RECORRER UN ARRAY DE OBJETOS
 *********************************************/
/*
//Con For T
for (let i = 0; i < listaSupermercado.length; i++) {
    console.log(listaSupermercado[i])
}
//For of
for (const obj of listaSupermercado) {
    console.log(obj.precio);
}
let obje = { nombre: "tomate", precio: 200 }
//For in
for (const prop in obje) {
    console.log(prop);
}
*/
//foreach()
listaSupermercado.forEach(obj => {
    console.log(obj.precio);
})
//let search = prompt("Que queres buscar")
//let buscadorUnico = listaSupermercado.find(obj => obj.nombre === search)
//console.log(buscadorUnico);
// FIND ME TRAE 1 OBJETO 
let buscadorMultiple = listaSupermercado.filter(obj => obj.precio > 5000)
console.log(buscadorMultiple);
//FILTER ME TRAE UNA COLECCION DE OBJETOS
let texto = "         Hola Mundo soy Julian        ";
console.log(texto.length);
let textoNuevo = texto.trim().split("Mundo")
console.log(textoNuevo);
console.log(Array.isArray());