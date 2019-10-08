let btnAddElement = document.getElementById('btnAddElement');
let inputAddElement = document.getElementById('InputNumero');
let inputAddElement2 = document.getElementById('InputMultiplo');

EventListenner();

function EventListenner() {
    btnAddElement.addEventListener('click', FillArray)

}

function FillArray() {
    let dataArray = [];
    let multiplicacion = 0;

    for (let i = 0; i < Number(inputAddElement2.value); i++) {

        dataArray[i] = inputAddElement.value;


        console.log(dataArray);
    }

    multiplicacion = x(dataArray);
    console.log(dataArray);
}

function x(dataArray) {

    let multiplicacion = 0;
    let imprimir = '';
    for (let i = 1; i <= Number(inputAddElement.value); i++) {

        dataArray[i] = i * Number(inputAddElement2.value)

        multiplicacion *= dataArray[i];

        imprimir += `<li class="list-group-item"> ${dataArray[i]}</li>`;




    }
    document.getElementById('ListaImprimir').innerHTML = imprimir;
    //console.log(multiplicacion);




}