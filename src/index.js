import { FetchApiMovies } from './js/api/fetchApiMovies';
import { renderMovieListMarkup } from './js/templates/movieList';
import { onSubmitForm } from './js/components/inputSearch/searchByName';
import { hiddenButton } from './js/components/hiddenComponents/hiddenFormButton';

const fetchApiMovies = new FetchApiMovies();
const data = fetchApiMovies.fetchTrending();

async function renderMovieList(data) {
  const response = await data;
  const movies = await response.results;

  renderMovieListMarkup(movies);
}

hiddenButton();
renderMovieList(data);
