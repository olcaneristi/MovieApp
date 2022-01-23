import { View, StyleSheet, ScrollView, StatusBar, Text } from 'react-native';
import React from 'react';
import Header from '../../components/Header';

export default function Profile() {
  return (
    <View style={{ backgroundColor: '#0f0f1a', flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View style={styles.container}>
        <Text style={{ color: '#FFF' }}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
