import { refs } from '../../refs/refs';
import { FetchApiMovies } from '../../api/fetchApiMovies';
import { renderMovieListMarkup } from '../../templates/movieList';

const fetchApiMovies = new FetchApiMovies();

refs.form.addEventListener('submit', onSubmitForm);

export async function onSubmitForm(e) {
  e.preventDefault();

  const query = refs.formInput.value;
  const response = await fetchApiMovies.fetchKey(query);
  const movies = await response.results;

    refs.formInput.value = '';
    
  renderMovieListMarkup(movies);
}
