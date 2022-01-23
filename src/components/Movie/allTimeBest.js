import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTimeBestMovies } from '../../redux/actions/movieActions';
import MovieCard from '../MovieCard';
import { useNavigation } from '@react-navigation/native';

export default function AllTimeBest() {
  const navigation = useNavigation();
  const { movies } = useSelector(state => state.allTimeBestReducer);
  const dispatch = useDispatch();
  const fetchAllTimeBestMovies = () => dispatch(getAllTimeBestMovies());

  useEffect(() => {
    setTimeout(() => {
      fetchAllTimeBestMovies();
    }, 2000);
  }, []);

  const renderMovies = ({ item, index }) => <MovieCard item={item} index={index} navigation={navigation} />;

  return (
    <View>
      <Text
        style={{ marginLeft: 20, marginTop: 10, fontWeight: '800', fontSize: 28, letterSpacing: 0.6, color: '#FFF' }}
      >
        All-Time Best
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
