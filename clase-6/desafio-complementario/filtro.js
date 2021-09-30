//funcion para filtrar objetos 


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


const listaProductos = [];

listaProductos.push(new Producto('Auriculares', 2000))

listaProductos.push(new Producto('Puerta', 3000))

listaProductos.push(new Producto('Ventana', 5000))

listaProductos.push(new Producto('Madera', 100))

listaProductos.push(new Producto('Maceta', 20))

listaProductos.push(new Producto('Celular', 10000))

listaProductos.push(new Producto('Guittara', 20000))

listaProductos.push(new Producto('Piano', 100))

listaProductos.push(new Producto('Remeras', 3000))

listaProductos.push(new Producto('Teclado', 5000))

listaProductos.push(new Producto('Pantalla', 39999))

ordenar(listaProductos)

function ordenar(lista) {
    let mostrar = lista.sort((a,b) => {
        if (a.precio > b.precio) {
            return 1
        }
        if (a.precio < b.precio) {
            return -1
        }
        return 0
    })
    console.log(mostrar)
}





