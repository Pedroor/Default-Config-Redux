import { createStore, applyMiddleware, Middleware } from 'redux';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import createSagaMiddleware from 'redux-saga';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
export default store;
