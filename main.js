const openBtn = document.querySelector('.mobile-menu-open-btn');
const closeMobileMenuBtn = document.querySelector('.mobile-menu-close-btn');
const menu = document.querySelector('.mobile-menu');

const heroButton = document.querySelector('.hero-button');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close-btn')

heroButton.addEventListener('click', function () {
    backdrop.classList.add('is-open');
});

closeBtn.addEventListener('click', function () {
    backdrop.classList.remove('is-open');
});

openBtn.addEventListener('click', function () {
    menu.classList.add('is-open');
});

closeMobileMenuBtn.addEventListener('click', function () {
    menu.classList.remove('is-open');
});
  