//abstraccion y encapsulamiento

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}


class Course {
    constructor({ name, classes = [] }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        if (nuevoNombre === "Curso Malito de Programación Básica") {
            console.error("Web... no");
        } else {
            this._name = nuevoNombre;
        }
    }
}



const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});

cursoProgBasica.name = "Curso de Programación Básica"; // Web... no


const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
});

class LearningPath {
    constructor({ name, courses = [] }) {
        this.name = name;
        this.courses = courses;
    }
};

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        "Curso de Python",
        "Curso de R",
        "Curso de Machine Learning",
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        "Curso de Unity",
        "Curso de Unreal",
    ],
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "migyel@miguel.com",
    instagram: "miguelito_feliz",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ],
});