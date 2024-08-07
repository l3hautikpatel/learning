// mini project 1

var status1 = document.querySelector(".status");
var addRemove = document.querySelector(".addRemove");
var flagFriend = 0;
addRemove.addEventListener('click', () => {
    if (flagFriend == 0) {
        flagFriend = 1
        addRemove.innerHTML = "Remove"
        addRemove.style.backgroundColor = "lightcyan"
        status1.innerHTML = "Friend"
        status1.style.color = "green"
    } else {
        flagFriend = 0
        addRemove.innerHTML = "Add"
        addRemove.style.backgroundColor = "#243b56"
        status1.style.color = "red"
        status1.innerHTML = "Strenger"
    }
})

// mini project 2 


var postImg = document.querySelector('.postImg');
var likeIcon = document.querySelector("#like")
var likeIndicator = document.querySelector('#likeIndicator')

postImg.addEventListener('dblclick', () => {
    console.log("hello");
    likeIndicator.className = "ri-heart-fill"
    likeIndicator.style.color = "red"
    likeIcon.style.opacity = 1;
    likeIcon.style.transform = "translate(-50%,-100%) scale(4)"
    setTimeout(() => {
        likeIcon.style.opacity = 0;
    }, 2500);
})
likeIndicator.addEventListener('click', () => {
    likeIndicator.className = "ri-heart-line"
    likeIndicator.style.color = "#000"
})


// mini project 3 

var cursor = document.querySelector('.cursor')
var cursorBlur = document.querySelector('.cursorBlur')
document.addEventListener('mousemove', (dets) => {
    cursor.style.left = dets.x - 7.5 + "px"
    cursorBlur.style.left = dets.x - 75 + "px"
    cursor.style.top = dets.y - 7.5 + "px"
    cursorBlur.style.top = dets.y - 75 + "px"
})


// mini project 4 

var part = document.querySelectorAll('.part')
// var partImg = document.querySelectorAll('.part>img')

part.forEach((value) => {
    value.addEventListener('mouseenter', () => {
        value.childNodes[1].style.opacity = 1
    })
    value.addEventListener('mousemove', (dets) => {
        value.childNodes[1].style.left = dets.x - 50 + "px"
        value.childNodes[1].style.top = dets.y - 50 + "px"
    })
    value.addEventListener('mouseleave', () => {
        value.childNodes[1].style.opacity = 0
    })
    // console.log(value);
})





// mini project 5 

var storyFull = document.querySelector('.storyFull');
var stories = document.querySelector('.stories');
var storyString = "";
var storyLimit = 10;
var storiesData = [
    { user: "", data: "" }
]

function randomGen() {
    num = Math.floor(Math.random() * 100);
    ranNum = Math.floor(Math.random() * 10);
    if ((ranNum % 2) == 0) {
        gender = "men"
    } else {
        gender = "women"
    }
    return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`
}
async function randomImage() {
    var url = await fetch('https://picsum.photos/550');
    return url.url;
}
async function generateRandomData() {
    for (let i = 0; i < storyLimit; i++) {
        const userImage = randomGen();
        const imageUrl = await randomImage();
        storiesData[i] = { user: userImage, data: imageUrl }
        storyString += `<div class="story">
        <img id="${i}" src="${userImage}" alt="">
    </div>`
    }
}

async function postDataIntoStories() {
    await generateRandomData()
    console.log(storiesData);
    stories.innerHTML = storyString;
    var story = document.querySelectorAll('.story img')
    story.forEach((val) => {
        val.addEventListener('click', () => {
            storyFull.innerHTML = `<img src="${storiesData[val.id].data}" alt=""><div style="animation-duration: 5s;animation-timing-function: linear;" class="timeLine"></div>`
            storyFull.style.display = "block";
            setTimeout(() => {
                var timeline = document.querySelector('.timeLine');
                timeline.style.display = "block";
                timeline.style.animationName = 'timeline'
            }, 1);
            setTimeout(() => {
                var timeline = document.querySelector('.timeLine');
                timeline.style.animationName = ''
                timeline.style.display = "none"
                storyFull.style.display = "none";
            }, 5000);
        })
    })
}

postDataIntoStories()

storyFull.addEventListener('click',()=>{
    storyFull.style.display = "none"
})















// animation

var h1 = document.querySelectorAll('.upDown')
h1.forEach((value) => {
    result = ""
    for (let i = 0; i < value.innerHTML.length; i++) {
        result += `<span>${value.innerHTML[i]}</span>`
    }
    value.innerHTML = result
})
gsap.to("span", {
    y: 200,
    top: "20px",
    color: "#243b56",
    duration: 5,
    yoyo: 1,
    repeat: -1,   // n for n time and -1 for  infinite 
    stagger: 0.1,
})


// document.addEventListener('keyup', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     console.log(`(keyup) Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);


// // Add event listener on keypress
// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     console.log(`(keypress) Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);

// // Add event listener on keydown
// document.addEventListener('keydown', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     console.log(`(keydown) Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);

