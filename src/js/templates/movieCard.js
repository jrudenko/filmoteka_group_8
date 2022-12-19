import { refs } from '../refs/refs';

let imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

export function renderMovieCard(movie) {
  refs.divBackdrop.innerHTML = '';

  const movieModal = movieCardTemplate(movie);

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
  genres,
  id,
}) {
  let genreses = '';
  genres.forEach(element => {
    genreses += element.name;
    genreses += ' ';
  });
  return `
    <div class="singleMovieModal__container">
    <button class="singleMovieModal__button-close" type="button" id="button-close">
      <svg  class="singleMovieModal__button-close-img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
        viewBox="0 0 16 16">
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
      </svg>
    </button>

    <div class="singleMovieModal__flex-container">
      <img class="singleMovieModal__picture js-image" src=${imgBaseUrl}${poster_path} alt="${title}" data-action="${id}" />

      <div class="singleMovieModal__description-container">
        <h2 class="singleMovieModal__title">${title}</h2>
        <ul class="singleMovieModal__description-list">
          <li class="singleMovieModal__description-item">
            <p class="singleMovieModal__description-text">Vote / Votes</p>
            <p class="singleMovieModal__description-span">
              <span class="singleMovieModal__description-insert">${vote_average}</span>/${vote_count}
            </p>
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
            <p class="singleMovieModal__description-span">${genreses}</p>
          </li>
        </ul>
          
        <p class="singleMovieModal__about singleMovieModal__about-more-button-active">
          ${overview}
        </p>
        <ul class="singleMovieModal-add__list">
          <li class="singleMovieModal-add__item">
            <button class="singleMovieModal-add__button js-addWatched" type="button">
              Add to Watched
            </button>
            <button class="singleMovieModal-add__button js-deleteWatched hide" type="button">
              DELETE Watched
            </button>
          </li>
          <li class="singleMovieModal-add__item">
            <button class="singleMovieModal-add__button js-addQueue" type="button">
              Add to queue
            </button>
            <button class="singleMovieModal-add__button js-deleteQueue hide" type="button">
              DELETE queue
            </button>
          </li>
          <li class="singleMovieModal-add__item">
            <button class="singleMovieModal-add__trailer" type="button">
              Watch trailer movie
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
    `;
}
