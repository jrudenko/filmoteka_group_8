import { FetchApiMovies } from '../../api/fetchApiMovies';
import cardTpl from '../../components/modalWindow/cardLibrary.hbs';
const fetchApiMovies = new FetchApiMovies();
const refs = {
  watchList: document.querySelector('.js-watchList'),
  queueList: document.querySelector('.js-queueList'),
  btnWatch: document.querySelector('.js-watchBtn'),
  btnQueue: document.querySelector('.js-queueBtn'),
  libContainer: document.querySelector('.js-libCont'),
};

class PaintLibrery {
  constructor() {}

  listeners = () => {
    refs.btnWatch.addEventListener('click', this.showWatchList);
    refs.btnQueue.addEventListener('click', this.showQueueList);
  };

  showWatchList = () => {
    refs.queueList.classList.add('is-hidden');
    refs.watchList.classList.remove('is-hidden');
    if (localStorage.getItem('moviesWatched') === null) {
      refs.libContainer.innerHTML = `<h2 class ='librery-title'> Hi.Сhoose a movie on the home page to watch </h2>`;
      return;
    }

    refs.libContainer.innerHTML = '';
    const movies = JSON.parse(localStorage.getItem('moviesWatched'));
    return Promise.all(movies.map(id => fetchApiMovies.fullFetch(id))).then(
      this.paintWatchCards
    );
  };

  showQueueList = () => {
    refs.watchList.classList.add('is-hidden');
    refs.queueList.classList.remove('is-hidden');
    if (localStorage.getItem('moviesQueue') === null) {
      refs.libContainer.innerHTML = `<h2 class ='librery-title'> Hi.Сhoose a movie on the home page to watch </h2>`;
      return;
    }

    refs.libContainer.innerHTML = '';

    const movies = JSON.parse(localStorage.getItem('moviesQueue'));
    return Promise.all(movies.map(id => fetchApiMovies.fullFetch(id))).then(
      this.paintQueueCards
    );
  };

  paintWatchCards = response => {
    refs.watchList.innerHTML = cardTpl(response);
  };

  paintQueueCards = response => {
    refs.queueList.innerHTML = cardTpl(response);
  };

  initListeners = () => {
    this.listeners();
  };
}

const paintLibrery = new PaintLibrery();
paintLibrery.initListeners();
