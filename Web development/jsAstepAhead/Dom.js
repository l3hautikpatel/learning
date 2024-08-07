let lungList = document.querySelector('.laun')

function addLaung(name){
    let li = document.createElement('li')
    li.innerHTML = name
    lungList.appendChild(li)
}
addLaung("python")
function addOptiLaung(name){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(name))
    lungList.appendChild(li);
}
addOptiLaung("Java")
addOptiLaung("Typescript")
addOptiLaung("Solidity")


let secoundLung = document.querySelector('li:nth-child(2)')
console.log(secoundLung);

function nameChange(name){
    let newLi = document.createElement( 'li' )
    newLi.innerHTML = name;
    secoundLung.replaceWith(newLi)
}

nameChange( "hello" ); 


let fristLung = document.querySelector('li:first-child')
fristLung.textContent='C++';

document.querySelector('li:last-child').remove();