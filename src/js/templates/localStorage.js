import { refs } from '../refs/refs';
import { renderMovieListMarkup } from './movieList';
import { FetchApiMovies } from "../api/fetchApiMovies";
import { renderMovieCard } from "./movieCard";



refs.queueButton.addEventListener('click', addFilmToQueueList);
refs.watchedButton.addEventListener('click', addFilmToWatchedList);

const fetchApiMovies = new FetchApiMovies();
 const renderFilm = fetchApiMovies.fetchTrending().then(movies => {
        console.log(movies.results);
    })


// WATCHED
let watchedFilms = [];
const STORAGE_KEY_WATCHED = "watched-films"

function addFilmToWatchedList() {
   
    watchedFilms.push(renderFilm)
    saveWatchedFilms();
}

function saveWatchedFilms() {
    localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(watchedFilms));
}


// QUEUE
let queueFilm = [];
const STORAGE_KEY_QUEUE = "queue-films"

function addFilmToQueueList() {
    queueFilm.push(renderFilm);
    saveQueueFilms()
}

function saveQueueFilms() {
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(queueFilm));
}

