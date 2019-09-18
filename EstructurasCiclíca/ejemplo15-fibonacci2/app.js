let btnAgregar = document.getElementById('btnCalcular');
let imprimir = document.getElementById('imprimir1');




EventListenner()

function EventListenner() {

    btnCalcular.addEventListener('click', calcularSerie);
}

function calcularSerie() {

    let a = 0,
        b = 1
        //resultado = b;

    let numero = Number(document.getElementById('N').value);

    imprimir.innerText = '0 1'

    for (i = 0; i < numero; i++) {

        resultado = a + b;

        a = b;
        b = resultado;
        //console.log(resultado);


        if (numero >= b) {

            console.log(resultado);

            imprimir.innerText = `el numero anterior al ingresado en la serie fibonacci es: ${resultado} `;

        }



    }
}