import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getMovieDetails } from '../../redux/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../styles/screens/details.styles';
import Star from '../../assets/Star';
import Schedule from '../../assets/Schedule';
import Bookmark from '../../assets/Bookmark';
import BookmarkFill from '../../assets/BookmarkFill';
import { SharedElement } from 'react-navigation-shared-element';

export default function MovieDetails({ item, BACKDROP_URL, IMAGE_URL, navigation }) {
  const [save, setSave] = useState(false);
  const { details } = useSelector(state => state.getMovieDetailsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetails(item.id));
  }, [item.id]);

  const handleSave = () => {
    setSave(prev => !prev);
  };

  const renderCategories = ({ item }) => {
    return (
      <View style={{ marginRight: 4, marginBottom: 4 }}>
        <TouchableOpacity style={{ borderRadius: 8, backgroundColor: 'rgba(255,255,255, 0.4)' }} activeOpacity={0.8}>
          <Text style={{ padding: 6, fontSize: 12.5, color: '#FFF', fontWeight: '500' }}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Image source={{ uri: BACKDROP_URL + item.backdrop_path }} style={styles.background__image} />

      <View style={styles.cta__container}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={styles.cta__button}>
          <Image source={require('../../assets/arrow-back.png')} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={handleSave} style={styles.cta__button}>
          {save ? <BookmarkFill /> : <Bookmark />}
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.content__wrapper}>
          <SharedElement id={`item.${item.id}.poster_path`}>
            <Image source={{ uri: IMAGE_URL + item.poster_path }} style={styles.poster__image} />
          </SharedElement>

          <View style={styles.description}>
            <View style={styles.description__wrapper}>
              <Text numberOfLines={3} style={styles.heading}>
                {item.title ? item.title : item.name}
              </Text>
              <FlatList
                data={details}
                renderItem={renderCategories}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categories}
              />
              <View style={styles.release}>
                <Schedule />
                <Text style={styles.release__text}>{item?.release_date?.slice(0, 4)}</Text>
              </View>

              <View style={styles.rating}>
                <Star />
                <Text style={styles.rating__text}>
                  {item.vote_average} ({item.vote_count})
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.play__cta} activeOpacity={0.75} onPress={() => alert('Coming soon!')}>
              <Text style={styles.play__cta_text}>Watch Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.overview}>{item.overview}</Text>
      </View>
    </View>
  );
}
