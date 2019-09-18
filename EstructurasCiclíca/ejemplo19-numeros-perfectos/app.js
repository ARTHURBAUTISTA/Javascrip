let btnAgregar = document.getElementById('btnCalcular');




EventListenner()

function EventListenner() {

    btnCalcular.addEventListener('click', calcularRango);
}

function calcularRango() {
    let contador = 0;


    let numero = Number(document.getElementById('N').value);

    for (let i = 1; i < numero; i++) {

        if (numero % i == 0) {

            contador = contador + i;

        }
        if (contador == numero) {

            let imprimir = document.getElementById('imprimir1');
            imprimir.innerText = 'Es un numero perfecto';

        } else {
            let imprimir = document.getElementById('imprimir1');
            imprimir.innerText = 'No es un numero perfecto';
        }

    }


}