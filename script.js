'use strict';

// declaring variables for each class modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);

// to add modal by removing class hidden
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// to close modal by adding class hidden
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// calling eventListener to open modal function for each btn using loop
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

//   calling both eventListener to activate close function
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// if escape key pressed close modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
