let btnAgregar = document.getElementById('btnAgregar');
let contador = 0;

EventListener()

function EventListener() {
    btnAgregar.addEventListener('click', AgregarAhorro);
}

function AgregarAhorro() {

    if (contador < 12) {
        contador++;

        let ahorro = Number(document.getElementById('ahorroMensual').value);

        let spanAhorro = document.createElement('span');
        spanAhorro.setAttribute('id', `ahorroMensual${i}`).textContent;
        let textoSpan = document.createTextNode(`$${ahorro}`);


        spanAhorro.appendChild(textoSpan);

        let imprimir = document.getElementById(`mes${contador}`)

        imprimir.appendChild(spanAhorro);

        calcularAhorro();
    }

    function calcularAhorro(CantidadAhorro) {

        let imprimirAhorroTotal = document.getElementById('total');
        let suma;

        for (let i = 1; i <= contador; i++) {

            let valorObtenido = document.getElementById(`mes ${i}`).textContent;
            suma += Number(valorObtenido);
        }

        let imprimirAhorroTotal = document.getElementById('total');

        imprimirAhorroTotal.innerHTML = `<span>`


    }

}