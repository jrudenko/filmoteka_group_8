export const refs = {
  moviesList: document.querySelector('.filmoteka_list'),
  form: document.querySelector('.heaer-searchform__form'),
  formInput: document.querySelector('.header-searchform__input'),
  formButton: document.querySelector('.header-searchform__button'),
  spinner: document.querySelector('.spinner__container'),
  // divBackdrop: document.querySelector('.backdrop'),
  divBackdrop: document.querySelector('#modalSingleMovie'),
  buttonlose: document.querySelector('.singleMovieModal__button-close'),
  alertMessage: document.querySelector('.header__warning-text'),

  watchedButton: document.querySelector('button[data-action="addToWatched"]'),
  queueButton: document.querySelector('button[data-action="addToQueue"]'),
  // libraryList: document.querySelector('.library_list'),

  closeSingleMovieModalButton: document.querySelector(
    '.singleMovieModal__button-close'
  ),
  singleMovieModal: document.querySelector('#modalSingleMovie'),
};
