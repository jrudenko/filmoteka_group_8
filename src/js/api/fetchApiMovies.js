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
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.loadedHits = 0;
  }
  async fetchWithPage(pageNumber) {
    hiddenSpinner(false);
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      language: 'en-US',
      page: pageNumber,
      include_adult: false,
    });

    const url = `${BASE_URL}${URL_TRENDING}?${searchParams}`;
    console.log(url);
    try {
      const response = await axios.get(url);
      this.setQuery('');
      this.resetPage();
      this.setLoadedHits(response.data.total_pages);
      hiddenSpinner(true);

      lengthCheck(response.data.results.length);

      return response.data;
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
      this.setLoadedHits(response.total_pages); // console.log(response.data);
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
    hiddenSpinner(false);
    const url = `${BASE_URL}${URL_ID}/${id}?${searchParams}`;

    try {
      const response = await axios.get(url);
      hiddenSpinner(true);

      lengthCheck(response.data.results.length);

      return response.data;
    } catch (error) {
      hiddenSpinner(true);
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
