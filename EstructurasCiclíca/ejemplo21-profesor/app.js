let btnAgregar = document.getElementById('btnCalcular');
let salario = 1500;
let total = 0
let acum = 0;



EventListenner()

function EventListenner() {

    btnCalcular.addEventListener('click', calcularSalario);
}

function calcularSalario() {

    for (let año = 1; año <= 6; año++) {
        acum = salario * .10;
        salario = salario + acum;
        console.log(acum, salario);
    }

    let imprimir = document.getElementById('imprimir1');
    imprimir.innerText = '' + '$' + salario;

}