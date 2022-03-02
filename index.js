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

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0

let int = setInterval(blurring, 7)

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