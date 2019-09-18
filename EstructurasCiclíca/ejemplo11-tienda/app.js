let btnAgregar = document.getElementById('btnAgregar');
let numeroInput = 0;
let may = 0;
let men = 0;
// let igu = 0;
let igu1 = 0;




EventListenner()

function EventListenner() {

    btnAgregar.addEventListener('click', AgregarFG);
    btnCalcular.addEventListener('click', calcularRango);
}


function calcularRango() {
    let contador = 0;
    let total = 0;





    for (let x = 1; x <= numeroInput; x++) {
        let numero = Number(document.getElementById(`cantidad${x}`).value)

        contador += numero;
        console.log(contador);

    }

    total = contador;


    let imprimir4 = document.getElementById('imprimir4');
    imprimir4.innerHTML = '' + '$' + total;

    if (contador > 1000) {
        may++;
        let imprimir1 = document.getElementById('imprimir1');
        imprimir1.innerHTML = '' + may;
        return;

    }
    if (contador == 1000) {
        igu1++;
        let imprimir2 = document.getElementById('imprimir2');
        imprimir2.innerHTML = '' + igu1;

        return;

    }

    if (contador < 500) {
        men++
        let imprimir3 = document.getElementById('imprimir3');
        imprimir3.innerHTML = '' + men;
        return;

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
    let textLabel = document.createTextNode(`Costo del articulo : ${numeroInput}`);

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