'use strict';

var {createStore, combineReducers} = require('redux');


import vars from './reducers/vars'
import lists from './reducers/lists'
import map from './reducers/map'

var mainReducer = combineReducers({
  vars,
  lists,
  map
});

export default  createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
