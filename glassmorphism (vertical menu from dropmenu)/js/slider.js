const btnNext = document.querySelector('.slider-next')
const btnPrev = document.querySelector('.slider-prev')
const slider = document.querySelector('.slider')

let offset = 0;

btnNext.addEventListener('click', () => {
    offset -= 45;
    slider.style.transform = 'rotate(' + offset + 'deg)'
})
btnPrev.addEventListener('click', () => {
    offset += 45;
    slider.style.transform = 'rotate(' + offset + 'deg)'
})

slider.addEventListener('mouseover', (event) => {
    slider.style.transform = 'rotate(' + event.pageY / 3 + 'deg)'
})

