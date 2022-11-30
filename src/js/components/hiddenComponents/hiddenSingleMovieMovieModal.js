import { refs } from '../../refs/refs';

export function visibleSingleMovieModal(bool) {
  if (bool) {
    refs.singleMovieModal.classList.remove('is-hidden');
    refs.closeSingleMovieModalButton.addEventListener('click', () => {
      refs.singleMovieModal.classList.add('is-hidden');
    });
  } else if (!bool) {
    refs.singleMovieModal.classList.add('is-hidden');
  }
}
