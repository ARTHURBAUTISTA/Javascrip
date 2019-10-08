let btnAddElement = document.getElementById('btnAddElement');

EventListenner();

function EventListenner() {
    btnAddElement.addEventListener('click', FillArray)

}

function FillArray() {
    let inputAddElement = document.getElementById('InputNumero');
    let dataArray = [];
    let suma = 0;

    for (let i = 0; i < Number(inputAddElement.value); i++) {

        dataArray[i] = Math.floor(Math.random() * 10);


        console.log(dataArray);
    }

    suma = x(dataArray);

    // imprimir += `<li class="list-group-item" La suma de los datos es> ${suma}</li>`;
}


function x(dataArray) {

    let suma = 0;
    let imprimir = '';
    for (let i = 0; i < dataArray.length; i++) {

        suma += dataArray[i];

        imprimir += `<li class="list-group-item"> ${dataArray[i]}</li>`;

        console.log(imprimir);



    }
    document.getElementById('ListaImprimir').innerHTML = imprimir;
    console.log(suma);




}