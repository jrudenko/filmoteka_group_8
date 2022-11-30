// import { refs } from '../refs/refs';

// refs.queueButton.addEventListener('click', addFilmToQueueList);
// refs.watchedButton.addEventListener('click', addFilmToWatchedList);

// // WATCHED
// let watchedFilms = [];
// const STORAGE_KEY_WATCHED = "watched-films"

// function addFilmToWatchedList() {
//     saveWatchedFilms();
//     watchedFilms.push(movie);
//     showWatchedFilms();
// }

// function saveWatchedFilms(movie) {
//     localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(watchedFilms));
// }

// function showWatchedFilms() {
//     const watched = localStorage.getItem(STORAGE_KEY_WATCHED);
//       let watchedFilmsMarkup = '';
//     JSON.parse(watched).forEach(object => {
//       watchedFilmsMarkup +=
//         '<li class="library__list-item">' + object.element + '</li>';
//     });

//     refs.libraryList.innerHTML = watchedFilmsMarkup;
// }

// // QUEUE
// let queueFilm = [];
// const STORAGE_KEY_QUEUE = "queue-films"

// function addFilmToQueueList() {
//     saveQueueFilms();
//     queueFilm.push(movie);
//     showQueueFilms();
// }

// function saveQueueFilms(movie) {
//     localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(queueFilm));
// }

// function showQueueFilms() {
//     const queue = localStorage.getItem(STORAGE_KEY_QUEUE);
//       let queueFilmsMarkup = '';
//     JSON.parse(queue).forEach(object => {
//       queueFilmsMarkup +=
//         '<li class="library__list-item">' + object.element + '</li>';
//     });

//     refs.libraryList.innerHTML = queueFilmsMarkup;
// }
