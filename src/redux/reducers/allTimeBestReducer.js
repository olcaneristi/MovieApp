import {
  GET_ALLTIME_BEST_MOVIE_REQUEST,
  GET_ALLTIME_BEST_MOVIE_SUCCESS,
  GET_ALLTIME_BEST_MOVIE_FAIL,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  favorites: [],
  loading: false,
};
const allTimeBestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLTIME_BEST_MOVIE_REQUEST:
      return {
        loading: true,
        movies: [],
      };

    case GET_ALLTIME_BEST_MOVIE_SUCCESS:
      return { ...state, movies: action.payload, loading: false };

    case GET_ALLTIME_BEST_MOVIE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default allTimeBestReducer;
