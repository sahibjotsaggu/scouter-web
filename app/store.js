import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from './reducers';
import promiseMiddleware from './middleware/redux/promise';

const initialState = {};
const reducer = combineReducers(reducers);

let composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);

export default composeStoreWithMiddleware(reducer, initialState);
