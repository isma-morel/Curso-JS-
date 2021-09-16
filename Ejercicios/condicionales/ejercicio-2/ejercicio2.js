//Solicitar al usuario el año de nacimiento y calcular la edad. 
//Mostrar mediante alert si la persona es mayor o menor de edad.

let añoActual = Number(prompt('Ingrese el año actual:'));

let año = Number(prompt('Ingrese su año de nacimiento:'));

let edadActual = añoActual - año

if (año <= añoActual) {
    alert(`Tu edad es ${edadActual}`)
    if (edadActual >= 18) {
    alert('Eres mayor de edad')
    } else {
        alert('Eres menor de edad')
    }
} else {
    alert('VALOR INVALIDO')
    alert('VALOR INVALIDO')
    alert('VALOR INVALIDO')
}


