import counterReducer from './counter/module';  // default export に counterReducer と命名
import awsApiSample01Reducer from './aws-api-sample01/module';
import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';

export default createStore(
  combineReducers({
    counter: counterReducer,
    awsApiSample01: awsApiSample01Reducer
  })
);
