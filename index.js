// Select Items
const slides = document.querySelectorAll('.project__img')

const projectsArr = {
    projectOne: [
        img0 = './assets/projects/axion/img1.png',
        img1 = './assets/projects/axion/img2.png',
        img2 = './assets/projects/axion/img3.png', 
        img3 = './assets/projects/axion/img4.png', 
        img4 = './assets/projects/axion/img5.png', 
    ],

    projectTwo: [
        img0 = './assets/projects/Library/img1.png',
        img1 = './assets/projects/Library/img2.png',
        img2 = './assets/projects/Library/img3.png',
        img3 = './assets/projects/Library/img4.png',
        img4 = './assets/projects/Library/img5.png',
    ],

    projectThree: [
        img0 = './assets/projects/MovieAPI/img1.png',
        img1 = './assets/projects/MovieAPI/img2.png',
        img2 = './assets/projects/MovieAPI/img3.png',
        img2 = './assets/projects/MovieAPI/img4.png',
        img2 = './assets/projects/MovieAPI/img5.png',
    ],

    // projectFour: [
    //     img0 = './assets/projects/NewsAPI/img1.png',
    // ],

    // projectFive: [
    //     img0 = './assets/projects/Goals/img1.png',
    //     img1 = './assets/projects/Goals/img2.png',
    //     img2 = './assets/projects/Goals/img3.png',
    // ],

    // projectSix: [
    //     img0 = './assets/projects/Library/img1.png',
    // ]
}

let i = 0;
setInterval(() => {
    const projectOneBackground = document.querySelector('.project__one')
    const projectTwoBackground = document.querySelector('.project__two')
    const projectThreeBackground = document.querySelector('.project__three')
    // const projectFourBackground = document.querySelector('.project__four')
    // const projectFiveBackground = document.querySelector('.project__five')
    // const projectSixBackground = document.querySelector('.project__six')

    projectOneBackground.src = projectsArr.projectOne[i]
    projectTwoBackground.src = projectsArr.projectTwo[i]
    projectThreeBackground.src = projectsArr.projectThree[i]
    // projectFourBackground.src = projectsArr.projectFour[i]
    // projectFiveBackground.src = projectsArr.projectFive[i]
    // projectSixBackground.src = projectsArr.projectSix[i]


    i++
    if(i > 4) {
        i = 0;
    }
}, 3000)

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
})

let counter = 0

function Carousel() {
    if(counter == slides.length) {
        counter = 0
    }
    if(counter < 0) {
        counter = slides.length - 1
    }
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

/* ================ Blurry Loading ===================== */
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let int = setInterval(blurring, 7)
let load = 0

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
/* ============= Blurry Loading End ================== */

/** Toggle Sidebar */
function toggleSidebar() {
    document.body.classList.toggle('show--sidebar')
}
/** Toggle Sidebar End */

/* ===== Toggle Modal ======== */
function toggleModal() {
    document.body.classList.toggle("toggle--modal")
}
/* ===== Toggle Modal End ====== */

/* ========= Send email button on modal ========== */
function Contact(event) {
    event.preventDefault(); 
    // Select items
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    // Add the visible class to loading div
    loading.classList += ' modal__overlay--visible' 

    setTimeout(() => {
        emailjs.sendForm(
            'service_gd0vyta',
            'template_9jek4bq',
            event.target,
            'user_VqSnwwutoSTNCLs6RtQpW'
        ).then(() => {
            // Remove the visibility class from loading div
            loading.classList.remove('modal__overlay--visible') 

            // Add visibility class to the success div
            success.classList += ' modal__overlay--visible' 
        }).catch(() => {
            // Catch error and Remove visibility class and display alert
            loading.classList.remove('modal__overlay--visible') 
            alert(
                "Apologies for the inconvenience. The email service is temporarily unavailable. Please contact me directly at daman0797@gmail.com"
            )
        })
    }, 150)
}
/* ====== Send Email End ============= */

/* =========== Toggle Dark Mode ========== */
function toggleDark() {
    document.body.classList.toggle("dark-mode")
}
/* =========== Toggle Dark Mode End ========== */

/** Toggle Sidebar */
function openSideNav() {
    // called by onclick from index.html
    document.getElementById("sideNav").style.width = "100%"; 
}

function closeSideNav() {
    // called by onclick from index.html
    document.getElementById("sideNav").style.width = "0"; 
}
/** Toggle Sidebar End */

// palindrome question 
function palindrome(str) {
    str = str.toLowerCase()
    return str === str.split("").reverse().join("")
}
console.log(palindrome("kaya"))
// or
const palin = str => {
    str = str.toLowerCase()
    console.log(str === str.split("").reverse().join(""))
}
palin("anna")