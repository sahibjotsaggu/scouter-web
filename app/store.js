import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from './reducers';

const initialState = {};
const reducer = combineReducers(reducers);

let composeStoreWithMiddleware = applyMiddleware(
  // add redux middleware here
)(createStore);

export default composeStoreWithMiddleware(reducer, initialState);
