//verificar si tienes hambre en caso de si verificar dinero y preguntar q desea comprar para comer






function opciones() {
    let compra = String(prompt('Que deseas comprar para comer?'))
    compra = compra.toLowerCase()
    switch (compra) {
        case 'hamburguesa':
            alert('Compraste una hamburguesa por $300. A comer!');
            break
        case 'pizza':
            alert('Compraste una pizza por $250. A comer!');
            break
        case 'sandwich':
            alert('Compraste una  por $200. A comer!');
            break
        case 'ensalada':
            alert('Compraste una ensalada por $299. A comer!');
            break
        case 'guiso':
            alert('Compraste un alto guiso por $15. A comer!');
            break
        default:
            alert('valor invalido')
            break
    }
}

function verificar() {
    let verif = confirm('Debes comprar algo para comer, tienes dinero?')
    if (verif) {
        opciones()
    } else {
        alert('No puedes comprar nada, no tienes dinero. Hoy no hay morfi.')
    }
}


function hambre() {
    let opcion = String(prompt('Hola soy tu asistente del hambre. Tienes hambre?. SI / NO'))
    let final = opcion.toLowerCase()
    if (final === 'si') {
        verificar();
    } else if (final === 'no') {
        alert('Entonces seguí con lo q estabas haciendo :)')
    } else {
        for(let nro = 0 ; nro < 5 ; nro ++) {
            alert('valor invalido')
        }
    }
}

hambre()