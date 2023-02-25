import {useState} from 'react';
import {movieApi} from '../api/movie.api';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

export default function useMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async (query: string) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const resp = await movieApi.get<MovieDBNowPlaying>(query);
      setMovies(resp.data.results);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    isError,
    movies,
    getMovies,
  };
}
