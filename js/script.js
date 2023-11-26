'use strict'

const navContainer = document.querySelector('.nav__container');
const navMenuOpen = document.querySelector('.nav__mobile-menu');
const navMenuClose = document.querySelector('.nav__mobile-close');

const arturGrafik = document.querySelectorAll('.coach__timetable-btn');
const arturClass = document.querySelector('.coach__timetable-class')
const grafikContent = document.querySelectorAll('.coach__schedule-content');

const advanceLevels = document.querySelector('.advance__level');

const advanceTabs = document.querySelectorAll('.advance__level-item');
const advanceItems = document.querySelectorAll('.advance__description-item');

const team = document.querySelector('.coach__container')
// const coach = document.querySelectorAll('.coach__btn');

///
navMenuOpen.addEventListener('click', function() {
    navContainer.classList.add('nav__open');
})

///
navMenuClose.addEventListener('click', function() {
    navContainer.classList.remove('nav__open');
})

///
team.addEventListener('click', function(e) {
    const clicked = e.target.closest('.coach__btn');
    // Guard clause
    if (!clicked) return;

    advanceItems.forEach(t => t.classList.remove('advance__description-active'));
    advanceTabs.forEach((t,i) => t.classList.remove(`advance__level-${i+1}-active`));

    document.getElementById(`${clicked.dataset.tab}`).classList.toggle('coach__timetable-active');
})

///
arturClass.addEventListener('click', function(e) {
    const clicked = e.target.closest('.coach__timetable-btn');
    // Guard clause
    if (!clicked) return;

    arturGrafik.forEach(b => b.classList.remove('coach__timetable-btn-active'));
    grafikContent.forEach(tab =>tab.classList.remove('coach__schedule-content-active'));

    clicked.classList.add('coach__timetable-btn-active');

    document
    .getElementById(`${clicked.dataset.tab}`)
    .classList.add('coach__schedule-content-active');
})

advanceLevels.addEventListener('click', function(e) {
    const clicked = e.target.closest('.advance__level-item');
    const clickedDescription = document.querySelector(`.advance__description-${clicked.dataset.tab}`);
   
    advanceTabs.forEach((t,i) => t.classList.remove(`advance__level-${i+1}-active`));

    // Guard clause
    if (!clicked) return;

    // if (clicked.classList.contains(`advance__level-${clicked.dataset.tab}-active`)) {
        
    // }

    if (clickedDescription.classList.contains('advance__description-active')) {
        clickedDescription.classList.remove('advance__description-active');
        clicked.classList.remove(`advance__level-${clicked.dataset.tab}-active`)
        return;
    }

    clicked.classList.add(`advance__level-${clicked.dataset.tab}-active`);
    
    advanceItems.forEach(t => t.classList.remove('advance__description-active'));

    // clicked.classList.add('advance__description-active');

    document.querySelector(`.advance__description-${clicked.dataset.tab}`).classList.toggle('advance__description-active');

})


