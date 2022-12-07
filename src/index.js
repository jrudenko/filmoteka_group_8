import { FetchApiMovies } from './js/api/fetchApiMovies';
import { renderMovieListMarkup } from './js/templates/movieList';
import { renderMovieCard } from './js/templates/movieCard';
import * as onClickPicture from './js/components/modalWindow/modalWindow';
import { onSubmitForm } from './js/components/inputSearch/searchByName';
import Pagination from 'tui-pagination';
import {
  closeButtonListener,
  clickBackdropListener,
  clickTrellerButton,
} from './js/components/hiddenComponents/hiddenSingleMovieMovieModal';
import { appendMarkupTrailer } from './js/components/modalWindow/trailer';

import { theme } from './js/components/theme/theme';

import { visibleSingleMovieModal } from './js/components/hiddenComponents/hiddenSingleMovieMovieModal';
import './js/templates/firebase-registration';
import './js/templates/developersModal';
import './js/templates/scroll';
import './js/templates/localStorage';
import { addtListenersToModal } from './js/components/modalWindow/addMoviesToLiibrery';
const fetchApiMovies = new FetchApiMovies(21);
const data = fetchApiMovies.fetchWithPage(1);

let currentPageNumber = 1;

async function renderMovieList(data) {
  const response = await data;

  const movies = await response.results;

  renderMovieListMarkup(movies);

  (function () {
    const paginationContainer = document.getElementById(
      'tui-pagination-container'
    );

    paginationContainer.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );

    const paginator = new Pagination(paginationContainer, {
      page: currentPageNumber,
      totalItems: 400,
      itemsPerPage: 20,
      visiblePages: 5,
      usageStatistics: false,
    });
    paginator.on('afterMove', async event => {
      currentPageNumber = event.page;
      let paginatedMovies = await fetchApiMovies.fetchWithPage(event.page);

      renderMovieList(paginatedMovies);

      document.querySelector('.gallery').addEventListener('click', e => {
        console.log(e.target);
      });
    });
  })();
}
let idsTreller = [];
document.querySelector('.gallery').addEventListener('click', e => {
  onClickPicture.onClickPicture;
  fetchApiMovies.fullFetch(e.target.id).then(x => {
    renderMovieCard(x);

    closeButtonListener();
    clickBackdropListener();
    addtListenersToModal();
    clickTrellerButton();

    fetchApiMovies.fullFetchVideo(e.target.id).then(ids => {
      idsTreller = ids;
    });
  });
});

export function listTrailer() {
  appendMarkupTrailer(idsTreller[0]);
}

renderMovieList(data);
