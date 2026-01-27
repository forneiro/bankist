'use strict';

//// Variables
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
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
const section1 = document.getElementById('section--1');
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});
