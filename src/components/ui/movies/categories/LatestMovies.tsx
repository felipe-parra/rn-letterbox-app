import React, {useEffect} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import useMovies from '../../../../hooks/useMovies';
import HorizontalSlider from '../../HorizontalSlider';

export default function LatestMovies() {
  const {isLoading, isError, movies, getMovies} = useMovies();
  useEffect(() => {
    getMovies('/latest');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) {
    return <ActivityIndicator size="large" color="red" />;
  }
  if (isError) {
    return <Text>Error</Text>;
  }

  return <HorizontalSlider movies={movies} title={'LatestMovies'} />;
}
