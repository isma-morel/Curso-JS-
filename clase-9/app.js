





const parrafo = document.querySelector('#parrafo');
//document.getElementById('parrafo')
//document.getElementByTagName('p')
//document.querySelector('p')
const boton = document.querySelector('#btn');
//document.getElementById('btn')
//document.getElementByTagName('button')
//document.querySelector('button')
const input = document.querySelector('#texto');
const form = document.querySelector('form');

const escribir = () => {
    let texto = prompt('q queres escribir?')
    parrafo.textContent = texto;
}

//primera forma de llamar/escuchar evento
// SELECTOR - METODO("evento", FUNCION) -> 


//let MODO DE USO = 'jamas porfa o los demas te van a mirar con cara rara'
//boton.addEventListener('click', escribir) //funciones ya declaradas colocarlas sin parentesis (FORMA SUCIA XD)


//primera forma correcta
//let MODO DE USO = 'Recomendada';

boton.addEventListener('click', () => {
    //ARROW FUNCTION DE CALLBACK
    console.log(input.value)
    form.reset()
});


//Segunda forma de escuchar un evento RESUMIDA

//let MODO DE USO = 'SI LA TENES SUPER CLARA'

//boton.onclick = () => { escribir() };


//Tercera forma colocada en el HTML como atributo

//EVENTOS MAS UTILIZADOS

//EVENTOS DE MOUSE
/*
boton.addEventListener('click', () => {
    //ARROW FUNCTION DE CALLBACK
    console.log('pusiste click')
})


        EJECUTA EL EVENTO AL COLOCAR EL MOUSE 
        POR ENCIMA DEL ELEMENTO
boton.addEventListener('mouseover', () => {
    //ARROW FUNCTION DE CALLBACK
    console.log('pusiste click')
})


        EJECUTA EL EVENTO CUANDO ESTAS 
        DENTRO DEL ELEMENTO Y SALIS
boton.addEventListener('mouseout', () => {
    //ARROW FUNCTION DE CALLBACK
    console.log('pusiste click')
})


        EJECUTA EL EVENTO AL MOVER EL MOUSE
        DENTRO DEL ELEMENTO
boton.addEventListener('mousemove', () => {
    //ARROW FUNCTION DE CALLBACK
    console.log('pusiste click')
})
*/


//EVENTOS DE TECLADO
/*
keyup keydown ETC

*/

//EVENTOS CHANGE


    //EVENTO SUCEDE CUANDO EL VALOR DEL INPUT 
    //CAMBIA AL TERMINAR EL PROCESO DE CAMBIO
input.addEventListener('change', () => {
    console.log('CAMBIO EL VALOR')
})



//ANULAR EVENTO SUBMIT  DE UN BOTON
boton.addEventListener('click', (e) => {
    e.preventDefault();
    //HACER Q LOS DATOS SEAN MAS SEGUROS
    validadora();

    if(validadora()) {
        document.querySelector('form').submit();
    }
})


//VALIDACION ASTILLA -> regEx, lenght y trim

const validadora = () => {
    if(input.value.length > 5) {
        return input.value
    }
}