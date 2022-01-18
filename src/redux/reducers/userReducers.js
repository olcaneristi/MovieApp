import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/actionTypes';

const initialState = {
  users: [],
};
const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        users: [],
      };

    case LOGIN_SUCCESS:
      return { ...state, users: action.payload, loading: false };

    case LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default movieReducers;
