import { createStore, applyMiddleware, compose } from 'redux';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import Reactotron from '../config/reactotron';

import createSagaMiddleware from 'redux-saga';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), Reactotron.createEnhancer()),
);

sagaMiddleware.run(rootSaga);

export default store;
// a