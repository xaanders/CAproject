
const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('_active');
    menuBtn.classList.toggle('_active');
    body.classList.toggle('of-hidden');
    
})