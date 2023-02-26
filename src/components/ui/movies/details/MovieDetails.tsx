import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Cast} from '../../../../interfaces/creditsInterface';
import {MovieFull} from '../../../../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import {CastItem} from '../../../cast/CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export default function MovieDetails({movieFull, cast}: Props) {
  return (
    <View style={{marginHorizontal: 20}}>
      {/* Title */}
      <View style={{flexDirection: 'row'}}>
        {/* <Icon name="star-outline" color="grey" size={16} /> */}
        <Text> {movieFull.vote_average}</Text>

        <Text style={{marginLeft: 5}}>
          - {movieFull.genres.map(g => g.name).join(', ')}
        </Text>
      </View>
      {/* Synopsis */}
      <Text
        style={{
          color: 'black',
          fontSize: 23,
          marginTop: 10,
          fontWeight: 'bold',
        }}>
        Synopsis
      </Text>

      <Text style={{color: 'black', fontSize: 16}}>{movieFull.overview}</Text>

      {/* Budget */}
      <Text
        style={{
          color: 'black',
          fontSize: 23,
          marginTop: 10,
          fontWeight: 'bold',
        }}>
        budget
      </Text>
      <Text style={{color: 'black', fontSize: 18}}>
        {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
      </Text>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </View>
  );
}
