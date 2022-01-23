import { View, Text, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUpcomingMovies } from '../../redux/actions/movieActions';
import UpcomingCard from '../UpcomingCard';
import { useNavigation } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

export default function Upcoming() {
  const navigation = useNavigation();
  const { movies } = useSelector(state => state.upcomingMovieReducer);
  const dispatch = useDispatch();
  const fetchUpcomingMovies = () => dispatch(getUpcomingMovies());
  const isCarousel = useRef(null);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  const renderMovies = ({ item, index }) => <UpcomingCard item={item} index={index} navigation={navigation} />;

  return (
    <View>
      <Text
        style={{ marginLeft: 20, marginTop: 10, fontWeight: '800', fontSize: 28, letterSpacing: 0.6, color: '#FFF' }}
      >
        Upcoming
      </Text>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={movies}
        renderItem={renderMovies}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
        key={item => item.id.toString()}
        style={{ position: 'relative' }}
        loop={true}
      />
      <Pagination
        dotsLength={movies.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        containerStyle={{ position: 'absolute', bottom: 5, left: 0, right: 0 }}
        dotContainerStyle={{ marginHorizontal: 5 }}
        dotStyle={{
          width: 9,
          height: 9,
          borderRadius: 5,
          backgroundColor: '#E82626',
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgba(255,255,255, 1)',
        }}
        inactiveDotScale={1}
        inactiveDotOpacity={1}
        tappableDots={true}
      />
    </View>
  );
}
