import { refs } from '../../refs/refs';
import { listTrailer } from '../../../index';

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.singleMovieModal.classList.add('is-hidden'); 
  const body = document.body;
  body.style.overflowY = '';
}

export function visibleSingleMovieModal(bool) {
  if (bool) {
    refs.singleMovieModal.classList.remove('is-hidden');
    
    const body = document.body;
    body.style.overflowY = 'hidden';

    window.addEventListener('keydown', onEscKeyPress);
  } else if (!bool) {
    onCloseModal();
  }
}

export function closeButtonListener() {
  const closeSingleMovieModalButton = document.querySelector('#button-close');
  closeSingleMovieModalButton.addEventListener('click', () => {
    onCloseModal();
  });
}
export function clickBackdropListener() {
  refs.moviesBackdrop.addEventListener('click', onBackdropClick);
}

export function clickTrellerButton() {
  const trailerButton = document.querySelector(
    '.singleMovieModal-add__trailer'
  );
  trailerButton.addEventListener('click', () => {
    listTrailer();
    window.removeEventListener('keydown', onEscKeyPress);
  refs.singleMovieModal.classList.add('is-hidden'); 
  });
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
