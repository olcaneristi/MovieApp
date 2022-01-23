import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    paddingVertical: 30,
  },
  image_wrapper: {
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  image: {
    width: 180,
    height: 240,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: -0.25,
  },
});
