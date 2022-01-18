import {
  GET_MOVIES_FAIL,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './actionTypes';
import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'ccb0a8566b23ab43471cda53fed3d9e7';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(BASE_URL);
      dispatch({
        type: GET_MOVIES_REQUEST,
      });
      if (res.data)
        return dispatch({
          type: GET_MOVIES_SUCCESS,
          payload: res.data.results,
        });
    };
  } catch (error) {
    dispatch({
      type: GET_MOVIES_FAIL,
      payload: error.message,
    });
  }
};

export const addFavorite = movie => dispatch => {
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: movie,
  });
};

export const removeFavorite = movie => dispatch => {
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: movie,
  });
};
