//algoritmo pileta

let piletaDefault = 0;
let options = confirm('Deseas cargar la pileta?');
let tope = 0;

function message() {
    piletaDefault -= 10;
    console.log(`Se cayo un poco de agua!. La pileta tiene ${piletaDefault} litros`);
    alert(`Se cayo un poco de agua!. La pileta tiene ${piletaDefault} litros`);
    tope ++;
    if (tope >= 20) {
        clearInterval(intervalo)
    }
}

function intervalo() {
    intervalo = setInterval(message,5000);
}



if (options === true) {
    console.log('La pileta esta vacia. Tienes que llenarla!')
    alert('La pileta esta vacia. Tienes que llenarla!')
    for (let agua = Number(prompt('Cuantos litros/seg de agua deseas agregar?'));piletaDefault < 1600; piletaDefault = agua + piletaDefault) {
        console.log(`Estas cargando la pileta actualmente tiene ${piletaDefault} litros`)
        alert(`Estas cargando la pileta actualmente tiene ${piletaDefault} litros`)
    }
    if (piletaDefault === 1600) {
        console.log(`Has llenado la pileta. Actualmente tiene ${piletaDefault} litros`);
        alert(`Has llenado la pileta. Actualmente tiene ${piletaDefault} litros`);
    } else {
        console.log(`Has sobrepasado la maxima capacidad de la pileta. Actualmente tiene ${piletaDefault} litros`);
        alert(`Has sobrepasado la maxima capacidad de la pileta. Actualmente tiene ${piletaDefault} litros`);
    }
    intervalo()
} else {
    console.log('Vuelva pronto!')
    alert('Vuelva pronto!')
}

