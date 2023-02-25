import React from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {Movie} from '../../interfaces/movieInterface';
import MoviePoster from './MoviePoster';
const {height: windowHeight} = Dimensions.get('window');
interface Props {
  title: string;
  movies: Movie[];
}

export default function HorizontalSlider({title, movies}: Props) {
  if (movies.length === 0) {
    return null;
  }
  return (
    <View style={{backgroundColor: '#fefefe', height: windowHeight / 3}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 30,
          marginHorizontal: 8,
        }}>
        {title}
      </Text>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <View>
            <MoviePoster movie={item} width={140} height={200} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
      />
    </View>
  );
}
