/****************************************
 *       ENTIDADES 
 ****************************************/

 class Residente {

    constructor({
        nombre,
        dni,
        departamento,
        piso,
        listaNegra = false,
    }) {
        this.nombre = nombre;
        this.dni = dni;
        this.departamento = departamento;
        this.piso = piso;
        this.listaNegra = listaNegra;
    }
}


/***********************************
 *           VARIABLES
 ***********************************/

let listaPersonas = [];

/***********************************
 *           FUNCIONES
 ***********************************/


//Funcion de crear residente 
//Return Object
const crearResidente = () => {

    const residente = new Residente({
        nombre: document.getElementById("nombre").value,
        dni: document.getElementById("dni").value,
        departamento: document.getElementById("departamento").value,
        piso: document.getElementById("piso").value,
    })


    let lista;
    if (localStorage.getItem("listaPersonas") != null) {
        lista = JSON.parse(localStorage.getItem("listaPersonas"))
        lista.push(residente)
        localStorage.setItem("listaPersonas", JSON.stringify(lista))
    }
    listaPersonas.push(residente)


    return residente

}



//Funcion de Guardar Datos
const guardarEnBaseDeDatos = () => {

    crearResidente()

    if (verificarStorage() != undefined) {
        localStorage.setItem("listaPersonas", JSON.stringify(verificarStorage()))
    } else {
        localStorage.setItem("listaPersonas", JSON.stringify(listaPersonas))
    }
}


//Funcion de Verificar Storage
//Return Array
const verificarStorage = () => {
    let dato = [];
    if (localStorage.getItem("listaPersonas") != null) {
        dato = JSON.parse(localStorage.getItem("listaPersonas"))
        return dato
    }
}


//Funcion de Imrimir Datos
const imprimirDatos = () => {

    let indice = 0

    verificarStorage().forEach(obj => {

        indice += 1

        document.getElementById("tabla").innerHTML += `
        <tr>
            <td>${indice}</td>
            <td>${obj.dni}</td>
            <td>${obj.nombre}</td>
            <td>${obj.piso}</td>
            <td>${obj.departamento}</td>
            <td>${!obj.listaNegra ?'buena':'mala'}</td>
            <td><button onclick=elimiarDeLaLista(${obj.dni})>X</button></td>
        </tr>
        `
    });
}

const elimiarDeLaLista = (dni) => {

    let listaVieja = JSON.parse(localStorage.getItem("listaPersonas"))
    let listaNueva = listaVieja.filter(e => e.dni != dni)

    localStorage.setItem("listaPersonas", JSON.stringify(listaNueva))
    location.reload()

}


/***********************************
 *           EVENTOS
 ***********************************/


document.getElementById("btnSave").addEventListener("click", () => {
    guardarEnBaseDeDatos()
})

if (localStorage.getItem("listaPersonas") != null) {
    imprimirDatos()
}

console.log(verificarStorage())