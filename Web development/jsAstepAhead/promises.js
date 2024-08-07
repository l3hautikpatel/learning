console.log("hello");

let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res({ name: "John", age: 30 });
    }, 1000)
})
p1.then((e) => {
    console.log(e);
})



let p2 = new Promise((res, rej) => {
    if (true) {
        setTimeout(() => {
            res({ name: "bhautik", no: 123 })
        }, 1000);
    } else {
        rej("ERROR : hello check  your code")
    }
})
p2.then((e) => {
    return e.name
}).then((name) => {                  // this line is handel parsing timein big data
    console.log(name);
}).catch((e) => {
    console.log(e);
}).finally(() => {
    console.log("p2 is resolved or rejected and final block is running");
})



let p3 = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve("hello this is data")
        }, 1000);
    }
    else {
        reject(Error('error in promise'));
    }
})

async function p3Consume() {
    try {
        let resopnse = await p3            // promises is object that why this is written in this way
        console.log(resopnse);
    } catch (e) {
        console.log(e);
    }
}
p3Consume()




async function getUser1() {
    try {
        let res = await fetch("https://randomuser.me/api")
        res = await res.json()     // this line also need some  time to parse the response so we use async-await here
        console.log(res);
    } catch (e) {
        console.log(e);
    }

}
getUser1();


// let handel this with promise
new Promise((resolve, reject) => {                        // we can also write this directly
    let res = fetch("https://randomuser.me/api")
    if (res) {
        resolve(res)
    } else {
        reject("error in fetching data");
    }
}).then((data)=>{
    return data.json();
}).then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);
})