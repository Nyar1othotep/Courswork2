'use strict'

// Бургер
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const bodyEl = document.body;
burger.addEventListener('click', function() {
    if (!burger.classList.contains('active')) {
        burger.classList.add('active');
    } else {
        burger.classList.remove('active');
    }

    if (!menu.classList.contains('active')) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }

    if (!bodyEl.classList.contains('active')) {
        bodyEl.classList.add('active');
    } else {
        bodyEl.classList.remove('active');
    }
})

menu.addEventListener('click', function() {
    burger.classList.remove('active');
    menu.classList.remove('active');
    bodyEl.classList.remove('lock');
})

// Плавный скролл

const menuLinks = document.querySelectorAll('.menu__link[data-goto], .presentation__button[data-goto]');
if (menuLinks.length > 0) {
    for (let menuLink of menuLinks) {
        menuLink.addEventListener("click", onMenuLinkClick);
    };

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}