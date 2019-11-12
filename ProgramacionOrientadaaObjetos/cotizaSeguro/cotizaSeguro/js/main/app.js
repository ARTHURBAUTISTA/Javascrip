const formulario = document.getElementById('cotizar-seguro');

eventListener();

llenarSelectAnio();

function eventListener() {
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(event) {
    event.preventDefault();

    const marcaSeleccionada = document.getElementById('marca').value;
    const anio = document.getElementById('anio').value;
    const tipo = document.querySelector(`input[name="tipo"]:checked`).value;
    const interfaz = new Interfaz;

    if (marcaSeleccionada == "" || anio == "" || tipo == "") {
        interfaz.mostrarMensaje('Faltan datos , revisa el formulario y prueba de nuevo', 'error');
    } else {
        const resultado = document.querySelector('#resultado div');
        if (resultado != null) {
            resultado.remove();
        }

        const Seguro = new seguro(marcaSeleccionada, anio, tipo);

        const cantidad = Seguro.cotizarSeguro();

        interfaz.mostrarResultado(Seguro, cantidad)

        interfaz.mostrarMensaje('cotizando.....', 'Exito!');

    }

}

function llenarSelectAnio() {
    const max = new Date().getFullYear();
    const min = max - 20;
    const selectAnios = document.getElementById('anio');


    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        selectAnios.appendChild(option);
    }
}