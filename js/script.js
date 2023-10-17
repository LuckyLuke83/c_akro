'use strict'

const navContainer = document.querySelector('.nav__container');
const navMenuOpen = document.querySelector('.nav__mobile-menu');
const navMenuClose = document.querySelector('.nav__mobile-close');

navMenuOpen.addEventListener('click', function() {
    navContainer.classList.add('nav__open');
})


navMenuClose.addEventListener('click', function() {
    // e.preventDefault();
    console.log("WORKING");
    navContainer.classList.remove('nav__open');
})
