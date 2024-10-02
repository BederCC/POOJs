//abstraccion y encapsulamiento
//herencia y polimorfismo

class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }

    
}


function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
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
    constructor({ 
        name, 
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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
    isFree: true,
});

cursoProgBasica.name = "Curso de Programación Básica"; // Web... no


const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english",
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

    publicasComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree()) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo siento, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo siento, " + this.name + ", no puedes tomar este curso");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicasComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}

const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "migyel@miguel.com",
    instagram: "miguelito_feliz",
    learningPaths: [
        escuelaData,
        escuelaWeb,
    ],
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
    learningPaths: [
        escuelaWeb,
        escuelaData,
        escuelaVgs,
    ],
});