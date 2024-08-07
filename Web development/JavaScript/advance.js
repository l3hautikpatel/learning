// execution context 
// copy obj and arry without creating effact of referance variable 
// truthy and falsy 

// // 3D fo let vat and const 
// 1 var is old js vesion , let and const are introduce in new js
// 2 var create window obj , let and const not create window obj
// 3 var valid scop is in function  while let is limited to the {} breacket
for (var i = 0; i <= 11; i++) {
    console.log(i);
}
console.log(i);
for (let j = 0; j <= 11; j++) {
    console.log(j);
}
// console.log(j);  // this line throw error


// // browser contex api
// window obj - it is functionality provided by browser
// stack 
// heap memory 

// // execution context 
// variable 
// function 
// lexical environment - scop of the function nd variable 


// // copy refereance variable 
let array1 = [10, 20, 30, 40, 50, 60];
let array2 = [...array1];
console.log(array2);

let obj1 = {
    a: 32,
    b: "bhUTIK"
}
let obj2 = { ...obj1 }
console.log(obj2);


// // truthy and falsy 
// falsy value :- false , NaN , null , undefine ,0 , document.all
// truthy all other than falsy value


// // foreach - use for array 
let array3 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
array3.forEach(function (value) {
    console.log(value);
})


// // for in - use for object 
let obj3 = {
    a: 2,
    b: "bhautik",
    c: 2343,
    d: false
}
for (const key in obj3) {
    console.log(key + " :- " + obj3[key]);
}


// // callback function - function which is call after some function or some event 
setTimeout(() => {
    console.log("this function is callback function not settimeout , it is  async javascript function");
}, 2000);


// // fristclass function
let func1 = () => {
    console.log("hey");
}
func1();

function func2(a) {
    a();
}
func2(func1);


// array is object in js ?
console.log(typeof (array1));
console.log(typeof (array2));
console.log(typeof (obj1));
console.log(typeof (obj2));

console.log(Array.isArray(array1));
console.log(Array.isArray(array2));
console.log(Array.isArray(obj1));
console.log(Array.isArray(obj2));

console.log(array2 instanceof Array);
console.log(obj1 instanceof Array);

// // delete from object 
console.log(obj3);
delete obj3["c"];
console.log(obj3);


