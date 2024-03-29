import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { styles } from '../../styles/components/movieCard.styles';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w342';
const BACKDROP_URL = 'https://image.tmdb.org/t/p/w780';

const MovieCard = ({ item, index, navigation }) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.push('Details', { item, IMAGE_URL, BACKDROP_URL })}
      >
        <View style={styles.image_wrapper}>
          <SharedElement id={item.id}>
            <Image
              source={{
                uri: IMAGE_URL + item.poster_path,
              }}
              resizeMode="cover"
              style={styles.image}
            />
          </SharedElement>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
