import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ccb0a8566b23ab43471cda53fed3d9e7';

export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}/trending/all/week?api_key=${API_KEY}`);
      dispatch({
        type: types.GET_MOVIES_REQUEST,
      });
      if (res.data)
        return dispatch({
          type: types.GET_MOVIES_SUCCESS,
          payload: res.data.results,
        });
    };
  } catch (error) {
    dispatch({
      type: types.GET_MOVIES_FAIL,
      payload: error.message,
    });
  }
};

export const getPopularMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      dispatch({
        type: types.GET_POPULAR_MOVIES_REQUEST,
      });
      if (res.data)
        return dispatch({
          type: types.GET_POPULAR_MOVIES_SUCCESS,
          payload: res.data.results,
        });
    };
  } catch (error) {
    dispatch({
      type: types.GET_POPULAR_MOVIES_FAIL,
      payload: error.message,
    });
  }
};

export const getTopRatedMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}`);
      dispatch({
        type: types.GET_TOPRATED_MOVIES_REQUEST,
      });
      if (res.data)
        return dispatch({
          type: types.GET_TOPRATED_MOVIES_SUCCESS,
          payload: res.data.results,
        });
    };
  } catch (error) {
    dispatch({
      type: types.GET_TOPRATED_MOVIES_FAIL,
      payload: error.message,
    });
  }
};

export const getAllTimeBestMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc`);
      dispatch({
        type: types.GET_ALLTIME_BEST_MOVIE_REQUEST,
      });
      if (res.data)
        return dispatch({
          type: types.GET_ALLTIME_BEST_MOVIE_SUCCESS,
          payload: res.data.results,
        });
    };
  } catch (error) {
    dispatch({
      type: types.GET_ALLTIME_BEST_MOVIE_FAIL,
      payload: error.message,
    });
  }
};

export const getUpcomingMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
      dispatch({
        type: types.GET_UPCOMING_MOVIES_REQUEST,
      });
      if (res.data) {
        return dispatch({
          type: types.GET_UPCOMING_MOVIES_SUCCESS,
          payload: res.data.results.slice(0, 10),
        });
      }
    };
  } catch (error) {
    dispatch({
      type: types.GET_UPCOMING_MOVIES_FAIL,
      payload: error.message,
    });
  }
};

export const getMovieDetails = id => {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
      dispatch({
        type: types.GET_MOVIE_DETAILS_REQUEST,
      });
      if (res.data)
        return dispatch({
          type: types.GET_MOVIE_DETAILS_SUCCESS,
          payload: res.data,
        });
    };
  } catch (error) {
    dispatch({
      type: types.GET_MOVIE_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const getCredits = id => {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`);
      dispatch({
        type: types.GET_CREDITS_REQUEST,
      });
      if (res.data)
        return dispatch({
          type: types.GET_CREDITS_SUCCESS,
          payload: res.data,
        });
    };
  } catch (error) {
    dispatch({
      type: types.GET_CREDITS_FAIL,
      payload: error.message,
    });
  }
};

export const getRecommendations = id => {
  try {
    return async dispatch => {
      const res = await axios.get(`${API_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
      dispatch({
        type: types.GET_RECOMMENDATIONS_REQUEST,
      });
      if (res.data)
        return dispatch({
          type: types.GET_RECOMMENDATIONS_SUCCESS,
          payload: res.data.results.slice(0, 10),
        });
    };
  } catch (error) {
    dispatch({
      type: types.GET_RECOMMENDATIONS_FAIL,
      payload: error.message,
    });
  }
};

export const addFavorite = movie => dispatch => {
  dispatch({
    type: types.ADD_TO_FAVORITES,
    payload: movie,
  });
};

export const removeFavorite = movie => dispatch => {
  dispatch({
    type: types.REMOVE_FROM_FAVORITES,
    payload: movie,
  });
};
