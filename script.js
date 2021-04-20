'use-strict'

const nextBtn = document.querySelector('.btn--next');
const prevBtn = document.querySelector('.btn--back');
const lines = document.querySelectorAll('.jsline');


let counter = 0;
console.log(counter)

function setBtn() {
    if (counter === 0) {
        //disable prev btn
        prevBtn.style.backgroundColor = '#ccc'
    } else {
        prevBtn.style.backgroundColor = 'rgb(152, 35, 230)'
    }
    if (counter === 3) {
        // disable next btn
        nextBtn.style.backgroundColor = '#ccc'
    } else {
        nextBtn.style.backgroundColor = 'rgb(152, 35, 230)'

    }
}
setBtn()

nextBtn.addEventListener('click', function () {
    if (counter === 3) return
    lines[counter].classList.remove('notselected')
    lines[counter].classList.add('selectline')
    counter++
    setBtn()
})

prevBtn.addEventListener('click', function () {
    if (counter === 0) return
    counter--
    lines[counter].classList.remove('selectline')
    lines[counter].classList.add('notselected')
    setBtn()
})