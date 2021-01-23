import {createStore, combineReducers, applyMiddleware} from 'redux';
import cartReducer from './reducers'
import logger from 'redux-logger' ;

const middleware = [];
if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
} 
const reducer = combineReducers({'cart':cartReducer})
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;