//2DO DESAFIO
//AÑO BISIESTO O NO

let opcion1 = String(prompt('Desea entrar al programa? a=si b=no'))

if (opcion1 === 'a') {
    alert('Entrando a la verificacion de año bisiesto')
    let año = Number(prompt('Porfavor ingrese el año que desea verificar si es bisiesto:'))
    let resultado1 = año % 4
    let resultado2 = año % 100
    let resultado3 = año % 400
    if ((resultado1 === 0) && (resultado2 !== 0 || resultado3 === 0)) {
        alert(`El año ${año} es bisiesto!`)
    } else {
        alert(`El año ${año} no es bisiesto!`)
    }
} else {
    alert('Saliendo de la interfaz. Vuelva pronto.')
}
