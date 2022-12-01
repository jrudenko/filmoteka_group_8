import { refs } from '../../refs/refs';

export function visibleSingleMovieModal(bool) {
  if (bool) {
    refs.singleMovieModal.classList.remove('is-hidden');
    const closeSingleMovieModalButton = document.querySelector('#button-close');
    // closeSingleMovieModalButton.addEventListener('click', () => {
    //   refs.singleMovieModal.classList.add('is-hidden');
    // });
    window.addEventListener('keydown', onEscKeyPress);
    closeSingleMovieModalButton.addEventListener('click', () => {
      refs.singleMovieModal.classList.add('is-hidden');
    });
  } else if (!bool) {
    refs.singleMovieModal.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscKeyPress);
  }
}

//function onEscKeyPress(event) {
//  const ESC_KEY_CODE = 'Escape';
//  const isEscKey = event.code === ESC_KEY_CODE;
//
//  if (isEscKey) {
//    onCloseModal();
//  }
//}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    refs.singleMovieModal.classList.add('is-hidden');
  }
}
