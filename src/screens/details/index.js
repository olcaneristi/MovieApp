import React from 'react';
import { ScrollView } from 'react-native';
import MovieDetails from '../../components/MovieDetails';
import Credits from '../../components/Credits';
import RecommendedMovie from '../../components/RecommendedMovie';

const Details = ({ navigation, route }) => {
  const { item, IMAGE_URL, BACKDROP_URL } = route.params;

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: '#1C1A29' }} bounces={false}>
      <MovieDetails item={item} BACKDROP_URL={BACKDROP_URL} IMAGE_URL={IMAGE_URL} navigation={navigation} />
      <Credits item={item} IMAGE_URL={IMAGE_URL} />
      <RecommendedMovie item={item} IMAGE_URL={IMAGE_URL} navigation={navigation} />
    </ScrollView>
  );
};

export default Details;
