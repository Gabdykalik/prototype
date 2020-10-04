let switcher = document.getElementById("switch")
let gif = document.querySelector('.gif')

switcher.addEventListener('click', ()=> {
    gif.classList.toggle('opacity')
})