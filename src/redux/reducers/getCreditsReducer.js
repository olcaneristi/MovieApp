import { GET_CREDITS_FAIL, GET_CREDITS_SUCCESS, GET_CREDITS_REQUEST } from '../actions/actionTypes';

const initialState = {
  credits: [],
  loading: false,
};
const getCreditsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CREDITS_REQUEST:
      return {
        loading: true,
        credits: [],
      };

    case GET_CREDITS_SUCCESS:
      return { ...state, credits: action.payload.cast, loading: false };

    case GET_CREDITS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getCreditsReducer;
