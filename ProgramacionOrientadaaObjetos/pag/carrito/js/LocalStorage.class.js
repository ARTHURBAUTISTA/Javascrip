class LocalStorage {

    constructor() {}

    saveCourseLocalStorage(curso) {


        let ArrayCourses = this.GetCoursesLocalStorage();
        ArrayCourses.push(curso);

        localStorage.setItem('courses', JSON.stringify(ArrayCourses))

    }


    GetCoursesLocalStorage() {
        let cursosLS;
        if (localStorage.getItem('courses') === null) {
            cursosLS = [];

        } else {
            cursosLS = JSON.parse(localStorage.getItem('courses'))
        }

        return cursosLS;
    }

    eliminarCursoLS(cursoid) {

        let cursosLS = this.GetCoursesLocalStorage();

        cursosLS.forEach(function(cursoLS, index) {
            if (cursoLS.id === cursoid) {
                cursosLS.splice(index, 1)
            }
        })

        localStorage.setItem('courses', JSON.stringify(cursosLS))

    }

    vaciarCarrito() {
        localStorage.clear();
    }


}