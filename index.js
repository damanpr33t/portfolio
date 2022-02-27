// Select Items
const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.fa-arrow-right')
const prevBtn = document.querySelector('.fa-arrow-left')

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