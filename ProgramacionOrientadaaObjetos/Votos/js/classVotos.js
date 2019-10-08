class votos {
    favor = 0;
    contra = 0;
    abstencion = 0;


    constructor() {

    }

    calcularAfavor() {
        this.favor++
    }

    calcularEnContra() {
        this.contra++
    }

    calcularAbstencion() {
        this.abstencion++
    }

    Imprimir() {
        let Resultado = '';

        if (this.favor > this.contra) {

            Resultado = `La Mocion se acepta con ${this.favor} votos a favor, ${this.contra} votos en contra, y ${this.abstencion} abstenciones`

            Swal.fire({
                type: 'info',
                title: 'Information...',
                text: `${Resultado}`

            })
        }

        if (this.favor < this.contra) {

            Resultado = `La Mocion se acepta con ${this.favor} votos a favor, ${this.contra} votos en contra, y ${this.abstencion} abstenciones`

            Swal.fire({
                type: 'info',
                title: 'Information...',
                text: `${Resultado}`

            })

        }

        if (this.favor == this.contra) {

            Resultado = `La Mocion se acepta con ${this.favor} votos a favor, ${this.contra} votos en contra, y ${this.abstencion} abstenciones`

            Swal.fire({
                type: 'info',
                title: 'Information...',
                text: `${Resultado}`

            })

        }

        return Resultado;
    }





}