import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import trendingMovieReducer from '../reducers/trendingMovieReducer';
import topRatedMovieReducer from '../reducers/topRatedMovieReducer';
import allTimeBestReducer from '../reducers/allTimeBestReducer';
import getCreditsReducer from '../reducers/getCreditsReducer';
import getRecommendationsReducer from '../reducers/getRecommendationsReducer';
import getMovieDetailsReducer from '../reducers/getMovieDetailsReducer';
import upcomingMovieReducer from '../reducers/upcomingMovieReducer';
import popularMovieReducer from '../reducers/popularMovieReducer';

const rootReducer = combineReducers({
  trendingMovieReducer: trendingMovieReducer,
  topRatedMovieReducer: topRatedMovieReducer,
  allTimeBestReducer: allTimeBestReducer,
  upcomingMovieReducer: upcomingMovieReducer,
  getCreditsReducer: getCreditsReducer,
  getRecommendationsReducer: getRecommendationsReducer,
  getMovieDetailsReducer: getMovieDetailsReducer,
  popularMovieReducer: popularMovieReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
