
const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('_active');
    menuBtn.classList.toggle('_active');
    body.classList.toggle('of-hidden');
    
})

const questionParents = document.querySelectorAll('.question__item');
const questions = document.querySelectorAll('.question__item .question');

questions.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        if(e.target === item) {
            questionParents[i].classList.toggle('active');
        }
    });
});
        


