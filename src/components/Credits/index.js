import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, Image, View, FlatList, ScrollView } from 'react-native';
import { getCredits } from '../../redux/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Credits({ item, IMAGE_URL }) {
  const { credits } = useSelector(state => state.getCreditsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCredits(item.id));
  }, [item.id]);

  const renderCredits = ({ item }) => {
    return (
      <View style={{ marginLeft: 20, marginBottom: 10, alignItems: 'center' }}>
        <View style={{ width: 110, alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => alert('Coming soon!')}
            style={{
              borderRadius: 999,
              backgroundColor: 'rgba(255,255,255, 0.4)',
              overflow: 'hidden',
              width: 100,
              height: 100,
              marginBottom: 10,
            }}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: `${IMAGE_URL}/${item.profile_path}`,
              }}
              style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
            />
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: '#FFF', paddingBottom: 5, fontSize: 15, textAlign: 'center' }}>{item.name}</Text>
            <Text style={{ color: '#FFF', opacity: 0.6, fontStyle: 'italic', fontSize: 13, textAlign: 'center' }}>
              {item.character.length > 20 ? item.character.slice(0, 20) + '...' : item.character}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: '#242135', paddingVertical: 20, marginTop: 30 }}>
      <Text
        style={{ marginBottom: 20, marginLeft: 20, color: '#FFF', fontWeight: 'bold', fontSize: 26, opacity: 0.85 }}
      >
        Cast
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={credits.slice(0, 10)}
        keyExtractor={credit => credit.id.toString()}
        renderItem={renderCredits}
      />
    </View>
  );
}
