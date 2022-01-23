import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  favorites: [],
  loading: false,
};
const trendingMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false };

    case GET_MOVIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(movie => movie.id !== action.payload.id),
      };

    default:
      return state;
  }
};
export default trendingMovieReducer;
