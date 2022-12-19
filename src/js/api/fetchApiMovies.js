import axios from 'axios';

import { hiddenSpinner } from '../components/hiddenComponents/spinnerMode';
import { lengthCheck } from '../components/hiddenComponents/hiddenAllertMesage';

const API_KEY = '20e13b9a04a0b41c58cfa9dd598a635c';
const BASE_URL = 'https://api.themoviedb.org/3/';
const URL_TRENDING = 'trending/movie/day';
const URL_KEY = 'search/movie';
const URL_ID = 'movie';

const searchParams = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-US',
  page: 1,
  include_adult: false,
});

export class FetchApiMovies {
  constructor(moviesPerPage) {
    this.searchQuery = '';
    this.page = 1;
    this.moviesPerPage = moviesPerPage;
    this.loadedHits = 0;
  }
  async fetchWithPage(pageNumber) {
    const tmdbFirstMovieID = this.moviesPerPage * (pageNumber - 1);
    let currentId = tmdbFirstMovieID;

    let tmdbPages = [];
    while (currentId < pageNumber * this.moviesPerPage) {
      tmdbPages.push(Math.trunc(currentId / 20) + 1);
      currentId += 20;
    }

    let pageRequestPromises = tmdbPages.map(tmdbPageNumber => {
      const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        page: tmdbPageNumber,
        include_adult: false,
      });
      const url = `${BASE_URL}${URL_TRENDING}?${searchParams}`;
      return axios.get(url);
    });

    hiddenSpinner(false);
    try {
      const responses = await Promise.all(pageRequestPromises);

      const response = responses
        .map(response => response.data)
        .reduce((accumulatedResponse, response) => {
          accumulatedResponse.results = accumulatedResponse.results.concat(
            response.results
          );
          return accumulatedResponse;
        });

      response.results = response.results.slice(
        tmdbFirstMovieID % 20,
        (tmdbFirstMovieID % 20) + this.moviesPerPage
      );

      this.setQuery('');
      this.resetPage();
      this.setLoadedHits(response.total_pages);
      hiddenSpinner(true);

      lengthCheck(response.results.length);
      return response;
    } catch (error) {
      hiddenSpinner(true);
      return console.log(error);
    }
  }
  async fetchTrending() {
    hiddenSpinner(false);
    const url = `${BASE_URL}${URL_TRENDING}?${searchParams}`;

    try {
      const response = await axios.get(url);

      this.setQuery('');
      this.resetPage();
      this.setLoadedHits(response.total_pages);
      hiddenSpinner(true);

      lengthCheck(response.data.results.length);

      return response.data;
    } catch (error) {
      hiddenSpinner(true);
      return console.log(error);
    }
  }

  async fetchKey(query) {
    hiddenSpinner(false);
    const url = `${BASE_URL}${URL_KEY}?${searchParams}&query=${query}`;

    try {
      const response = await axios.get(url);

      this.setQuery(query);
      this.resetPage();
      this.setLoadedHits(response.total_pages);
      hiddenSpinner(true);

      lengthCheck(response.data.results.length);

      return response.data;
    } catch (error) {
      hiddenSpinner(true);
      return console.log(error);
    }
  }

  async fullFetch(id) {
    const url = `${BASE_URL}${URL_ID}/${id}?${searchParams}`;

    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }

  async fullFetchVideo(id) {
    const url = `${BASE_URL}${URL_ID}/${id}/videos?${searchParams}`;

    try {
      const response = await axios.get(url);
      let ids = [];
      let i = 0;

      response.data.results.forEach(element => {
        if (element.type === 'Trailer') {
          ids[i] = element.key;
          i += 1;
        }
      });

      return ids;
    } catch (error) {
      return console.log(error);
    }
  }

  incrementPage(nextPage) {
    this.page = nextPage;
  }

  resetPage() {
    this.page = 1;
  }

  getQuery() {
    return this.searchQuery;
  }

  setQuery(newQuery) {
    this.searchQuery = newQuery;
  }

  getLoadedHits() {
    return this.loadedHits;
  }

  setLoadedHits(hits) {
    this.loadedHits = hits;
  }
}
