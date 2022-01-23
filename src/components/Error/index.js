import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Error = ({ error }) => {
  return (
    <View style={styles.container}>
      <Text>{error}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
