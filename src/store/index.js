import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from "redux-thunk";

const store = createStore(reducer,applyMiddleware(thunk));

// to see state in console after every dispatch
store.subscribe(() => console.info(store.getState()))

export default store;