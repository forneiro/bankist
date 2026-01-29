'use strict';

//// Variables
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');

// Scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

const linksContainer = document.querySelector('.nav__links');

// Hover
const links = document.querySelectorAll('.nav__link');
///////////////////////////////////////
// Modal window
const showModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnShowModal.forEach(btn => {
  btn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

btnCloseModal.addEventListener('click', showModal);
overlay.addEventListener('click', showModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') showModal();
});

///////////////////////////////////////
// Smooth behavior
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

linksContainer.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    !e.target.classList.contains('nav__link') ||
    e.target.classList.contains('nav__link--btn')
  )
    return;

  const section = e.target.getAttribute('href');
  document.querySelector(`${section}`).scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Hover links
links.forEach(link => {
  link.addEventListener('mouseover', function (e) {
    const parent = link.closest('.nav__links');
    parent.querySelectorAll('.nav__link').forEach(el => {
      if (el !== e.target) el.style.opacity = 0.5;
    });
  });

  link.addEventListener('mouseout', function (e) {
    const parent = link.closest('.nav__links');
    parent.querySelectorAll('.nav__link').forEach(el => {
      el.style.opacity = 1;
    });
  });
});
