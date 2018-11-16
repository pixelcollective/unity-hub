import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle';
import reducer from './reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, {}, enhancer);

store.subscribe(throttle(() => {
  (store.getState()) ? console.log(store.getState()) : console.log(null);
}, 1000));

export default store