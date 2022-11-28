import { refs } from '../../refs/refs';

export function hiddenSpinner(mode) {
  if (mode) {
    refs.spinner.classList.add('is-hidden');
  } else if (!mode) {
    refs.spinner.classList.remove('is-hidden');
  }
}
