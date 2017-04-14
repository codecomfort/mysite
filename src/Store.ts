import * as Im from 'immutable';
import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import awsApiSample01Reducer, {IViewState} from './aws-api-sample01/module';
import counterReducer, {ICounterState} from './counter/module';  // default export に counterReducer と命名

class InitialState {
  // FIXME Immutable 化できないか？
  // recuder 内でいちいち fromJS しないと merge メソッドが使えないので。
  public static awsApiSample01: IViewState = {
    input: '',
    inputForRegister: '',
    jsonResult: {
      httpStatus: '',
      recipes: [],
    },
  };

  public static counter: ICounterState = {
    num: 3,
  };
}
const initialState = Im.Record({
  awsApiSample01: InitialState.awsApiSample01,
  counter: InitialState.counter,
});

export default createStore(
  combineReducers(
    {
      awsApiSample01: awsApiSample01Reducer,
      counter: counterReducer,
    },
    initialState,
  ),
);
