import { refs } from '../../refs/refs';

function onCloseVideo() {
  refs.treilerContainer.innerHTML = '';

  window.removeEventListener('keydown', onEscKeyPress);
 
  const body = document.body
  body.style.overflowY = ''

  window.removeEventListener('click', screenBlock);

  refs.treilerButtonClose.removeEventListener('click', onCloseButtonPress);
  refs.treilerButtonClose.classList.add('is-hidden');
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    console.log('Stoped video');
    onCloseVideo();
  }
}

function onCloseButtonPress() {
  onCloseVideo();
}

export function appendMarkupTrailer(key) {
  window.addEventListener('keydown', onEscKeyPress);

  refs.treilerButtonClose.classList.remove('is-hidden');
  refs.treilerButtonClose.addEventListener('click', onCloseButtonPress);

  refs.treilerContainer.innerHTML = `
  <iframe class="trailer__iframe" width="700" height="500" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="1" allow="accelerometer;  controls="1"; clipboard-write; encrypted-media; gyroscope="1"; picture-in-picture"; allowfullscreen="1"; enablejsapi="1"></iframe>
  `;

  window.addEventListener('click', screenBlock);
}

function screenBlock(evt) {
  if (appendMarkupTrailer) {
    refs.singleMovieModal.classList.add('is-hidden');
  }
}
