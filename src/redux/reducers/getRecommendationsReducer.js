import {
  GET_RECOMMENDATIONS_FAIL,
  GET_RECOMMENDATIONS_REQUEST,
  GET_RECOMMENDATIONS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  recommendations: [],
  loading: false,
};
const getRecommendationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECOMMENDATIONS_REQUEST:
      return {
        loading: true,
        recommendations: [],
      };

    case GET_RECOMMENDATIONS_SUCCESS:
      return { ...state, recommendations: action.payload, loading: false };

    case GET_RECOMMENDATIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getRecommendationsReducer;
