function isObject(subject) {
    return typeof subject == "object";
    }

function isArray(subject) {
    return Array.isArray(subject);
    }

function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
        } else {
        if (subjectIsArray) {
            copySubject.push(subject[key]);
        } else {
            copySubject[key] = subject[key];
        }
        }
    }

    return copySubject;
}

function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}

function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    return {
        name,
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
    };
}

//const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });


const studentBase = {
    name: requiredParam("name"),
    email: requiredParam("email"),
    age: requiredParam("age"),
    approvedCourses: [],
    learningPaths: [],
    socialMedia: {
        twitter: null,
        instagram: null,
        facebook: null,
    },
};

const juan = deepCopy(studentBase);
Object.defineProperties(juan, "name", { 
    value: "Juanito",
    configurable: false,
});

console.log(juan.name);