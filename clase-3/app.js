/* 
BUCLES:
FOR
WHILE
DO...WHILE


//ciclo por conteo
//for
//estructura
3 condiciones
//for(inicio; condicion; iteracion) {
    sentencia
}



let nro = 0

for(0; nro < 10; nro = nro + 1) {
    console.log('hola mundo')
}


//manera mas resumida y optima
for(let nro = 0; nro < 10; nro ++) {
    console.log('hola mundo')
}

//cuando sumamos solo uno a un numero se resume como ++
//cuando restamos solo uno a un numero se resume como --
//se conoce a la variable con un numero como 'let i = numero'
/* 

nro 0 -> ejecuta for -> 'hola mundo' -> nro + 1
nro es menor a 10 ? -> si la cndicion es true -> nro 1 -> ejecuta for -> 'hola mundo' -> nro + 1
nro 2 ...
nro es menor a 10 ? -> si la condicion es false -> deja de ejecutar

*/

/*

ciclo por condicion
mientras
while(condicion=true) {
    sentencia
}

let num = 0;

while(num < 10) {
    console.log('estoy dentro de un bucle while')
    num++
}




do {
    sentencia
}while(condicion)



let num = 0;

do {
    console.log('hola mundo')
    num++
} while (num < 10)

*/

let num = Number(prompt('ingresa un numer'))

for(let i = 1; i <= num; i++) {
    if(i == 5) {
        continue
    } else {
        console.log(i)
    }
}


//continue
/* 
frena la iteracion pero el ciclo continua
*/
//break
/* 
me frena el ciclo



//switch

switch(num=Number(prompt('ingresa tu numero'))) {
    case 3:
        console.log('el numero ingresado es 3')
        break
    case 5:
        console.log('el numero ingresado es 5')
        break
    case 7:
        console.log('el numero ingresado es 7')
        break
    default:
        console.log('el numero no mg')
        break
}

*/

let pass = 22405
let dato = Number(prompt('ingresa la contra '))
while(pass != dato) {
    console.log('Incorrecto')
    dato = Number(prompt('ingresa la contra '))
}

