//Solicitar al usuario que ingrese dos numeros, 
//determinar cual es el mayor y cual es el menor. 
//En caso de que sean iguales tambien deberá ser informado. 
//Imprimir el resultado por consola y por alert.

let nro1 = Number(prompt('Ingrese un 1er numero:'))
let nro2 = Number(prompt('Ingrese un 2do numero:'))

if (nro1 > nro2) {
    console.log(`el numero ${nro1} es mayor y el numero ${nro2} es menor.`)
    alert(`el numero ${nro1} es mayor y el numero ${nro2} es menor.`)
} else if (nro1 < nro2) {
    console.log(`el numero ${nro2} es mayor y el numero ${nro1} es menor.`)
    alert(`el numero ${nro2} es mayor y el numero ${nro1} es menor.`)
} else {
        console.log(`Los numeros ${nro1} y ${nro2} son iguales.`)
        alert(`Los numeros ${nro1} y ${nro2} son iguales.`)
}

