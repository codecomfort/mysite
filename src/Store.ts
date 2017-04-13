import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import awsApiSample01Reducer from './aws-api-sample01/module';
import counterReducer from './counter/module';  // default export に counterReducer と命名

export default createStore(
  combineReducers({
    awsApiSample01: awsApiSample01Reducer,
    counter: counterReducer,
  }),
);
