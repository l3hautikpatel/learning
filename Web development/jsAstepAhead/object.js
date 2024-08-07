console.log("OBJECT FILE");


var obj1 ={
    name:"bhautik",
    "full name" : "bhautik patel",
    email :"bhautikp105@gmail.com",
    age:22,
    greeting : function(){
        console.log(`hello ${this["full name"]}`);
    }
}

console.log(obj1.greeting());

obj1.name = "hello false value"
console.log(obj1.name);
Object.freeze(obj1);
obj1.name = "bhautik"
console.log(obj1.name);

console.log( Object.isFrozen())



const mySym = Symbol( 'my symbol');
console.log(typeof mySym);

obj2 = {
    name:"for interview ! important",
    [mySym] : "symbol key value",
    key2 : "hello" ,
}

console.log(typeof obj2[mySym]);
console.log( obj2[mySym]);
console.log( obj2.mySym);   /// this is undefine because it is not a way to  access the property for symbol

console.log("\n\n");
console.log(obj1 , obj2 );
let obj003 = obj1 + obj2 
console.log(obj003);
obj003 = Object.assign( {} ,obj1 , obj2) 
console.log(obj003);
// obj003 = Object.assign(obj1 , obj2)
// console.log(obj003);


console.log("\n\n");
console.log("\n\n");

let obj3 =  {
    a : 1,      
    b : 2,
    c :3 , 
    d : false,
    e : "name",
    thisIsLongKeyValueWeHaveToProblemToWriteItInCodeOften:true,
}
console.log(obj3.hasOwnProperty("a")); // true or false
console.log(Object.getOwnPropertyNames(obj3)); // returns all
console.log(Object.keys(obj3)); // returns all
console.log(Object.values(obj3)); // returns all
console.log(Object.entries(obj3)); // returns all


const {thisIsLongKeyValueWeHaveToProblemToWriteItInCodeOften : nowItEsay}= obj3;
console.log(nowItEsay);