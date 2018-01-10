import { createStore, applyMiddleware } from 'redux';
import middlewares from '../middleware';
import reducer from '../reducer';

const productStore = createStore(
  reducer,
  applyMiddleware(...middlewares)
);

const store = productStore;

export default store;
