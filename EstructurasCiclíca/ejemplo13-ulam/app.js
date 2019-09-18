let btnAgregar = document.getElementById('btnCalcular');
let imprimir = document.getElementById('imprimir1');


EventListenner()

function EventListenner() {

    btnCalcular.addEventListener('click', calcularRango);
}

function calcularRango() {

    let numero = Number(document.getElementById('N').value);

    if (numero > 0) {

        while (numero != 1) {





            if (numero % 2 == 0) {



                numero = numero / 2;

            } else {
                numero = (numero * 3) + 1;


            }
            console.log(numero);
            imprimir.innerText += ` ${numero} `;


        }
    } else {

        let imprimir = document.getElementById('imprimir1');
        imprimir.innerText = 'tiene que ser un numero positivo'
    }




}