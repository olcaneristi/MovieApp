import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w185';

const MovieCard = ({ item, handleAddFavorites, handleRemoveFavorites, exists }) => {
  return (
    <View style={{ marginVertical: 12 }}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <Image
          source={{
            uri: IMAGE_URL + item.poster_path,
          }}
          resizeMode="cover"
          style={{ width: 100, height: 150, borderRadius: 10 }}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <View>
            <Text style={{ fontSize: 22, paddingRight: 16 }}>{item.title}</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 10,
              alignItems: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 10,
                color: '#64676D',
              }}
            >
              {item.vote_count}
            </Text>
            <TouchableOpacity
              onPress={() => (exists(item) ? handleRemoveFavorites(item) : handleAddFavorites(item))}
              activeOpacity={0.7}
              style={{
                marginLeft: 14,
                padding: 2,
                borderRadius: 20,
                height: 40,
                width: 40,
              }}
            >
              <Text>Add to fav</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;
