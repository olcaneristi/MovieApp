import React from 'react';
import { View, Image, TouchableOpacity, Dimensions, Animated, SafeAreaView } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { styles } from '../../styles/components/movieCard.styles';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w342';
const BACKDROP_URL = 'https://image.tmdb.org/t/p/w780';

const TrendingCard = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
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
              style={{ height: 330, borderRadius: 10 }}
            />
          </SharedElement>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TrendingCard;
