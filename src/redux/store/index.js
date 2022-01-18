import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieReducers from '../reducers/movieReducers';

const rootReducer = combineReducers({
  movieReducers,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
