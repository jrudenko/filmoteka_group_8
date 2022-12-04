import { refs } from '../refs/refs';
// import noPosterImage from '../../images/header/no-poster.jpeg';
import genres from '../genres.json';

let imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
// let noPosterImg = noPosterImage;

export function renderMovieListMarkup(movies) {
  refs.moviesList.innerHTML = '';
  const moviesList = movies
    .map(movie => {
      if (movie.poster_path === null) {
        imgBaseUrl = '';
        // movie.poster_path = noPosterImg;
      } else {
        imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
      }
      return moviesListTemplate(movie);
    })
    .join('');

  refs.moviesList.insertAdjacentHTML('beforeend', moviesList);
}

function moviesListTemplate({
  poster_path,
  title,
  genre_ids,
  vote_average,
  release_date,
  id,
}) {
  const genresText = parseGenres(genre_ids);
  return `
        <li class="movie__item">
          <a hres="#" class="movie__link">
             <div class="thumb"> 
              <img class="movie__img" id="${id}"
              width="500"
              loading="lazy"
              alt="${title}"
              src="${imgBaseUrl}${poster_path}" 
              />
            </div>
            <div class="movie__descr">
            <p class="movie__title">${title}</p>
            
            <ul class="movie__descr--orange">
             <li class="card__genre movie__genre"></li>
             <li class="movie__genre">${genresText} | ${release_date.substr(
    0,
    4
  )}</li>
             <li class="movie__vote">${vote_average.toFixed(1)}</li>
            </ul>
            </div>
          </a>
        </li>
  `;
}

function parseGenres(genresArray) {
  let genresNames = [];

  for (let genre of genresArray) {
    const genreOfMovie = genres.find(movie => movie.id === genre);
    genresNames.push(' ' + genreOfMovie.name);
  }

  if (genresNames.length > 3) {
    genresNames = genresNames.slice(0, 2);
    genresNames.splice(2, 0, ' Other');
  }

  if (genresNames.length === 0) {
    genresNames = 'No genres';
  }

  return genresNames;
}
