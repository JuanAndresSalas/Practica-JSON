function Estudiante(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = "";
    this.hobbies = "";
    this.nacimiento = "";

    this.nombrar = () => { return `${this.apellido}, ${this.nombre}`; }

    this.setEdad = (edad) => { this.edad = edad; }

    this.setNacimiento = (nacimiento) => { this.nacimiento = nacimiento; }

    this.setHobbies = (hobbies) => { this.hobbies = hobbies; };

    //Getters
    this.getEdad = function () {
        const hoy = new Date();
        if (this.edad) {
            return this.edad
        }
        else {
            if (this.nacimiento) {
                return hoy.getFullYear() - this.nacimiento;
            } else {
                return 0
            }

        }


    };

    this.getNombre = () => { return this.nombre };

    this.getApellido = () => { return this.apellido };

    this.getNacimiento = () => {
        if (this.nacimiento) {
            return this.nacimiento
        } else {
            if (this.edad) {
                const hoy = new Date()
                return hoy.getFullYear() - this.edad
            }
            return false
        }
    };
    this.getHobbies = () => {
        if (this.hobbies) {
            return this.hobbies
        } else {
            return false
        }
    };

    this.buscarHobbie = (hobbie) => {
        if (this.hobbies) {
            let arreglo = this.hobbies
            if (arreglo.indexOf(hobbie.toLowerCase(hobbie)) == -1) {
                return false
            } else {
                return true
            }

        } else {
            return false
        }
    }

}