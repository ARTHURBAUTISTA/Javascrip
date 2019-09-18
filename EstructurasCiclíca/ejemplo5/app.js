let btnAgregar = document.getElementById('btnAgregar');
let btnCalcular = document.getElementById('btnCalcular');
let contador = 0;
let contadorPrecioArticulo = 0;



EventListener()

function EventListener() {
    btnAgregar.addEventListener('click', agregarInputArticulo)
    btnCalcular.addEventListener('click', calcularTotal)

}

function agregarInputArticulo() {

    contador++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');
    DivRow.setAttribute('id', `fila${contador}`);

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let imputGroup = document.createElement('div');
    imputGroup.setAttribute('class', 'input-group mb-3');

    let inputArticulo = document.createElement('input');
    inputArticulo.setAttribute('type', 'text');
    inputArticulo.setAttribute('class', 'form-control');
    inputArticulo.setAttribute('placeholder', 'ingrese el nombre del articulo');

    let inputGrroupAppend = document.createElement('div');
    inputGrroupAppend.setAttribute('class', 'input-group-append');

    let buttonAgregarPrecio = document.createElement('button');
    buttonAgregarPrecio.setAttribute('id', `btnAgregarPrecio${contador}`);
    buttonAgregarPrecio.setAttribute('class', 'btn btn-outline-secondary');
    buttonAgregarPrecio.appendChild(document.createTextNode('Agregar Precio'))

    /*
    la line 34 sustituye  el uso de este codigo:
    let x = document.createTextNode('agregar precio')
    btnAgregarPrecio.appendChild(x)
    */

    let listaArticulos = document.getElementById('listaArticulos');
    listaArticulos.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(imputGroup);
    imputGroup.appendChild(inputArticulo);
    imputGroup.appendChild(inputGrroupAppend);
    inputGrroupAppend.appendChild(buttonAgregarPrecio);

    EventListenerAgregarPrecio();

}

function EventListenerAgregarPrecio() {

    let buttonAgregarPrecio = document.getElementById(`btnAgregarPrecio${contador}`);


    buttonAgregarPrecio.addEventListener('click', CrearInputPrecio);


}

function CrearInputPrecio(event) {

    contadorPrecioArticulo++;

    event.target.setAttribute('disabled', 'true')

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let imputGroup = document.createElement('div');
    imputGroup.setAttribute('class', 'form-group mb-3');

    let inputPrecioArticulo = document.createElement('input');
    inputPrecioArticulo.setAttribute('type', 'number');
    inputPrecioArticulo.setAttribute('class', 'form-control');
    inputPrecioArticulo.setAttribute('placeholder', 'ingrese el precio del articulo');
    inputPrecioArticulo.setAttribute('id', `valorArticulo${contadorPrecioArticulo}`);

    let listaArticulos = event.target.parentElement.parentElement.parentElement;



    listaArticulos.appendChild(DivCol);
    DivCol.appendChild(imputGroup);
    imputGroup.appendChild(inputPrecioArticulo);




}

function calcularTotal() {
    let suma = 0;
    for (let i = 1; i <= contadorPrecioArticulo; i++) {
        let valorInput = Number(document.getElementById(`valorArticulo${i}`).value)

        if (valorInput >= 200) {

            suma += valorInput * .85;
        } else if (valorInput < 200 && valorInput >= 100) {
            suma += valorInput * .88;
        } else {
            suma += valorInput * .90;
        }
    }

    let imprimirtotal = document.getElementById('imprimir1')
    imprimirtotal.innerHTML = suma;


}