// // higher order function  
// -> if some function return or tack function as a perameter that that function known as higher order function 

let array1 = [1,2,3,4,5,6];
array1.forEach(elem => {   // --> here in this example foreach tack function as a perameter so forEach is higher order function
    document.write(elem) ;  
    console.log(elem);  
});  


batchNo = 1;
function addBatchNo(no){
    batchNo += 1;
    return no+1
}

// //  constructor function
// -> constructor function that means a function which mainly containt all the proerties and function which is commone in all the other object 
// for example ek biba mathi same vatu bane to aa bibu che e constructor thayu te product mate
function bibuOfAnything() {
    this.value = "it can be anything";
    this.name = "item name"
    this.price = 234;
    this.batchNo = addBatchNo(batchNo)
}
// now we can make new item by using new keyword
var thing1 = new bibuOfAnything();
var thing2 = new bibuOfAnything();
var thing3 = new bibuOfAnything();
// thck an example of LED light remote 
function button(color){
    this.shap= "round";
    this.color = color || 'white';
    this.redius = 2
}
var newBtn = new button("red");




// // frist class function
// -> this is property of function wich can give us chance to use function as variable 
// we can pass function , save function or we can return function as variable that call frist class function
//save 
//return
var newFunc = (name)=>{
    console.log(name+" this is new functionn");
    return function(time){
        console.log("good" + time);
    }
}
let variable = newFunc("hello")("morning");
// pass 
setTimeout(() => {
    console.log("this function is also a frist class function");
}, 1000);



// // new keyword
//  -> new keyword is used to nake new odject of function(bibu)
// when we write new look that we make a black object({ }) of any thing and than place that blank object inplace of this key word of that function

var newbtn1 = new button("white"); 



// // iife 
//  -> iife is stend for immediately invoked function expression   -- jQuery , gsap ,3js all are the ex. of iife
// iife is used in code to make PRIVATE variables
// private variable is the variable which is directly not accesse by the end user - it can be accecc by getter and setter

//  here iife function example is writen

var example1 =(function(){
    var thisCantUseByUser = 10;
    console.log("this function is directly run");
})()
// console.log(thisCantUseByUser);         <- this will cause error

var example2 = (function(){
    var privateVar = 10
    return {
        getter:function(){
            console.log(privateVar);
        },
        setter:function(setvar){
            privateVar = setvar;
        },
    }
})()

example2.setter(20);
console.log("the value of privateVar = ");
example2.getter();



// // prototype
//  ->  every object have soe of the default functions and properties that call prototype
var obj1 = {
    name:"<NAME>",
}

// // prototype inheritance
// -> it is same as java inheritance but it used prototype to achive inheritance that why it also call prototype inheritance
var human = {
    canfly:false,
    canwalk:true ,
    canrun:true,
    cantalk:true,
}
var me = {
    canCreatewebsite:true,
    canMakeAwesomeWebsite:true,
}
// this next line inharite props. of human into me object
me.__proto__=human ;  // -> all inherite props saved as prototype property of me 
console.log(me);  


// // this call apply bind
//global 
console.log(this); // this will return global keyword

//function
function abcd1() {
    console.log(this); // this line print window object also 
}

// method -> function inside object 
var obj1 = {
    name: "bhautik",
    age: 21,
    sayName: function(){ console.log(this); },   // this print current object  
}
obj1.sayName();

// defult value of this inside any function is window object 
function exampleCall1() {
    console.log(this);
}
function exampleCall2() {
    console.log(this);
}
function exampleCall3(val1,val2,val3) {
    console.log(this);
    console.log(val1 +" " + val2 + " "+val3);
}
var objCall1={
    age:21,
    name:"bhautik",
}

//call   -> to change the value of any function from this to other object
exampleCall1();   // <- defult this is window
exampleCall1.call(objCall1);   // <- this is now chaged to objCall1
exampleCall3.call(objCall1 , 1,2,3);
exampleCall3.call(objCall1 , [1,2,3])

//apply 
exampleCall3.apply(objCall1 , [1,2,3])
// exampleCall3.apply(objCall1 , 1,2,3);

//bind   -> return binded function which we can store in new var
var bindedFunction = exampleCall3.bind(objCall1,1,2,3)
bindedFunction();



// // pure and impure function 
// pure function  -> a function said it is pure if that fullfile this two condition
// I  -> pure function never  chage any global vairable value
// II -> pure function always return same output for same input 

function pureFunc1(){
    return true;    // I & II both are satisfied here so its pure funciton
}
function impureFunc1(val1 , val2) {
    return val1 + val2;
}
