// there are three ways to make getter setter in js 
// 1 by using class
// 2 by using  object 
// 3 by using defineProperty() and function


// by using class

class Person {
    constructor(name, age) {
        this._name = name;      // if we didnt write _ before name than it give error that our call stack is full because every the race between constuctor and getter will started which full the stack 
        this._age = age;
    }
    
    // Getter
    get name() {
        return this._name;
    }
    
    // Setter
    set name(value) {
        if (typeof value !== 'string') throw new Error('Name must be a string');
        this._name = value;
    }
}
const person = new Person('John',  30);
console.log(person.name); // John
person.name = 'Jane';
console.log(person.name); // Jane




// by using object

let UserObject = {
    _name : "bhautik",
    _email : "bhautik@gmail.com",
    get name(){
        return this._name
    },
    set  name(newName){
        this._name = newName
    },
}

const tea = Object.create(UserObject)
console.log(tea.name);

// const b = new UserObject()
// console.log(b.name);



// by using function and define properties
function User(name,email){
    this._name = name
    this._email= email

    Object.defineProperty(this , 'email', {
        get : function(){
            return this._email
        },
        set : (value)=>{
            this._email = value
        } 
    })
    Object.defineProperty(this , 'name', {
        get : function(){
            return this._name
        },
        set : (value)=>{
            this._name = value
        } 
    })
}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);