import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import AllTimeBest from '../../components/Movie/allTimeBest';
import TopRated from '../../components/Movie/topRated';
import Trending from '../../components/Movie/trending';
import Upcoming from '../../components/Movie/upcoming';
import Popular from '../../components/Movie/popular';
import Header from '../../components/Header';

const Movies = () => {
  return (
    <ScrollView bounces={false} style={{ backgroundColor: '#0f0f1a' }} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" />
      <Header />
      <Trending />
      <Popular />
      <Upcoming />
      <TopRated />
      <AllTimeBest />
    </ScrollView>
  );
};

export default Movies;
