import { refs } from '../../refs/refs';
import { visibleSingleMovieModal } from '../hiddenComponents/hiddenSingleMovieMovieModal';

refs.moviesList.addEventListener('click', onClickPicture);

export function onClickPicture(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  visibleSingleMovieModal(true);
  // refs.divBackdrop.classList.remove('is-hidden');
  // window.addEventListener('keydown', onKeyPress);
  // window.addEventListener('click', onClick);
}

// function onClose(evt) {
//   refs.divBackdrop.classList.add('is-hidden');
// }

// function onKeyPress(evt) {
//   if (evt.code === 'Escape') {
//     refs.divBackdrop.classList.add('is-hidden');
//     window.removeEventListener('keydown', onKeyPress);
//   }
// }

// function onClick(evt) {
//   if (evt.target.nodeName !== 'IMG') {
//     refs.divBackdrop.classList.add('is-hidden');
//   }
// }
