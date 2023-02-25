import {MOVIE_API_KEY} from '@env';
import axios from 'axios';

export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: MOVIE_API_KEY,
    language: 'en-MX',
  },
});
