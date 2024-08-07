// variable
let newvar =10 ;
let newvar2 ="10" ;
let newvar3 =false  ;
let newvar4 = NaN  ;
let newvar5 ;

// hoisting 
document.write("this is new file and writen in log");

document.write("this is indicate this file is atached with html file <br>");


document.write(a + "<br>");

var a = 10 ;

document.write(a+"<br>"+"<br>");


// referance variable 
let arr = [10,20,30,40];

let array = arr ;
document.write(arr + "<br>")
document.write(array +"<br>")

array.pop();

document.write(arr + "<br>")
document.write(array +"<br>"+"<br>")

// conditionals 

if(10>9){
 document.write("hello this is true "+"<br>"+"<br>")
}else if(10 == 10 ){
 document.write("hello"+"<br>"+"<br>");
}

// loops 

for (let i = 0; i < 10; i++) {
    document.write(i + "<br>");
}
let loop = 0 ;
while (loop > 10) {
    document.write(loop + "<br>");
    loop++;
}

//functions 

function func() {
    document.write("<br>"+"hello good morning"+"<br>");
}
let greet = (time)=>{document.write("hello sir , <br> good " + time+"<br>"+"<br>");}
func();
greet("night");

//array and array function 

let newArr = [10, 20, 30 ,40,50]
document.write(newArr+"<br>");

newArr.push(60)
document.write(newArr + "<br>");

newArr.unshift(60)
document.write(newArr + "<br>");

newArr.pop()
document.write(newArr + "<br>");

newArr.shift()
document.write(newArr + "<br>");

newArr.splice(1,4)
document.write(newArr + "<br>"+"<br>");


//object

let obj = {
    id:1234,
    name:"<NAME>",
    age :  9876,
    address:{
        flatNO:"A-30",
        streetName :"XYZ",
        street:"nikol",
        city :"Ahmedabad",
        state:"Gujarat",
        pincode:382350,

    }
}
document.write(obj + "<br>");
document.write("id :- "+obj.id +"<br>");
document.write("name :- "+obj.name +"<br>");
document.write("age :- "+obj.age +"<br>");
document.write("address :- "+obj.address.flatNO + " "+obj.address.streetName+" "+obj.address.street +" "+ obj.address.city+" " +obj.address.state + " "+obj.address.pincode+" "+"<br>"+"<br>");