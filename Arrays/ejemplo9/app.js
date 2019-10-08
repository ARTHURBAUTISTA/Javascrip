let inputNumbers = document.getElementById('InputNumbers');
let PrintString = "";
let ArrayLetras = [];

fillArray();
EventListenner();

function EventListenner() {
    inputNumbers.addEventListener('change', GetLetter);
}



function fillArray() {
    for (let i = 0; i <= 25; i++) {
        ArrayLetras[i] = String.fromCharCode(i + 65)
    }
}

function GetLetter(event) {

    // console.log(event);

    let value = Number(inputNumbers.value);
    if (value >= 0 && value < 26) {



        PrintString += `<li class="list-group-item">${ArrayLetras[value]} </li>  `

        document.getElementById('AlertPrint').innerHTML = PrintString;


    } else {
        swal.fire({
            type: 'error',
            title: 'Limite de Rango',
            text: 'Favor de ingresar numeros entre 0 y 25'
        })
    }

    input



}