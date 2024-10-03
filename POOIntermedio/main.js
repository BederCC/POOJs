const juan = {
    name : "Juan",
    age : 23,
    approvedCourses : ["curso 1"],
    addCourse(newCourse) {
        console.log("this", this);
        console.log("this.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));


// el objeto no se puede modificar
Object.seal(juan);

// el objeto no se puede modificar ni eliminar
Object.freeze(juan);

//enumerable: false -> no se puede iterar
Object.defineProperty(juan, "navigator", {
    value : "Chrome",
    enumerable : false,
    writable : true,
    configurable : true
});

//writable: false -> no se puede modificar
Object.defineProperty(juan, "editor", {
    value : "VsCode",
    enumerable : true,
    writable : false,
    configurable : true
});

//configurable: false -> no se puede eliminar
Object.defineProperty(juan, "terminal", {
    value : "WSL",
    enumerable : true,
    writable : true,
    configurable : false
});