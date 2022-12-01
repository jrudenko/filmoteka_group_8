import { refs } from '../refs/refs';
import noPosterImage from '../../images/header/no-poster.jpeg';

let imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
const noPosterImg = noPosterImage;

export function renderMovieCard(movie) {
  refs.divBackdrop.innerHTML = '';

  if (movie.poster_path === null) {
    imgBaseUrl = '';
    movie.poster_path = noPosterImg;
  } else {
    imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  }

  movieModal = movieCardTemplate(movie);
  
  refs.divBackdrop.insertAdjacentHTML('beforeend', movieModal);
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
  <div class="singleMovieModal__container">
      <img class="singleMovieModal__picture" src="${imgBaseUrl}${poster_path}" alt="" />

    <h2 class="singleMovieModal__title">${title}</h2>
    <ul class="singleMovieModal__description-list">
      <li class="singleMovieModal__description-item">
        <p class="singleMovieModal__description-text">Vote / Votes</p>
        <p class="singleMovieModal__description-span"><span class="rating">${vote_average}</span> / ${vote_count}</p>
      </li>
      <li class="singleMovieModal__description-item">
        <p class="singleMovieModal__description-text">Popularity</p>
        <p class="singleMovieModal__description-span">${popularity}</p>
      </li>
      <li class="singleMovieModal__description-item">
        <p class="singleMovieModal__description-text">Original Title</p>
        <p class="singleMovieModal__description-span">${original_title}</p>
      </li>
      <li class="singleMovieModal__description-item">
        <p class="singleMovieModal__description-text">Genre</p>
        <p class="singleMovieModal__description-span">Western</p>
      </li>
    </ul>
    <p class="singleMovieModal__about">
      Four of the West’s most infamous outlaws assemble to steal a huge stash of
      gold from the most corrupt settlement of the gold rush towns. But not all
      goes to plan one is killed and the other three escapes with bags of gold
      hide out in the abandoned gold mine where they happen across another gang
      of three – who themselves were planning to hit the very same bank! As
      tensions rise, things go from bad to worse as they realise the bags of
      gold are filled with lead... they’ve been double crossed – but by who and
      how?
    </p>
    <ul class="singleMovieModal-add__list">
      <li class="singleMovieModal-add__item">
        <button class="singleMovieModal-add__button  btn-watch" type="button">
          add to Watched
        </button>
      </li>
      <li class="singleMovieModal-add__item">
        <button class="singleMovieModal-add__button"  type="button">
          add to queue
        </button>
      </li>
    </ul>
      
    </div>
  `;
}
/*
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
*/