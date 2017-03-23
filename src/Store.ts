import counterReducer from './counter/module';  // default export に counterReducer と命名
import {createStore, combineReducers} from 'redux';

export default createStore(
  combineReducers({
    counter: counterReducer
  })
);
