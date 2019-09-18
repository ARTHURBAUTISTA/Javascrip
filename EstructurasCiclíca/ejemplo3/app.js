let btnAgregar = document.getElementById('btnAgregar');
let dato = 0;

EventListenner()

function EventListenner() {
    btnAgregar.addEventListener('click', Formgroup);
    btnCalcular.addEventListener('click', promedio);
}

function Formgroup() {

    dato++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let FormGroup = document.createElement('div');
    FormGroup.setAttribute('class', 'form-group');

    let Label = document.createElement('Label');
    let TextLabel = document.createTextNode(`Ingresa la estatura de la persona: ${dato}`);
    Label.appendChild(TextLabel);

    let Input = document.createElement('input');

    Input.setAttribute('type', 'number')
    Input.setAttribute('class', 'form-control')
    Input.setAttribute('placeholder', 'Ingresa la estatura de la persona:')
    Input.setAttribute('id', `Estatura${dato}`);

    let CajaPersonas = document.getElementById('cajaPersonas');

    CajaPersonas.appendChild(DivRow);

    DivRow.appendChild(DivCol);
    DivCol.appendChild(FormGroup);
    FormGroup.appendChild(Label);
    FormGroup.appendChild(Input);
}

function promedio() {
    let suma = 0;
    let promedio = 0;

    for (let x = 1; x <= dato; x++) {
        let estatura = Number(document.getElementById(`Estatura${x}`).value);

        suma += estatura;
    }

    promedio = suma / dato;

    let imprimir = document.getElementById('imprimir');
    imprimir.innerText = promedio

}