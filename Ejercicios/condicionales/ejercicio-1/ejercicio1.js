//Solicitar al usuario dos numeros, y una operacion. 
//Utilizando un condicional realizar la operacion solicitada por el usuario, 
//y mostrar mediante un alert el resultado.
//(Verificar que los datos ingresados sean correctos)

let nro1 = Number(prompt('ingrese un primer numero:'));
let nro2 = Number(prompt('ingrese un segundo numero:'));
let operator = prompt('ingresa la operacion que deseas realizar utilizando los simbolos o las palabras de respectivas operaciones:')

let lowerCase = operator.toLowerCase();

if ((lowerCase == '/' || lowerCase == 'dividir') || (lowerCase == 'division' || lowerCase == 'división')) {
    alert(`Realizaras la división entre ${nro1} y ${nro2}`);
    alert(`El resultado de la división es ${nro1 / nro2}`);
    alert(`Su resto es ${nro1 % nro2}`);
} else if ((lowerCase == 'x' || lowerCase == '*' ) || (lowerCase == 'multiplicacion' || lowerCase == 'multiplicación') || lowerCase == 'multiplicar') {
    alert(`Realizaras la multiplicación entre ${nro1} y ${nro2}`);
    alert(`El resultado de la multiplicación es ${nro1 * nro2}`);
} else if (lowerCase == '+' || (lowerCase == 'suma' || lowerCase == 'sumar')) {
    alert(`Realizaras la suma entre ${nro1} y ${nro2}`);
    alert(`El resultado de la suma es ${nro1 + nro2}`);
} else if (lowerCase == '-' || (lowerCase == 'resta' || lowerCase == 'restar')) {
    alert(`Realizaras la resta entre ${nro1} y ${nro2}`);
    alert(`El resultado de la resta es ${nro1 - nro2}`);
} else {
    alert('EL OPERADOR INGRESADO ES INVALIDO')
    alert('EL OPERADOR INGRESADO ES INVALIDO')
    alert('EL OPERADOR INGRESADO ES INVALIDO')
}