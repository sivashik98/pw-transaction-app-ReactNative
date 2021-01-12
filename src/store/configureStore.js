import {createStore, applyMiddleware} from 'redux';

import rootReducer from './rootReducer';

const configureStore = (initialState, saga) =>
  createStore(rootReducer, initialState, applyMiddleware(saga));

export default configureStore;
