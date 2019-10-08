let btnAddElemnts = document.getElementById('btnAddElements');
let btnSumaArray = document.getElementById('btnSumaArray');
let btnRestaArray = document.getElementById('btnRestaArray');
let btnMultiplicacionArray = document.getElementById('btnMultiplicacionArray');
let CounterClicksAddElement = 0;

EventListener();

function EventListener() {

    btnAddElemnts.addEventListener('click', addElements);
    btnSumaArray.addEventListener('click', SumaArray);
    btnRestaArray.addEventListener('click', RestaArray);
    btnMultiplicacionArray.addEventListener('click', MultiplicacionArray);


}

function addElements() {
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item mb-2');

    let input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', `listArrayR${CounterClicksAddElement}`);
    input.setAttribute('placeholder', 'Ingrese un digito')

    let li2 = document.createElement('li2');
    li2.setAttribute('class', 'list-group-item mb-2');

    let input2 = document.createElement('input');
    input2.setAttribute('class', 'form-control');
    input2.setAttribute('id', `listArrayL${CounterClicksAddElement}`);
    input2.setAttribute('placeholder', 'Ingrese un digito')



    document.getElementById('ArrayList1').appendChild(li);
    li.appendChild(input);


    document.getElementById('ArrayList2').appendChild(li2);
    li2.appendChild(input2);

    CounterClicksAddElement++;

}

function SumaArray() {

    let Array1 = [];
    let Array2 = [];
    let Array3 = [];

    for (let i = 0; i < CounterClicksAddElement; i++) {

        Array1[i] = Number(document.getElementById(`listArrayR${i}`).value);
        Array2[i] = Number(document.getElementById(`listArrayL${i}`).value);

        if (isNaN(Array1[i]) || isNaN(Array2[i])) {

            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Se ha ingresado un digito incorrecto!'

            })

            Array1 = [];
            Array2 = [];
            document.getElementById(`listArrayR${i}`).focus();

            return;

        }

    }

    for (x = 0; x < Array1.length; x++) {

        Array3[x] = Array1[x] + Array2[x];

    }

    let concatenarResultado = "";

    for (let y = 0; y < Array1.length; y++) {
        concatenarResultado += `<li class="list-group-item"> ${Array3[y]}</li> `
    }
    console
    document.getElementById('ArrayList3').innerHTML = concatenarResultado;

}

function RestaArray() {

    let Array1 = [];
    let Array2 = [];
    let Array3 = [];

    for (let i = 0; i < CounterClicksAddElement; i++) {

        Array1[i] = Number(document.getElementById(`listArrayR${i}`).value);
        Array2[i] = Number(document.getElementById(`listArrayL${i}`).value);

        if (isNaN(Array1[i]) || isNaN(Array2[i])) {

            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Se ha ingresado un digito incorrecto!'

            })

            Array1 = [];
            Array2 = [];
            document.getElementById(`listArrayR${i}`).focus();

            return;

        }

    }

    for (x = 0; x < Array1.length; x++) {

        Array3[x] = Array2[x] - Array1[x];

    }

    let concatenarResultado = "";

    for (let y = 0; y < Array1.length; y++) {
        concatenarResultado += `<li class="list-group-item"> ${Array3[y]}</li> `
    }
    console
    document.getElementById('ArrayList3').innerHTML = concatenarResultado;

}

function MultiplicacionArray() {

    let Array1 = [];
    let Array2 = [];
    let Array3 = [];

    for (let i = 0; i < CounterClicksAddElement; i++) {

        Array1[i] = Number(document.getElementById(`listArrayR${i}`).value);
        Array2[i] = Number(document.getElementById(`listArrayL${i}`).value);

        if (isNaN(Array1[i]) || isNaN(Array2[i])) {

            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Se ha ingresado un digito incorrecto!'

            })

            Array1 = [];
            Array2 = [];
            document.getElementById(`listArrayR${i}`).focus();

            return;

        }

    }

    for (x = 0; x < Array1.length; x++) {

        Array3[x] = Array2[x] * Array1[x];

    }

    let concatenarResultado = "";

    for (let y = 0; y < Array1.length; y++) {
        concatenarResultado += `<li class="list-group-item"> ${Array3[y]}</li> `
    }
    console
    document.getElementById('ArrayList3').innerHTML = concatenarResultado;

}