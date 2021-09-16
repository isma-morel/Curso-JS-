/*
if (condicion) {
    sentencia
} else if (condicion2) {
    segunda sentencia
} else *si no* {
    sentencia
}

*/
/*
let frio = true;

if (frio == true) {
    console.log('ponete un buzo');
} else {
    console.log('no hace frio wachin');
}


/* 
operadores de comparacion: 
==  *igual*
!=   *distinto*
>       *menor*
<     *mayor*
>=   *mayor igual*
<=    *menor igual*
=== *estrictamente igual*
!== *estrictamente distinto*
*/
/*
let edad = parseInt(prompt('Que edad tenes?'));

if (edad >= 18) {
    console.log('podes ingresar a la disco');
} else {
    console.log('sos muy pequeño');
}

let cont = 'Comision22405';

let pass = prompt('ingresa tu contraseña');

/*
if (pass == cont) {
    console.log('constraseña correcta');
} else {
    console.log('contraseña incorrecta');
}
*/
/*
if (pass === 'coderhouse') {
    console.log('ahora sos admin del canal')
} else if (pass === cont) {
    console.log('contraseña correcta de usuario')
} else {
    console.log('te equivocaste')
}

/*COMPARADORES COMPUESTOS 
&& (AND EN PYTHON)
|| (or en python)
!  (not en python)

*/
/*
let persona = 'julian'
let edad = 28
/*
//  (            FALSE)  y   (    false     ) = FALSE
//  (            FALSE)  y   (    TRUE     ) = FALSE
//  (            TRUE)  y   (    TRUE     ) = true
if (persona === 'julian' && edad === 28) {
    console.log('Hola julian');
} else {
    console.log('no te conozco');
}
*/
/*
//  (            FALSE)  O   (    false     ) = FALSE
//  (            FALSE)  O   (    TRUE     ) = TRUE
//  (            TRUE)  O  (    FALSE    ) = true
if (persona === 'julian' || edad === 28) {
    console.log('Hola julian');
} else {
    console.log('no te conozco');
}
*/


//PROGRAMA
//PRIMERO VERIFIQUE NAME, IF NAME = TRUE -> VA AL ASCENSOR Y SU DEPARTAMENTO

const namePerson1 = 'Julian'
const namePerson2 = 'Tomas'
const namePerson3 = 'Pedro'

let nombreDinamic = prompt('ingresa tu nombre')

//para pasar todo a minuscula .toLowerCase
//para pasar todo a mayus  .toUpperCase

nombreDinamic = nombreDinamic.toLowerCase                     

if (nombreDinamic === namePerson1 || nombreDinamic === namePerson2 || nombreDinamic === namePerson3) {
    console.log(`${nombreDinamic} podes ingresar`);
    let depto = prompt('a q depto vas?')
    if (depto < 3) {
        console.log('anda por el ascensor de la izq')
    } else if (depto > 7) {
        console.log('anda por el ascensor de la derecha')
    } else if (depto == 5) {
        console.log('no sos de este piso')
    } else {
        console.log('espera q lo estan arreglando')
    }
} else {
    console.log(`${nombreDinamic} no podes ingresar`)
}

//scope 