const listaAgenda = document.getElementById('lista-agenda');
let DeleteAgenda = '';

EventListener();

function EventListener() {

    document.querySelector('#formulario').addEventListener('submit', addPersona);
    listaAgenda.addEventListener('click', DeleteAgenda)

}

let agenda = new Agenda();

function addPersona() {

    let Nombre = document.getElementById('nombre').value.trim();
    let Telefono = document.getElementById('telefono').value.trim();
    console.log(Nombre);
    console.log(Telefono);

    // agenda.addPersona(contentAgenda);
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
}

function DeleteAgenda() {



}