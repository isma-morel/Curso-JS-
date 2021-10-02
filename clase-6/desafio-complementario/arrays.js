//funcion para filtrar objetos 


class People {
    constructor(name, years) {
        this.name = name;
        this.years = years;
    }
}


const listPeople = [];

listPeople.push(new People('jorge', 20))
listPeople.push(new People('beatriz', 53))
listPeople.push(new People('juan', 30))
listPeople.push(new People('deb', 19))

let name1 = String(prompt('Ingresa el nombre de la persona'));

let years = Number(prompt('Ingresa la edad de la persona'));



if (years > 100 || (name1 === '' || years === '') || (name1 === null || years === null)) {
    alert('Ingresa un valor valido')
} else {
    alert(`Agregando a ${name1} al sistema`)
    name1 = name1.toLowerCase();
    addPeople(name1, years)
    ordenar(listPeople)

}
function addPeople(name, years) {
    add = new People(name, years);
    listPeople.push(add)
}




function ordenar(lista) {
    let show = lista.sort((a, b) => {
        if ( a.name < b.name )
            return -1;
        if ( a.name > b.name )
            return 1;
        return 0;
    });
    console.log(show)
}





