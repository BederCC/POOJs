const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
    },
};
// Se crea una función constructora para crear objetos de tipo Student
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}
// Se crea un prototipo para la función Student
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
};
// Se crea un nuevo objeto de tipo Student
const juanita = new Student("Juanita Alejandra", 15, [
    "Curso de Introducción a la Producción de Videojuegos",
    "Curso de Creación de Personajes",
]);
console.log(natalia);
console.log(juanita);

//Prototipo con la sintaxis de clases
class Student2 {
    constructor({
        name, 
        age, 
        cursosAprobados = []
    }) 
    {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2(
    {name: "Miguelito",
    age:30,
    }
);

console.log(miguelito);