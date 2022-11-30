import { refs } from '../../refs/refs';

export function visibleSingleMovieModal(bool) {
  if (bool) {
    refs.singleMovieModal.classList.remove('is-hidden');
    refs.closeSingleMovieModalButton.addEventListener('click', () => {
      refs.singleMovieModal.classList.add('is-hidden');
    });
    window.addEventListener('keydown', onEscKeyPress);
  } else if (!bool) {
    refs.singleMovieModal.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscKeyPress);
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    refs.singleMovieModal.classList.add('is-hidden');
  }
}
