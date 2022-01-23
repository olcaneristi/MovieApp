import { Text, TouchableOpacity, Image, View, FlatList, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { getRecommendations } from '../../redux/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard';

export default function RecommendedMovie({ item, navigation }) {
  const { recommendations } = useSelector(state => state.getRecommendationsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendations(item.id));
  }, [item.id]);

  const renderMovies = ({ item, index }) => <MovieCard item={item} index={index} navigation={navigation} />;

  return (
    <View>
      <Text style={{ marginTop: 25, marginLeft: 20, color: '#FFF', fontWeight: 'bold', fontSize: 26, opacity: 0.85 }}>
        You may also like
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={recommendations}
        keyExtractor={recomm => recomm.id.toString()}
        renderItem={renderMovies}
        style={{ marginBottom: 20 }}
      />
    </View>
  );
}
