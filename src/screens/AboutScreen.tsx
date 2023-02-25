import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {styles} from '../styles/mainStyles';

export default function AboutScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.view}>
      <Text style={styles.h1Title}>About Screen</Text>
      <Button title="Go to Home" onPress={() => navigate('Home')} />
    </View>
  );
}
