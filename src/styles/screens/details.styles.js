import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1A29',
  },

  background__image: {
    height: Dimensions.get('screen').height / 2,
    resizeMode: 'cover',
    opacity: 0.35,
  },

  cta__container: {
    position: 'absolute',
    top: 60,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  cta__button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },

  content: {
    marginTop: -120,
    paddingHorizontal: 20,
  },

  content__wrapper: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  poster__image: {
    width: 140,
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 20,
  },

  description: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
    marginRight: 25,
    flex: 1,
    paddingTop: 5,
  },

  description__wrapper: {
    flex: 1,
  },

  heading: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 25,
    paddingBottom: 15,
  },

  categories: {
    flexGrow: 0,
    paddingBottom: 10,
  },

  release: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },

  release__text: {
    color: '#FFF',
    paddingLeft: 5,
    letterSpacing: 0.6,
  },

  rating: {
    flexDirection: 'row',
    paddingBottom: 5,
  },

  rating__text: {
    color: '#FFF',
    paddingLeft: 5,
    paddingBottom: 5,
    letterSpacing: 0.6,
  },

  play__cta: {
    backgroundColor: '#E82626',
    borderRadius: 8,
    paddingVertical: 10,
  },

  play__cta_text: {
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
  },

  overview: {
    color: '#FFF',
    textAlign: 'justify',
    marginVertical: 30,
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 0.6,
  },
});
