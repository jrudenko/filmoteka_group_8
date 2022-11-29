import { FetchApiMovies } from './js/api/fetchApiMovies';
import { renderMovieListMarkup } from './js/templates/movieList';
import { onSubmitForm } from './js/components/inputSearch/searchByName';
import { hiddenButton } from './js/components/hiddenComponents/hiddenFormButton';
import { movie__img } from './js/components/modalWindow/modalWindow';

const fetchApiMovies = new FetchApiMovies();
const data = fetchApiMovies.fetchTrending();

async function renderMovieList(data) {
  const response = await data;
  const movies = await response.results;

  renderMovieListMarkup(movies);
}

hiddenButton();
renderMovieList(data);
