let btnAgregar = document.getElementById('btnAgregar');
let numeroInput = 0;


EventListenner()

function EventListenner() {

    btnAgregar.addEventListener('click', AgregarFG);
    btnCalcular.addEventListener('click', calcularPromedia);
}

function calcularPromedia() {
    let suma = 0;
    let promedio = 0;

    for (let x = 1; x <= numeroInput; x++) {
        let edad = Number(document.getElementById(`EdadAlumno${x}`).value);

        suma += edad;

    }
    promedio = suma / numeroInput;

    let imprimir = document.getElementById('imprimir');
    imprimir.innerText = promedio;
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
    let textLabel = document.createTextNode(`ingresa la edad de alumno: ${numeroInput}`);

    Label.appendChild(textLabel);

    let Input = document.createElement('input');

    Input.setAttribute('type', 'number')
    Input.setAttribute('class', 'form-control')
    Input.setAttribute('placeholder', 'ingresa las Edad del alumno')
    Input.setAttribute('id', `EdadAlumno${numeroInput}`);

    let CajaAlumnos = document.getElementById('cajaAlumnos');

    CajaAlumnos.appendChild(DivRow);

    DivRow.appendChild(DivCol);
    DivCol.appendChild(FormGroup);
    FormGroup.appendChild(Label);
    FormGroup.appendChild(Input);









}