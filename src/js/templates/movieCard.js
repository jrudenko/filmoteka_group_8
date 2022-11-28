import { refs } from '../refs/refs';
import noPosterImage from '../../images/header/no-poster.jpeg';

let imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
const noPosterImg = noPosterImage;

export function renderMovieCard(movie) {
  refs.modal.innerHTML = '';

  if (movie.poster_path === null) {
    imgBaseUrl = '';
    movie.poster_path = noPosterImg;
  } else {
    imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  }

  movieModal = movieCardTemplate(movie);

  refs.modal.insertAdjacentHTML('beforeend', movieModal);
}

function movieCardTemplate({
  title,
  vote_average,
  vote_count,
  original_title,
  popularity,
  overview,
  poster_path,
}) {
  return `
   <div class="film">
    <div class="film__box">
      <img class="film__img" src="${imgBaseUrl}${poster_path}" alt="" width="500" />
    </div>

    <div class="film__wrapper">
      <h2 class="film__name">${title}</h2>

      <ul class="film__stats">
        <li class="film__stat">
          <span class="stat__name">Vote / Votes</span>
          <span class="stat__value">
            <span class="stat__value stat__value--active">${vote_average}</span>
            /
            <span class="stat__value stat__value--noactive">${vote_count}</span>
          </span>
        </li>
        <li class="film__stat">
          <span class="stat__name">Popularity</span>
          <span class="stat__value">${popularity}</span>
        </li>
        <li class="film__stat">
          <span class="stat__name">Original Title</span>
          <span class="stat__value">${original_title}</span>
        </li>
        <li class="film__stat">
          <span class="stat__name">Genre</span>
          <span class="stat__value">Western</span>
        </li>
      </ul>

      <p class="film__about">About</p>
      <p class="film__description">${overview}</p>

      <div class="btn__wrapper">
        <button class="btn btn--active" id="watched" type="button">Add to watched</button>
        <button class="btn" id="queue" type="button">Add to queue</button>
      </div>
    </div>
  </div>
  `;
}
