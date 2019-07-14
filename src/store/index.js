import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers'

// mount it on the Store
export const store = createStore(
  reducer,
  applyMiddleware(ReduxThunk, logger)
);
