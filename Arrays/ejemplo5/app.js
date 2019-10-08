let btnAddElement = document.getElementById('btnAddElement');

EventListenner();

function EventListenner() {
    btnAddElement.addEventListener('click', FillArray);
}


/*===========================
Inicia pasrte de aplicacion resuelta por medio de fuerza Bruta.
=============================*/



function FillArray() {

    let inputValue = document.getElementById('InputNumero')
    let arrayPrimeNumbers = [];



    for (let x = 0; x < Number(inputValue.value); x++) {

        let numberPrimeRnadom = isPrime();
        if (numberPrimeRnadom == true) {

            x--

        } else {

            arrayPrimeNumbers[x] = numberPrimeRnadom;
        }

    }


    console.log(inputValue.value);
    console.log(arrayPrimeNumbers);

    let maximo = 0;

    for (let x = 0; x <= arrayPrimeNumbers.length; x++) {

        if (maximo < arrayPrimeNumbers[x]) {

            maximo = arrayPrimeNumbers[x];

        }

    }
    console.log(maximo);





}

function isPrime() {

    let NumberRandom = Math.floor(Math.random() * 1000) + 1;

    for (let i = 2; i < NumberRandom; i++) {

        if (NumberRandom % i == 0) {
            return true;
        }

    }
    return NumberRandom;
}

/*===========================
Termina aplicacion Fuerza Bruta
=============================*/

/*===========================
Inicia Aplicacion resuelta por paradigma dinamico 
=============================*/

// let ArrayNumberPrimeDinamyc = [];

// function FillArrayDinamyc() {

//     let PrimeNumber = 0;
//     for (let i = 0; i <= PrimeNumber && i < 10; i++) {

//         PrimeNumber++

//         if (PrimeNumber % i == 0) {
//             ArrayNumberPrimeDinamyc.push(PrimeNumber);
//         }

//     }
// }