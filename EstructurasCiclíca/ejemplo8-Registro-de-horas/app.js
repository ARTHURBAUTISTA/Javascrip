let btnAgregar = document.getElementById('btnAgregar');
let numeroInput = 0;


EventListenner()

function EventListenner() {

    btnAgregar.addEventListener('click', AgregarFG);
    btnCalcular.addEventListener('click', calcularRango);
}


function calcularRango() {
    let contador = 0;
    let total = 0;
    let salario = Number(document.getElementById('salario').value);


    for (let x = 1; x <= numeroInput; x++) {
        let numero = Number(document.getElementById(`cantidad${x}`).value);

        contador += numero;

    }
    total = contador * salario

    let imprimir = document.getElementById('imprimir');
    imprimir.innerHTML = '' + '$' + total;

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
    let textLabel = document.createTextNode(`Ingresa las horas trabajasdas en el dia : ${numeroInput}`);

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