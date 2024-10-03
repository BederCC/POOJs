const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
};

// const obj2 = obj1;
//const obj2 = {};
// for(prop in obj1){
//     obj2[prop] = obj1[prop];
// }

// //esto hace que se modifique el objeto original
// const obj3 = Object.assign({}, obj1);

// const obj4 = Object.create(obj1);

const obj2 = JSON.stringify(obj1);
console.log(obj2);

const obj = JSON.parse(obj2);
console.log(obj);
