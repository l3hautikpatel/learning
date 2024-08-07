// higher order function ?
function abcd2(inp) {
    return function (inp2) { return inp + inp2; };
}
console.log(abcd2(10)(20));   // return log 30
//here abcd is higher oreder function //A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result.


// // this keyword
//global 
console.log(this); // this will return global keyword

//function
function abcd1() {
    console.log(this); // this line print window object also 
}

// method-> function inside object 
var obj1 = {
    name: "bhautik",
    age: 21,
    sayName: function(){ console.log(this); },   // this print current object  
}
obj1.sayName();






// // this call , apply , bind 
//this call 
var obj2 = {}
function abcd3() {
    console.log(this);
}
abcd3();    // this will return window object
abcd3.call(obj2);    // this will return called object or value 

//this apply
function abcd4(a,b,c,d) {
    console.log(this ,a,b,c,d);
}
abcd4(1,2,3,4);    // this will return window object
abcd4.call(obj2,1,2,3,4);    // this will return called object or value 

//this bind     //-> bind all the function and just return bind one function 
var newFunc = abcd4.bind(obj2);    // this will return called object or value 
newFunc();