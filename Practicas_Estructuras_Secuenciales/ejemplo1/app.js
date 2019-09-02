//esta linea crea una variable lacual se ebcarga de obtener por medio del objeto documen en el elemento button con el id "btnCalcular"

let btncalcular = document.getElementById('btncalcular');

//por medio del método "addEventListener" se le asigno el evento click al evento "button" y al momento de ejecutar dicho evento se ejecutara la funcion suma.
btncalcular.addEventListener('click', suma);


//funcion: bloque de codigo que se ejecuta hasta cuando se manda a llamar o se invoca, mientras no sea invocada no realizara ninguna acccion en el codigo.
function suma() {

    //se obtendran los valores de los inputs por medio del metodo ".value" 
    let Numero1 = document.getElementById('numero1').value;
    let Numero2 = document.getElementById('numero2').value;

    //se reasigna el valor de la variable numero2 convirtiendolo de String a Numero.
    Numero1 = Number(Numero1);
    Numero2 = Number(Numero2);

    //se declara la variable "resultado" y se inicializa con valor '0'
    let resultado = 0;

    //despues de obtener los datos de los elementos input se realiza el proceso de suma y se le asigna dicho valor a la variable "resultado"
    resultado = Numero1 + Numero2;

    //se asigno a la variable "imprimirResultado" el elemento con el id "resultado" 
    let imprimirResultado = document.getElementById('resultado');
    //por medio del metodo "innerHTML" se le asigna el valor de la variable resultado para que pueda imprimir en el elemento
    imprimirResultado.innerHTML = resultado;
}