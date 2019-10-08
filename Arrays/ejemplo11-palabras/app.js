let btnAddElemnts = document.getElementById('btnAddElements');
let btnVerificarArray = document.getElementById('btnVerificarArray');
let CounterClicksAddElement = 0;


EventListener();

function EventListener() {

    btnAddElemnts.addEventListener('click', addElements);
    btnVerificarArray.addEventListener('click', verificarArray);


}

function addElements() {
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item mb-2');

    let input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `listArrayR${CounterClicksAddElement}`);
    input.setAttribute('placeholder', 'Ingrese Palabra');


    document.getElementById('ArrayList1').appendChild(li);
    li.appendChild(input);



    CounterClicksAddElement++;

}

function verificarArray() {


    let vocal = [];
    let palabra = [];

    for (let i = 0; i <= CounterClicksAddElement; i++) {

        palabra[i] = document.getElementById(`listArrayR${i}`).value;

        console.log(palabra.length);
    }





}