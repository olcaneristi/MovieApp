import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../redux/actions/movieActions';
import MovieCard from '../../components/MovieCard';

const Movies = () => {
  const { movies, loading, error } = useSelector(state => state.movieReducers);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = ({ item }) => <MovieCard item={item} />;

  return movies && <FlatList data={movies} keyExtractor={item => item.id.toString()} renderItem={renderMovies} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Movies;
