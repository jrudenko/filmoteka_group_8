import { refs } from '../../refs/refs';

export function appendMarkupTrailer(key) {
  console.log(key);
  refs.treilerContainer.innerHTML = `
  <iframe class="trailer__iframe" width="700" height="500" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay="1"; controls="1"; clipboard-write; encrypted-media; gyroscope="1"; picture-in-picture"; allowfullscreen="1"; enablejsapi="1"></iframe>
  `;
}
