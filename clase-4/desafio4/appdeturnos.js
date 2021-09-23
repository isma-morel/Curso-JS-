//APP PARA PEDIR TURNOS 



let opcion = String(prompt('Deseas ingresar al programa de turnos de Odontologia?'))

opcion = opcion.toLowerCase()

if (opcion === 'si') {
    alert('Ingresando a sistemas de turnos')
    opcion = String(prompt('Por favor, ingrese su correo electronico.'))
    opcion = String(prompt('En que fecha deseas obtener un turno? Por favor escribir fecha en formato MES/DIA/AÑO. Ejemplo: 12/25/2021'))
    calculo(opcion)
} else if (opcion === 'no') {
    alert('Saliendo de la interfaz.')
} else {
    for(let i = 0 ; i <= 5 ; i++) {
        alert('Valor invalido!')
    }
}


function calculo(opcion) {

    let fechaActual = new Date();
    let fechaTurno = new Date(opcion);

    let mlsgDia = 24 * 60 * 60 * 1000;

    let mlsgFaltantes = Math.abs(fechaActual.getTime() - fechaTurno.getTime());

    let diasFaltantes = Math.round(mlsgFaltantes / mlsgDia)

    console.log(`Has realizado el pedido con exito. Faltan ${diasFaltantes} dias para su turno.`)
    alert(`Has realizado el pedido con exito. Faltan ${diasFaltantes} dias para su turno.`)
}


