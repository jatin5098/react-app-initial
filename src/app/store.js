// react core
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// reducers
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import appReducer from './reducers/appReducer.js';

const myLogger = (store) => (next) => (action) => {
    console.log('Logged Action: ', action);
    next(action);
};
const store = createStore(
    combineReducers({appReducer, routing: routerReducer}), 
    {}, 
    applyMiddleware(myLogger, thunk, promise())
);
store.subscribe(() => {
    console.log(store.getState());
});

export default store;