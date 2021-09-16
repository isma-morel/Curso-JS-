//Solicitar al usuario un numero cualquiera, y verificar si es par o impar.

let numero = Number(prompt('Ingrese un numero para verificar si es par o impar:'));

let operation = numero % 2

if (operation === 0) {
    alert(`El numero ${numero} es par.`);
} else {
    alert(`El numero ${numero} es impar.`)
}



