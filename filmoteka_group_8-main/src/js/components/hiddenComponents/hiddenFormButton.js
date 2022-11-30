import { refs } from '../../refs/refs';

export function hiddenButton() {
  refs.formInput.addEventListener('input', event => {
    if (event.target.value.length !== 0) {
      refs.formButton.classList.remove('is-hidden');
    } else {
      refs.formButton.classList.add('is-hidden');
    }
  });
}
