'use strict';

//modal, overlay, close, show-modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    console.log(e.key);
  }
});
