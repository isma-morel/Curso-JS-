//algoritmo foco

let piletaDefault = 0;
let options = confirm('Deseas cargar la pileta?')

if (options === true) {
    console.log('La pileta esta vacia. Tienes que llenarla!')
    alert('La pileta esta vacia. Tienes que llenarla!')
    for (let agua = Number(prompt('Cuantos litros de agua deseas agregar a la pileta?'));piletaDefault < 1600; piletaDefault = agua + piletaDefault) {
        console.log(`Estas cargando la pileta actualmente tiene ${piletaDefault} litros`)
        alert(`Estas cargando la pileta actualmente tiene ${piletaDefault} litros`)
    }
    if (piletaDefault === 1600) {
        console.log(`Has llenado la pileta. Actualmente tiene ${piletaDefault} litros`)
        alert(`Has llenado la pileta. Actualmente tiene ${piletaDefault} litros`)
    } else {
        console.log(`Has sobrepasado la maxima capacidad de la pileta. Actualmente tiene ${piletaDefault} litros`)
        alert(`Has sobrepasado la maxima capacidad de la pileta. Actualmente tiene ${piletaDefault} litros`)
    }
} else {
    console.log('Vuelva pronto!')
    alert('Vuelva pronto!')
}

