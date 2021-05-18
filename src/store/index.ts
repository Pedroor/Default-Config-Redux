import { createStore } from 'redux';
import { ICartState } from './modules/cart/types';
import reactotron from '../../ReactotronConfig';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: ICartState;
}

const store = createStore(rootReducer, reactotron.createEnhancer());

export default store;
