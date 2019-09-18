let btnAgregar = document.getElementById('btnAgregar');
let numeroInput = 0;


EventListenner()

function EventListenner() {

    btnAgregar.addEventListener('click', AgregarFG);
    btnCalcular.addEventListener('click', calcularRango);
}

function calcularRango() {
    let contador = 0;

    for (let x = 1; x <= numeroInput; x++) {
        let numero = Number(document.getElementById(`cantidad${x}`).value);
        contador = numero;
    }

    let imprimir = document.getElementById('imprimir');

    if (contador > 0) {
        imprimir.innerText = ' mayor a 0';


    }
    if (contador == 0) {
        imprimir.innerText = ' igual a 0';

    }
    if (contador < 0) {
        imprimir.innerText = ' menor a 0';

    }

}

function AgregarFG() {

    numeroInput++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let FormGroup = document.createElement('div');
    FormGroup.setAttribute('class', 'form-group');

    let Label = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa un Número: ${numeroInput}`);

    Label.appendChild(textLabel);

    let Input = document.createElement('input');

    Input.setAttribute('type', 'number')
    Input.setAttribute('class', 'form-control')
    Input.setAttribute('id', `cantidad${numeroInput}`);

    let cajaNumero = document.getElementById('cajaNumero');

    cajaNumero.appendChild(DivRow);

    DivRow.appendChild(DivCol);
    DivCol.appendChild(FormGroup);
    FormGroup.appendChild(Label);
    FormGroup.appendChild(Input);









}