import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduceCoins from './coins/coins';

const reducer = combineReducers({
  reduceCoins,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
