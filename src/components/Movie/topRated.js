import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopRatedMovies } from '../../redux/actions/movieActions';
import MovieCard from '../MovieCard';
import { useNavigation } from '@react-navigation/native';

export default function TopRated() {
  const navigation = useNavigation();
  const { movies } = useSelector(state => state.topRatedMovieReducer);
  const dispatch = useDispatch();
  const fetchTopRatedMovies = () => dispatch(getTopRatedMovies());

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  const renderMovies = ({ item, index }) => <MovieCard item={item} index={index} navigation={navigation} />;

  return (
    <View>
      <Text
        style={{ marginLeft: 20, marginTop: 10, fontWeight: '800', fontSize: 28, letterSpacing: 0.6, color: '#FFF' }}
      >
        Top Rated
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMovies}
      />
    </View>
  );
}
