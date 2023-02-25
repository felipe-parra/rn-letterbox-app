import React, {useEffect} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import useMovies from '../../../../hooks/useMovies';
import HorizontalSlider from '../../HorizontalSlider';

export default function Discover() {
  const {isLoading, isError, movies, getMovies} = useMovies();
  useEffect(() => {
    getMovies('/top_rated');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) {
    return <ActivityIndicator size="large" color="red" />;
  }
  if (isError) {
    return <Text>Something wen't wrong</Text>;
  }

  return <HorizontalSlider movies={movies} title={'Discover'} />;
}
