'use strict'

const navContainer = document.querySelector('.nav__container');
const navMenuOpen = document.querySelector('.nav__mobile-menu');
const navMenuClose = document.querySelector('.nav__mobile-close');

const arturGrafik = document.querySelectorAll('.grafik__class-akro');
const arturClass = document.querySelector('.grafik__class')
const grafikContent = document.querySelectorAll('.grafik__plan-content');

const team = document.querySelector('.grafik__coach')
const coach = document.querySelectorAll('.grafik__name');

navMenuOpen.addEventListener('click', function() {
    navContainer.classList.add('nav__open');
})


navMenuClose.addEventListener('click', function() {
    navContainer.classList.remove('nav__open');
})

arturClass.addEventListener('click', function(e) {
    const clicked = e.target.closest('.grafik__class-akro');
    // Guard clause
    if (!clicked) return;

    arturGrafik.forEach(b => b.classList.remove('active'));
    grafikContent.forEach(tab =>tab.classList.remove('grafik__plan-content-active'));

    clicked.classList.add('active');

    document
    .getElementById(`${clicked.dataset.tab}`)
    .classList.add('grafik__plan-content-active');
})

team.addEventListener('click', function(e) {
    const clicked = e.target.closest('.grafik__name');
    console.log(clicked.dataset.tab);

    document.getElementById(`${clicked.dataset.tab}`).classList.toggle('active');
})
