let btnAgregar = document.getElementById('btnCalcular');
let ahorro = 1;
let acum = 0;



EventListenner()

function EventListenner() {

    btnCalcular.addEventListener('click', calcularSalario);
}

function calcularSalario() {

    for (let dia = 1; dia <= 365; dia++) {
        //acum = ahorro * 3;
        ahorro = (ahorro * 3);
        //ahorro = ahorro * .01;
        console.log(acum, ahorro);
    }

    let imprimir = document.getElementById('imprimir1');
    imprimir.innerText = '' + '$' + (ahorro / 100);

}