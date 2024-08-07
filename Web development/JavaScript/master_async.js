// // sync and async differance 
// work all thing one by one -> sync
// work more than one task in the same time that call -> async

// // js is not async
// js is no async because it send async task to the side stack to run an than it will come to main stack 
// so js run all task in sync formate and async task also run in sync formate but after completing async task it transfer to the sync task(main) stack 

// // event loop 
// to communicate between two stack (main - side) event loop has been used

// // single threading and multi treading
// st -> to run a task in a time 
// mt -> to run more than one task in the same time 



// // promises
//code -> responce -> var -> then
//code -> reject -> var -> catch

var promise1 = new Promise(function (res, rej) {
    if (false) {
        return res()
    }
    else {
        return rej()
    }
})

promise1
    .then(() => { console.log("this promise response"); })
    .catch(() => { console.log("this promise reject"); })

var promise2 = new Promise((res, rej) => {
    let num = Math.floor(Math.random() * 10)
    if (num < 5) {
        return res(num);          // to pass the value to the then and catch 
    } else {
        return rej(num);
    }
})
promise2
    .then(function (data) { console.log(data + " is less than 5"); })
    .catch(function (data) { console.log(data + " is bigger than 5"); })

// nested promise
// p1 -> p2 -> p3 -> p4 -> p5

var p1 = new Promise((res, rej) => {
    setTimeout(() => {
        return res("task1");
    }, 1000);
})
var p2 = p1.then((data) => {
    setTimeout(() => {
        console.log(data);
    }, 1000);
    return new Promise((res, rej) => {
        return res('task2');
    })
})
var p3 = p2.then((data) => {
    setTimeout(() => {
        console.log(data);
    }, 1000);
    return new Promise((res, rej) => {
        return res('task3');
    })
})
var p4 = p3.then((data) => {
    setTimeout(() => {
        console.log(data);
    }, 1000);
    return new Promise((res, rej) => {
        return res('task4');
    })
})
var p5 = p4.then((data) => {
    setTimeout(() => {
        console.log(data);
    }, 1000);
    return new Promise((res, rej) => {
        return res('task5');
    })
})
var p6 = p5.then((data) => {
    setTimeout(() => {
        console.log(data);
    }, 1000);
    return new Promise((res, rej) => {
        return res('task6');
    })
})



// // async await 
// used for reduce the line of the then and catch codes

// by using promises
function fetch1() {
    fetch('https://randomuser.me/api/')
    .then((raw)=>{
        return raw.json()
    })
    .then((data)=>{
        console.log(data);
    })
}
fetch1()



async function fetch2() {
    var raw = await fetch('https://randomuser.me/api/')
    console.log("data hase just arrived but it is in raw form just wait a moument we are proccecing it");
    setTimeout(async () => {
        var data =await raw.json()
        console.log(data);
        console.log("done everything has seted to lunch");
    }, 2000);
}
fetch2()

