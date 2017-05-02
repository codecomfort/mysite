import * as Im from 'immutable';
import {createStore} from 'redux';
import {reducer as formReducer} from 'redux-form/immutable';
import {combineReducers} from 'redux-immutable';
import awsApiSample01Reducer, {IViewState} from './aws-api-sample01/module';
import counterReducer, {ICounterState} from './counter/module';  // default export に counterReducer と命名
import {Content, IContent, ISearchSample01State} from './search-sample-01/Interfaces';
import searchSample01Reducer from './search-sample-01/module';

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

  public static searchSample01: ISearchSample01State = {
    from: '',
    searchResults: [],
    cls: '',
    to: '',
  };
}

// redux-immutable の combineReducers を使うことで、
// 内部ステートを Immutable なオブジェクトにできる
// （Redux 謹製の combineReducers だと ステートは
// プレーンな JS オブジェクトである必要がある）
// 詳細は redux-immutable のドキュメントを参照のこと
const getDefaultState = Im.Record({
  awsApiSample01: InitialState.awsApiSample01,
  counter: InitialState.counter,
  form: Im.Map(),
  searchSample01: InitialState.searchSample01,
});

export default createStore(
  combineReducers(
    {
      awsApiSample01: awsApiSample01Reducer,
      counter: counterReducer,
      form: formReducer,
      searchSample01: searchSample01Reducer,
    },
    getDefaultState,
  ),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
