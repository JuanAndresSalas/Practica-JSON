const tbody = document.querySelector("#tb-estudiantes");
var i = 0;

curso.estudiantes.forEach(element => {

    const estudiante = new Estudiante(element.nombre, element.apellido);

    function cambiarFondo(parametro) {
        if (estudiante.buscarHobbie(parametro)) {
            return 'style="background-color: green"'
        } else {
            return 'style="background-color: red"'
        }
    }
    function evaluarHobbie() {
        if (!estudiante.getHobbies()) {
            return "Sin hobbie"
        } else {
            return estudiante.getHobbies()
        }
    }
    if (element.edad) { estudiante.setEdad(element.edad); }
    if (element.nacimiento) { estudiante.setNacimiento(element.nacimiento); }
    if (element.hobbies) { estudiante.setHobbies(element.hobbies); }

    tbody.innerHTML += `<tr>
                            <td>${estudiante.getNombre()}</td>
                            <td>${estudiante.getApellido()}</td>
                            <td>${estudiante.nombrar()}</td>
                            <td>${estudiante.getEdad()}</td>
                            <td>${estudiante.getNacimiento()}</td>
                            <td>${evaluarHobbie()}</td>
                            <td ${cambiarFondo('Leer')}></td>
                            <td ${cambiarFondo('pelear')}></td>
                            <td ${cambiarFondo('caminar')}></td>
                       </tr> `;
    i++
});


