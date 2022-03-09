// Select Items
const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.fa-arrow-right')
const prevBtn = document.querySelector('.fa-arrow-left')

const projectsArr = {
    projectOne: [
        img1 = './assets/projects/axion/img1.png',
        img2 = './assets/projects/axion/img2.png',
        img3 = './assets/projects/axion/img3.png', 
    ],

    projectTwo: [
        img1 = '',
        img2 = '',
        img3 = '',
    ],

    projectThree: [
        img1 = '',
        img2 = '',
        img3 = '',
    ],

    projectFour: [
        img1 = '',
        img2 = '',
        img3 = '',
    ],

    projectFive: [
        img1 = '',
        img2 = '',
        img3 = '',
    ],

    projectSix: [
        img1 = '',
        img2 = '',
        img3 = '',
    ]
}

let i = 0;
function Slides() {
    const projectOneBackground = document.querySelector('.project__img')
    projectOneBackground.src = projectsArr.projectOne.img[i]
    i++
    if(i > 3) {
        i = 0;
    }
}

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
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList.add('modal__overlay--visible')
    emailjs.sendform(
        'service_gd0vyta',
        'template_9jek4bq',
        event.target,
        'user_VqSnwwutoSTNCLs6RtQpW'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList.add('modal__overlay--visible')
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert(
            "Apologies for the inconvenience. The email service is temporarily unavailable. Please contact me directly at daman0797@gmail.com"
        )
    })
}
/* ====== Send Email End ============= */

/* =========== Toggle Dark Mode ========== */
function toggleDark() {
    document.body.classList.toggle("dark-mode")
}
/* =========== Toggle Dark Mode End ========== */

/** Toggle Sidebar */
function openSideNav() {
    document.getElementById("sideNav").style.width = "100%";
}

function closeSideNav() {
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