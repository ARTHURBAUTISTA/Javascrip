class Proyectil {

    /*===========================
    Propiedades de Objetos
    =============================*/
    velocidadInicial = 0;
    angulo = 0;

    constructor(VelocidadInicial, Angulo) {

        this.velocidadInicial = VelocidadInicial;
        this.angulo = Angulo;


    }

    /*===========================
    Metodos de Objetos
    =============================*/

    CalcularVelocidadX(t) {
        let VelocidadX = 0;

        VelocidadX = (this.velocidadInicial * Math.cos(this.angulo * (Math.PI / 180))) * t;

        return VelocidadX;
    }

    CalcularVelocidadY(t) {
        let VelocidadY = (this.velocidadInicial * Math.sin(this.angulo * (Math.PI / 180)));
        VelocidadY = VelocidadY * t - 0.5 * 9.8 * Math.pow(t, 2);

        return VelocidadY;




    }

    CrearSpan(PosicionX, PosicionY) {
        let spanCreado = document.createElement('span');
        spanCreado.style.left = `${PosicionX}%`;
        spanCreado.style.bottom = `${PosicionY}%`;
        document.getElementById('contenedor').appendChild(spanCreado);
    }

}