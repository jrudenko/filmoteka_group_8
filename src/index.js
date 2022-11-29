import { FetchApiMovies } from './js/api/fetchApiMovies';
import { renderMovieListMarkup } from './js/templates/movieList';
// import { onSubmitForm } from './js/components/inputSearch/searchByName';
// import Pagination from 'tui-pagination';

import { hiddenButton } from './js/components/hiddenComponents/hiddenFormButton';
import { refs } from './js/refs/refs';
// import { movie__img } from './js/components/modalWindow/modalWindow';


import './js/templates/developersModal';
import './js/templates/scroll';

const fetchApiMovies = new FetchApiMovies();
const data = fetchApiMovies.fetchTrending();
let currentPage = 1;

async function renderMovieList(data) {
  const response = await data;
  const movies = await response.results;

  renderMovieListMarkup(movies);

  (function () {
    const container = document.getElementById('tui-pagination-container');
    console.log(movies);
    const instance = new Pagination(container, {
      page: currentPage,
      totalItems: 400,
      itemsPerPage: 20,
      visiblePages: 5,
      usageStatistics: false,
    });
    instance.on('afterMove', data => {
      currentPage = data.page;
      fetchApiMovies.fetchWithPage(data.page).then(x => renderMovieList(x));
      document.querySelector('.gallery').addEventListener('click', e => {
        console.log(e.target);
      });
    });
  })();
}

hiddenButton();
renderMovieList(data);


