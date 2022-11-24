
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
        


const next = document.querySelector('.opinions__next'),
    prev = document.querySelector('.opinions__previous'),
    dots = document.querySelectorAll('.opinions__dot'),
    opinions = document.querySelectorAll('.opinion');

let index = 1;

changeOpinion();
    
function changeOpinion (n = 0) {
    opinions.forEach(opinion => opinion.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));


    index += n;


    if(index > opinions.length) {
        index = 1;
    } 
    else if(index < 1 ) {
        index = opinions.length;
    }
    opinions[index - 1].classList.add('active');
    dots[index - 1].classList.add('active');


}

next.addEventListener('click', (e) => changeOpinion(1));
prev.addEventListener('click', (e) => changeOpinion(-1));



const modalBtns = document.querySelectorAll('.modal-btn'),
    modalWindow = document.querySelector('.modal');

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalWindow.classList.toggle('active');
        });
    });
