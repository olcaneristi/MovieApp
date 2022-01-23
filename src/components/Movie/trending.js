import { View, Text, FlatList, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../redux/actions/movieActions';
import TrendingCard from '../TrendingCard';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

export default function Trending() {
  const navigation = useNavigation();
  const { movies } = useSelector(state => state.trendingMovieReducer);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());
  const { width } = Dimensions.get('window');

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = ({ item }) => {
    return <TrendingCard item={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        inactiveSlideScale={0.85}
        inactiveSlideOpacity={0.4}
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMovies}
        sliderWidth={width}
        itemWidth={width / 1.5}
        snapToInterval={0}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
});
