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

// import { hiddenButton } from './js/components/hiddenComponents/hiddenFormButton';
// import { refs } from './js/refs/refs';
// import { movie__img } from './js/components/modalWindow/modalWindow';
import { visibleSingleMovieModal } from './js/components/hiddenComponents/hiddenSingleMovieMovieModal';

import './js/templates/developersModal';
import './js/templates/scroll';
import './js/templates/localStorage';
import './js/templates/firebase-registration';


import { addtListenersToModal } from './js/components/modalWindow/addMoviesToLiibrery';
const fetchApiMovies = new FetchApiMovies();
const data = fetchApiMovies.fetchTrending();
let currentPage = 1;

// visibleSingleMovieModal(true);

async function renderMovieList(data) {
  const response = await data;
  const movies = await response.results;

  renderMovieListMarkup(movies);

  (function () {
    const container = document.getElementById('tui-pagination-container');

    container.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    
    // console.log(movies);
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
let idsTreller = [];
document.querySelector('.gallery').addEventListener('click', e => {
  onClickPicture.onClickPicture;
  fetchApiMovies.fullFetch(e.target.id).then(x => {
    // console.log(x);
    renderMovieCard(x);

    closeButtonListener();
    clickBackdropListener();
    addtListenersToModal();
    clickTrellerButton();

    fetchApiMovies.fullFetchVideo(e.target.id).then(ids => {
      idsTreller = ids;
      // console.log(ids);
    });

    // document
    //   .querySelector('.btn-watch')
    //   .addEventListener('click', () =>
    //     localStorage.setItem(`${x.id}`, JSON.stringify(x))
    //   );
  });
});

export function listTrailer() {
  // console.log(idsTreller);
  appendMarkupTrailer(idsTreller[0]);
}

// hiddenButton();
renderMovieList(data);
