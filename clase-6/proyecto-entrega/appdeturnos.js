//APP DE TURNOS


class Request {
    constructor(username, date) {
        this.username = username;
        this.date = date;
    }
}

class UI {
    addRequest (request) {
        const requestList = document.getElementById('request-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <span>Username:</span> ${request.username}
                    <span>Request Date:</span> ${request.date}
                    <a href="#" class="btn-btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        requestList.appendChild(element)
    }
    addAlert(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message))
        //mostrando en dom
        const container = document.querySelector('.container');
        const form = document.querySelector('.row')
        container.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 1500)
    }
    resetForm () {
        document.getElementById('formulario').reset();
    }
    removeRequest (element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove()
            this.addAlert('Request Removed Successfully', 'info');
        }
    }
}


deshabilitar();

/*


Agregar min con la fecha actual!


*/

function deshabilitar() {

    const fechaInput = document.querySelector('#fecha');


    const fechaActual = new Date();
    const year = fechaActual.getFullYear(); 
    const month = fechaActual.getMonth() + 1; //Porque los meses empiezan en 0
    const day = fechaActual.getDate();

    let fechaDeshabilitar;
    if ([10,11,12].includes(month)){
        fechaDeshabilitar = `${year}-${month}-${day}`;
    }else{ // Añadimos el 0 para hacer el formato correcto
        fechaDeshabilitar = `${year}-0${month}-${day}`
    }
    fechaInput.min = fechaDeshabilitar;
}



const submit = document.querySelector('#formulario');
const requestList = []

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const date = document.querySelector('#fecha').value;
    const ui = new UI();
    const req = new Request(email, date);

    if(email === '' || date === '' ) {
        return ui.addAlert('Complete Fields Please', 'danger');
    }
    requestList.push(req)
    ui.addRequest(req)
    ui.resetForm();
    ui.addAlert(`Has pedido un turno exitosamente para la fecha ${date}`, 'secondary')
    console.log(requestList)
})

document.getElementById('request-list').addEventListener( 'click' ,(e) => {
    const ui = new UI()
    ui.removeRequest(e.target)
})
