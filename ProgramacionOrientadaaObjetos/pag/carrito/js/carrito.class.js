class Carrito {



    constructor() {

        this.LS = new LocalStorage();

    }


    readDataCourse(curso, listaCursos) {

        const dataCourse = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id')

        }

        this.addCourseCar(dataCourse, listaCursos)

        console.log(dataCourse);

    }

    addCourseCar(dataCourse, listaCursos) {
        const row = document.createElement('tr');
        let verif = this.verificarCrrito(dataCourse);


        row.innerHTML = `
        <td>
            <img src="${dataCourse.imagen}"width=100>

        </td>

        <td>${dataCourse.titulo}</td>
        <td>${dataCourse.precio}</td>


        <td>
        <a href="#" class= "borrar-curso" data-id="${dataCourse.id}">X</a>
        </td>


        `
        listaCursos.appendChild(row);
        this.LS.saveCourseLocalStorage(dataCourse)

        Swal.fire({
            type: 'success',
            title: 'Curso Agregado',
            showConfirmButton: false,
            timer: 1000
        })



    }

    EliminarCursoCarrito(event) {
        event.preventDefault();

        let curso, cursoId;

        if (event.target.classList.contains('borrar-curso')) {

            curso = event.target.parentElement.parentElement;
            cursoId = curso.querySelector('a').getAttribute('data-id')
            curso.remove();

            this.LS.eliminarCursoLS(cursoId);
        }

        Swal.fire({
            type: 'warning',
            title: 'Eliminado Exitosamente',
            showConfirmButton: false,
            timer: 1000
        })
    }

    showCoursesLSCar() {



        let CoursesLS = this.LS.GetCoursesLocalStorage()
        CoursesLS.forEach(function(curso) {

            const row = document.createElement('tr');

            row.innerHTML = `
    
            <td>
                <img src="${curso.imagen}"width=100>
            </td>
    
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
    
    
            <td>
            <a href="#" class= "borrar-curso" data-id="${curso.id}">X</a>
            </td>
            `
            listaCursos.appendChild(row);

        });
    }

    vaciarCarrito(listaCursos) {

        //forma lenta
        // listaCursos.innerHTML = "";

        //forma rapida

        while (listaCursos.firstChild) {
            listaCursos.removeChild(listaCursos.firstChild)


        }

        this.LS.vaciarCarrito();
    }

    verificarCrrito(dataCourse) {

        let cursosLS;
        let curso = dataCourse.id

        cursosLS = LS.GetCoursesLocalStorage();
        cursosLS.forEach(function(cursosLS) {

            if (cursosLS === curso) {

                Swal.fire({
                    type: 'warning',
                    title: 'Curso Repetido',
                    showConfirmButton: false,
                    timer: 1000
                })



            }

        })



    }

















}