import { GET_MOVIE_DETAILS_FAIL, GET_MOVIE_DETAILS_REQUEST, GET_MOVIE_DETAILS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  details: [],
  loading: false,
};
const getMovieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_REQUEST:
      return {
        loading: true,
        details: [],
      };

    case GET_MOVIE_DETAILS_SUCCESS:
      return { ...state, details: action.payload.genres, loading: false };

    case GET_MOVIE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getMovieDetailsReducer;
