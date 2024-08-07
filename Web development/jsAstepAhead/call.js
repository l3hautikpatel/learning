function createUser(userName, email , password){
    // this.userName = userName ; 
    setUserName.call(this , userName)  // to store context in this we are passing this  as a parameter of the method
    // setEmail(this,email);    -> if we write this then only  the method will be called but not the property so email is not gone set in user
    setEmail.call(this,email);
    setPassword.call(password) ;  // as login page we don`t need to store password so it just set password in db by function 
}

function setUserName(name){
    console.log(this);
    this.userName = name
}
function setEmail(name){
    console.log(this); 
    this.email = name
}
function setPassword(name){
    // bd function  call
    this.password = name
}

let user1 = new createUser("bhautik" , " bhautikp105@gmail.com" , "1234") // to create new object we need to write new keyword
console.log(user1);