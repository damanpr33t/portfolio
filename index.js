// Select Items
const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.fa-arrow-right')
const prevBtn = document.querySelector('.fa-arrow-left')

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
})

let counter = 0
nextBtn.addEventListener("click", function() {
    counter ++
    Carousel()
})
prevBtn.addEventListener("click", function() {
    counter--
    Carousel()
})
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

let int = setInterval(blurring, 30)

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