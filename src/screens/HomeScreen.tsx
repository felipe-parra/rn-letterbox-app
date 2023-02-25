import React, {useEffect} from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {styles} from '../styles/mainStyles';
import useMovies from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePoster from '../components/ui/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import Discover from '../components/ui/movies/categories/Discover';
import Popular from '../components/ui/movies/categories/Popular';
import Upcoming from '../components/ui/movies/categories/Upcoming';

const {width: windowWidth} = Dimensions.get('window');

export default function HomeScreen() {
  const {isLoading, isError, movies, getMovies} = useMovies();

  const {top} = useSafeAreaInsets();
  if (isLoading) {
    <View style={styles.view}>
      <Text style={{color: 'black'}}>Loading...</Text>
    </View>;
  }
  if (isError) {
    <View style={styles.view}>
      <Text style={{color: 'black'}}>Error</Text>
    </View>;
  }
  useEffect(() => {
    getMovies('/now_playing');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <View style={{marginTop: 20 + top}}>
        {/* Main Carousel */}
        {movies.length > 0 && (
          <View style={{height: 440}}>
            <Carousel
              data={movies}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
            />
          </View>
        )}
        {/* Small Carousels */}
        <Discover />
        <Popular />
        <Upcoming />
      </View>
    </ScrollView>
  );
}
