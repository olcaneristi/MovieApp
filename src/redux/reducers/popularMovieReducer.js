import {
  GET_POPULAR_MOVIES_FAIL,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_REQUEST,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  favorites: [],
  loading: false,
};
const popularMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_REQUEST:
      return {
        loading: true,
        movies: [],
      };

    case GET_POPULAR_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false };

    case GET_POPULAR_MOVIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default popularMovieReducer;
